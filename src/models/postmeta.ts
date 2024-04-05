export interface FrontMatter {
    readonly author: string;
    readonly title: string;
    readonly description: string;
    readonly pubDate: string; // iso date string
    readonly tags: string[];
    readonly heroImage: string;
    readonly updatedAt?: string; // iso date string
    readonly slug?: string; // permalink
}

export interface PostMeta {
    readonly frontmatter: FrontMatter;
}
