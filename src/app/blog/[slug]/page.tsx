import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    getPost,
    getRelatedPosts,
    urlFor,
    calculateReadingTime,
} from "@/lib/sanity";
import BlogContent from "@/components/blog/BlogContent";
import BlogCard from "@/components/blog/BlogCard";
import styles from "./page.module.css";

interface PageProps {
    params: { slug: string };
}

export async function generateMetadata({
    params,
}: PageProps): Promise<Metadata> {
    const decodedSlug = decodeURIComponent(params.slug);
    const post = await getPost(decodedSlug);
    if (!post) return { title: "Post Not Found" };

    return {
        title: `${post.title} | Hire AI Genius Blog`,
        description: post.excerpt,
        openGraph: {
            title: post.title,
            description: post.excerpt,
            images: post.mainImage
                ? [urlFor(post.mainImage).width(1200).height(630).url()]
                : [],
        },
    };
}

export const revalidate = 60;

export default async function BlogPostPage({ params }: PageProps) {
    // Decode URL-encoded slug (e.g., "test%20slug" -> "test slug")
    const decodedSlug = decodeURIComponent(params.slug);
    const post = await getPost(decodedSlug);

    if (!post) {
        notFound();
    }

    const categoryIds = post.categories?.map((cat) => cat._id) || [];
    const relatedPosts = await getRelatedPosts(params.slug, categoryIds);
    const readingTime = calculateReadingTime(post.body);

    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    // Extract headings for table of contents
    const headings =
        post.body
            ?.filter(
                (block: any) =>
                    block._type === "block" && ["h2", "h3"].includes(block.style)
            )
            .map((block: any) => ({
                text: block.children?.map((child: any) => child.text).join(""),
                level: block.style,
            })) || [];

    return (
        <div className={styles.postPage}>
            {/* Container for header content */}
            <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
                {/* Breadcrumbs */}
                <nav className={styles.breadcrumbs}>
                    <Link href="/">Home</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <Link href="/blog">Blog</Link>
                    <span className={styles.breadcrumbSeparator}>/</span>
                    <span>{post.title}</span>
                </nav>

                {/* Header */}
                <header className={styles.header}>
                    {post.categories && post.categories.length > 0 && (
                        <div className={styles.categories}>
                            {post.categories.map((cat) => (
                                <span key={cat._id} className={styles.categoryTag}>
                                    {cat.title}
                                </span>
                            ))}
                        </div>
                    )}
                    <h1 className={styles.title}>{post.title}</h1>
                    {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                </header>

                {/* Hero Image */}
                {post.mainImage && (
                    <div className={styles.heroImage}>
                        <Image
                            src={urlFor(post.mainImage).width(1200).height(675).url()}
                            alt={post.title}
                            width={1200}
                            height={675}
                            priority
                        />
                    </div>
                )}

                {/* Meta */}
                <div className={styles.meta}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        {post.author && (
                            <div className={styles.author}>
                                {post.author.image && (
                                    <Image
                                        src={urlFor(post.author.image).width(88).height(88).url()}
                                        alt={post.author.name}
                                        width={44}
                                        height={44}
                                        className={styles.authorAvatar}
                                    />
                                )}
                                <div className={styles.authorInfo}>
                                    <span className={styles.authorLabel}>Published by</span>
                                    <span className={styles.authorName}>{post.author.name}</span>
                                </div>
                            </div>
                        )}
                        <div className={styles.dateDivider} />
                        <div className={styles.dateInfo}>
                            <span className={styles.dateLabel}>Updated on</span>
                            <span className={styles.dateValue}>{formattedDate}</span>
                        </div>
                    </div>

                    <div className={styles.shareButtons}>
                        <button className={styles.copyButton}>📋 Copy link</button>
                        <button className={styles.shareButton}>f</button>
                        <button className={styles.shareButton}>📷</button>
                        <button className={styles.shareButton}>in</button>
                    </div>
                </div>
            </div>

            {/* Content with Sidebar */}
            <div className={styles.contentWrapper}>
                {/* Sidebar */}
                <aside className={styles.sidebar}>
                    {/* Newsletter */}
                    <div className={styles.newsletter}>
                        <h3 className={styles.newsletterTitle}>Subscribe to Newsletter</h3>
                        <p className={styles.newsletterText}>
                            Stay informed with expert analysis, industry trends, and
                            actionable tips.
                        </p>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className={styles.emailInput}
                        />
                        <button className={styles.subscribeButton}>Subscribe</button>
                        <p className={styles.privacyNote}>
                            We care about your privacy, we won't spam
                        </p>
                    </div>

                    {/* Table of Contents */}
                    {headings.length > 0 && (
                        <div className={styles.tableOfContents}>
                            <h4 className={styles.tocTitle}>Table of contents</h4>
                            <div className={styles.tocList}>
                                {headings.map((heading: any, i: number) => (
                                    <a key={i} href="#" className={styles.tocItem}>
                                        {heading.text}
                                    </a>
                                ))}
                            </div>
                        </div>
                    )}
                </aside>

                {/* Article Content */}
                <article className={styles.article}>
                    <BlogContent body={post.body} />
                </article>
            </div>

            {/* Related Articles */}
            {relatedPosts.length > 0 && (
                <section className={styles.relatedSection}>
                    <div className={styles.relatedContainer}>
                        <div className={styles.relatedHeader}>
                            <h2 className={styles.relatedTitle}>Related Articles</h2>
                            <div className={styles.relatedNav}>
                                <button className={styles.navButton}>←</button>
                                <button className={styles.navButton}>→</button>
                            </div>
                        </div>
                        <div className={styles.relatedGrid}>
                            {relatedPosts.map((relatedPost) => (
                                <BlogCard key={relatedPost._id} post={relatedPost} />
                            ))}
                        </div>
                        <Link href="/blog" className={styles.viewAllButton}>
                            View all Posts →
                        </Link>
                    </div>
                </section>
            )}

            {/* CTA Banner */}
            <div className={styles.ctaBanner}>
                <span className={styles.ctaEyebrow}>TRY IT NOW</span>
                <h2 className={styles.ctaTitle}>
                    Ready to build your AI team faster?
                </h2>
                <p className={styles.ctaText}>
                    Access pre-vetted AI talent in 14 days. No bad-hire risk, no
                    long-term commitment.
                </p>
                <div className={styles.ctaButtons}>
                    <Link href="/" className={styles.ctaPrimary}>
                        Get Started Now
                    </Link>
                    <Link href="/" className={styles.ctaSecondary}>
                        Learn More →
                    </Link>
                </div>
            </div>
        </div>
    );
}
