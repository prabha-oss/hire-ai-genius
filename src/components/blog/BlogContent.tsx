"use client";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { urlFor } from "@/lib/sanity";
import styles from "./BlogContent.module.css";

interface BlogContentProps {
    body: any[];
}

const components: PortableTextComponents = {
    block: {
        h2: ({ children }) => <h2>{children}</h2>,
        h3: ({ children }) => <h3>{children}</h3>,
        h4: ({ children }) => <h4>{children}</h4>,
        blockquote: ({ children }) => (
            <blockquote className={styles.blockquote}>
                {children}
            </blockquote>
        ),
    },
    marks: {
        link: ({ children, value }) => (
            <a href={value?.href} target="_blank" rel="noopener noreferrer">
                {children}
            </a>
        ),
        code: ({ children }) => <code>{children}</code>,
    },
    types: {
        image: ({ value }) => {
            if (!value?.asset) return null;
            return (
                <figure className={styles.imageBlock}>
                    <Image
                        src={urlFor(value).width(1200).url()}
                        alt={value.alt || "Blog image"}
                        width={720}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                    />
                    {value.caption && (
                        <figcaption className={styles.imageCaption}>
                            {value.caption}
                        </figcaption>
                    )}
                </figure>
            );
        },
        code: ({ value }) => (
            <div className={styles.codeBlock}>
                <code>{value.code}</code>
            </div>
        ),
    },
    list: {
        bullet: ({ children }) => <ul>{children}</ul>,
        number: ({ children }) => <ol>{children}</ol>,
    },
};

export default function BlogContent({ body }: BlogContentProps) {
    if (!body) return null;

    return (
        <div className={styles.content}>
            <PortableText value={body} components={components} />
        </div>
    );
}
