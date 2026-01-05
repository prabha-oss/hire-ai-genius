import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SanityImageSource = any;

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "5kzfd5iy",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Image URL builder
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Types
export interface Author {
  _id: string;
  name: string;
  image?: SanityImageSource;
  bio?: string;
}

export interface Category {
  _id: string;
  title: string;
  slug: { current: string };
}

export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: SanityImageSource;
  author: Author;
  categories: Category[];
  publishedAt: string;
  body: any[];
  featured?: boolean;
}

// GROQ Queries
export async function getPosts(): Promise<Post[]> {
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        excerpt,
        mainImage,
        publishedAt,
        featured,
        "author": author->{_id, name, image},
        "categories": categories[]->{_id, title, slug}
      }
    `);
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getFeaturedPosts(): Promise<Post[]> {
  try {
    return await client.fetch(`
      *[_type == "post" && featured == true] | order(publishedAt desc)[0...3] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt,
        "categories": categories[]->{_id, title, slug}
      }
    `);
  } catch (error) {
    console.error("Error fetching featured posts:", error);
    return [];
  }
}

export async function getLatestPosts(): Promise<Post[]> {
  try {
    return await client.fetch(`
      *[_type == "post"] | order(publishedAt desc)[0...5] {
        _id,
        title,
        slug,
        mainImage,
        publishedAt
      }
    `);
  } catch (error) {
    console.error("Error fetching latest posts:", error);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  return client.fetch(
    `
    *[_type == "post" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      body,
      "author": author->{_id, name, image, bio},
      "categories": categories[]->{_id, title, slug}
    }
  `,
    { slug }
  );
}

export async function getRelatedPosts(
  currentSlug: string,
  categoryIds: string[]
): Promise<Post[]> {
  return client.fetch(
    `
    *[_type == "post" && slug.current != $currentSlug && count((categories[]._ref)[@ in $categoryIds]) > 0] | order(publishedAt desc)[0...4] {
      _id,
      title,
      slug,
      excerpt,
      mainImage,
      publishedAt,
      "author": author->{_id, name, image},
      "categories": categories[]->{_id, title, slug}
    }
  `,
    { currentSlug, categoryIds }
  );
}

export async function getCategories(): Promise<Category[]> {
  return client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      slug
    }
  `);
}

// Calculate reading time
export function calculateReadingTime(body: any[]): number {
  const text = body
    ?.map((block: any) =>
      block._type === "block"
        ? block.children?.map((child: any) => child.text).join(" ")
        : ""
    )
    .join(" ");
  const wordCount = text?.split(/\s+/).length || 0;
  return Math.ceil(wordCount / 200);
}
