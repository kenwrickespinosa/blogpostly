import { Head, Link } from "@inertiajs/react";
import type { ReactNode } from "react";
import { ChevronLeft } from "lucide-react";

type AuthLayoutProps = {
    children: ReactNode;
    title: string;
    content: string;
};

function AuthLayout({ children, title, content }: AuthLayoutProps) {
    return (
        <div className="min-h-dvh flex items-center justify-center bg-background">
            <Head>
                <title>{title}</title>
                <meta name="description" content={content} />
            </Head>

            <div className="absolute top-10 left-6 lg:left-30">
                <Link href="/" replace as="button" className="cursor-pointer">
                    <ChevronLeft color="#1e293b" />
                </Link>
            </div>

            <main className="w-full mx-4 max-w-md">{children}</main>
        </div>
    );
}

export default AuthLayout;
