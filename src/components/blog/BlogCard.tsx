import Image from "next/image";
import Link from "next/link";
import { Post, urlFor } from "@/lib/sanity";
import styles from "./BlogCard.module.css";

interface BlogCardProps {
    post: Post;
    variant?: "grid" | "sidebar";
}

export default function BlogCard({ post, variant = "grid" }: BlogCardProps) {
    const formattedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    if (variant === "sidebar") {
        return (
            <Link href={`/blog/${post.slug.current}`} className={styles.sidebarCard}>
                {post.mainImage && (
                    <Image
                        src={urlFor(post.mainImage).width(160).height(120).url()}
                        alt={post.title}
                        width={80}
                        height={60}
                        className={styles.sidebarImage}
                    />
                )}
                <div className={styles.sidebarContent}>
                    <div className={styles.sidebarDate}>{formattedDate}</div>
                    <h4 className={styles.sidebarTitle}>{post.title}</h4>
                </div>
            </Link>
        );
    }

    return (
        <Link href={`/blog/${post.slug.current}`} className={styles.blogCard}>
            <div className={styles.imageWrapper}>
                {post.mainImage && (
                    <Image
                        src={urlFor(post.mainImage).width(600).height(400).url()}
                        alt={post.title}
                        fill
                        className={styles.image}
                    />
                )}
                {post.categories?.[0] && (
                    <span className={styles.categoryBadge}>
                        {post.categories[0].title}
                    </span>
                )}
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{post.title}</h3>
                {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                <div className={styles.meta}>
                    {post.author && (
                        <div className={styles.author}>
                            {post.author.image && (
                                <Image
                                    src={urlFor(post.author.image).width(56).height(56).url()}
                                    alt={post.author.name}
                                    width={28}
                                    height={28}
                                    className={styles.authorAvatar}
                                />
                            )}
                            <span className={styles.authorName}>{post.author.name}</span>
                        </div>
                    )}
                    <span className={styles.dot}>•</span>
                    <span>{formattedDate}</span>
                </div>
            </div>
        </Link>
    );
}
