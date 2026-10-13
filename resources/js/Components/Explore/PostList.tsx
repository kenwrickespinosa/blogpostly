import { usePage } from "@inertiajs/react";
import PostCard from "./PostCard.js";
import type { Post } from "../../types/post.ts";

type PostListProps = {
    posts: Post[]
}

function PostList() {
    const { posts } = usePage<PostListProps>().props;

    return (
        <div className="flex flex-col gap-4">
            {posts.map((post: Post) => (
                <PostCard data={post} key={post.id} />
            ))}
        </div>
    );
}

export default PostList;
