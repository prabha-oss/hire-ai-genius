import { Metadata } from "next";
import { getPosts, getFeaturedPosts, getLatestPosts } from "@/lib/sanity";
import BlogCard from "@/components/blog/BlogCard";
import styles from "./page.module.css";

export const metadata: Metadata = {
    title: "Blog | Hire AI Genius",
    description:
        "Discover insights on AI hiring, fractional talent, and building high-performance AI teams.",
};

export const revalidate = 60; // Revalidate every 60 seconds

export default async function BlogPage() {
    const [posts, featuredPosts, latestPosts] = await Promise.all([
        getPosts(),
        getFeaturedPosts(),
        getLatestPosts(),
    ]);

    return (
        <div className={styles.blogPage}>
            <div className={styles.container}>
                {/* Hero Section */}
                <div className={styles.hero}>
                    <span className={styles.eyebrow}>Blog</span>
                    <h1 className={styles.title}>Discover Our Latest Insights</h1>
                    <p className={styles.subtitle}>
                        Expert perspectives on AI hiring, fractional talent, and building
                        high-performance AI teams.
                    </p>
                    <div className={styles.searchWrapper}>
                        <input
                            type="text"
                            placeholder="Search articles..."
                            className={styles.searchInput}
                        />
                        <button className={styles.searchButton}>Find Now</button>
                    </div>
                </div>

                {/* Main Content */}
                <div className={styles.content}>
                    {/* Blog Grid */}
                    <div className={styles.mainContent}>
                        <h2 className={styles.sectionTitle}>
                            AI Hiring Insights & Best Practices
                        </h2>
                        {posts.length > 0 ? (
                            <div className={styles.blogGrid}>
                                {posts.map((post) => (
                                    <BlogCard key={post._id} post={post} />
                                ))}
                            </div>
                        ) : (
                            <div className={styles.emptyState}>
                                <h3>No posts yet</h3>
                                <p>Check back soon for new content!</p>
                            </div>
                        )}
                    </div>

                    {/* Sidebar */}
                    <aside className={styles.sidebar}>
                        {/* Featured Posts */}
                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>Featured</h3>
                            {featuredPosts.length > 0 ? (
                                featuredPosts.map((post) => (
                                    <BlogCard key={post._id} post={post} variant="sidebar" />
                                ))
                            ) : (
                                <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                                    No featured posts yet
                                </p>
                            )}
                        </div>

                        {/* Latest Posts */}
                        <div className={styles.sidebarSection}>
                            <h3 className={styles.sidebarTitle}>Latest</h3>
                            {latestPosts.length > 0 ? (
                                latestPosts.map((post) => (
                                    <BlogCard key={post._id} post={post} variant="sidebar" />
                                ))
                            ) : (
                                <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                                    No posts yet
                                </p>
                            )}
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    );
}
