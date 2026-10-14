import { Link, usePage } from "@inertiajs/react";
import { ChevronLeft } from "lucide-react";
import TextArea from "../../../Components/TextArea.js";
import Button from "../../../Components/Button.js";

function Show() {
    const { post, user } = usePage().props;

    const formatDate = (dateString?: string | null) => {
        if (!dateString) return "";

        const date = new Date(dateString);

        if (isNaN(date.getTime())) return "";

        return new Intl.DateTimeFormat("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        }).format(date);
    };

    if (!post || !user) {
        return <div>Wait..</div>;
    }

    return (
        <div className="relative min-h-dvh">
            {/* Header */}
            <header className="bg-white py-4 fixed top-0 w-full z-20 border-b border-b-primary/40">
                <Link
                    href="/explore"
                    className="flex items-center w-fit mx-4 text-lg font-semibold pr-2"
                >
                    <ChevronLeft />
                    <p>BlogPostly</p>
                </Link>
            </header>

            {/* body */}
            <main className="px-4 md:px-40 lg:px-80 bg-white pt-20 pb-10 lg:pb-20">
                <article className="flex flex-col gap-10 lg:gap-16">
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <span className="px-2 py-1 bg-accent text-white rounded-2xl text-xs">
                                Technology
                            </span>
                            <span className="px-2 py-1 bg-accent text-white rounded-2xl text-xs">
                                History
                            </span>
                        </div>
                        <h1 className="text-left font-bold text-4xl text-primary">
                            {post?.title}
                        </h1>
                        <div>
                            <div className="flex items-center gap-2">
                                <div className="h-8 w-8 border rounded-full" />
                                <div>
                                    <p className="text-base font-semibold">
                                        {user}
                                    </p>
                                    <p className="text-xs font-mono">
                                        {formatDate(post?.created_at)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-auto">
                        <p className="text-lg text-primary">{post?.content}</p>
                    </div>

                    <div className="border-t-[0.5px] border-primary/40" />

                    <div className="flex flex-col gap-2">
                        <h2 className="font-medium text-lg">Comments (2)</h2>
                        <div>
                            <TextArea
                                className="w-full mb-4"
                                placeholder="Write a comment..."
                                maxLength={500}
                            />
                            <div className="flex justify-end items-center gap-4">
                                <Button
                                    type="button"
                                    className="h-10 flex text-accent items-center"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    type="button"
                                    className="bg-accent px-2 h-10 flex items-center text-white"
                                >
                                    Respond
                                </Button>
                            </div>
                        </div>

                        <div>
                            <article>Comment here</article>
                        </div>
                    </div>
                </article>
            </main>
        </div>
    );
}

export default Show;
