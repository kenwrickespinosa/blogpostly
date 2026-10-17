import type { ReactNode } from "react";
import UserTopbar from "../Components/UserTopbar.js";
import { Head } from "@inertiajs/react";

type UserLayoutProps = {
    children: ReactNode;
    title?: string;
};

function UserLayout({ children, title }: UserLayoutProps) {
    return (
        <div className="bg-white relative">
            <Head>
                <title>{title}</title>
            </Head>

            <header className="fixed z-20 w-full bg-white">
                <UserTopbar />
            </header>

            <main className="min-h-dvh pt-10 pb-10 md:pt-20 md:ml-60 md:mr-20">
                {children}
            </main>
        </div>
    );
}

export default UserLayout;
