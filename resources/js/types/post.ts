export type User = {
    id: string;
    email: string;
    name: string;
    slug: string;
};

export type Post = {
    id: string;
    title: string;
    content: string;
    thumbnail: string;
    slug: string;
    user: User;
};