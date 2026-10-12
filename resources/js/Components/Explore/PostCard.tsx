import { ThumbsUp, MessageCircle } from "lucide-react";
import Button from "../Button.js";

type PostCardProps = {
    data: {
        name: string;
        title: string;
        content: string;
    };
};

function PostCard({ data }: PostCardProps) {
    return (
        <article
            className="flex h-56 w-full min-w-0 flex-col overflow-hidden
            rounded-xl border border-accent bg-background p-3
            md:h-56 md:w-160 md:p-4
            lg:h-60 lg:p-5"
        >
            {/* Author and date */}
            <div className="mb-3 flex shrink-0 min-w-0 items-center justify-between gap-2">
                <p className="truncate text-xs font-medium">
                    {data.name}
                </p>

                <p className="shrink-0 text-[0.75rem] text-muted-foreground">
                    Sep 09, 2026
                </p>
            </div>

            {/* Main content row */}
            <div className="flex min-h-0 min-w-0 flex-1 items-stretch gap-3 md:gap-4 lg:gap-5">
                {/* Text and action buttons */}
                <div className="flex min-h-0 min-w-0 flex-1 flex-col">
                    {/* Fixed-height text area */}
                    <div className="h-16 shrink-0 min-w-0 overflow-hidden md:h-20 lg:h-24">
                        <h2
                            className="line-clamp-2 wrap-break-word text-sm
                            font-semibold text-primary md:text-base lg:text-lg"
                        >
                            {data.title}
                        </h2>

                        <p
                            className="mt-1 line-clamp-2 wrap-break-word
                            text-xs text-muted-foreground md:text-sm"
                        >
                            {data.content}
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="mt-auto flex shrink-0 items-center gap-4 pt-2">
                        <Button
                            type="button"
                            className="flex items-center gap-1"
                        >
                            <ThumbsUp className="h-4 w-4" />
                            <span>18</span>
                        </Button>

                        <Button
                            type="button"
                            className="flex items-center gap-1"
                        >
                            <MessageCircle className="h-4 w-4" />
                            <span>2</span>
                        </Button>
                    </div>
                </div>

                {/* Post image */}
                <div
                    className="h-20 w-30 shrink-0 overflow-hidden
                    rounded-md bg-muted md:h-28 md:w-40
                    lg:h-32 lg:w-50"
                >
                    <img
                        src="/images/adobo.jpg"
                        alt="Bisaya-style chicken adobo"
                        className="h-full w-full object-cover"
                    />
                </div>
            </div>

            {/* Category */}
            <div className="shrink-0 pt-2">
                <p className="text-xs text-muted-foreground">
                    #Technology
                </p>
            </div>
        </article>
    );
}

export default PostCard;
