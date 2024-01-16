export interface PostMeta {
    title: string;
    description: string;
    slug?: string; // permalink
    pubDate: string; // iso date string
    updatedAt?: string; // iso date string
    tags: string[];
	heroImage: string;
}