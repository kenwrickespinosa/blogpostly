import type { ReactNode } from "react";
import UserTopbar from "../Components/UserTopbar.js";
import { Head } from "@inertiajs/react";

type UserLayoutProps = {
    children: ReactNode;
    title?: string;
};

function UserLayout({ children, title }: UserLayoutProps) {
    return (
        <div className="bg-background relative">
            <Head>
                <title>{title}</title>
            </Head>

            <header className="absolute z-20 w-full bg-background">
                <UserTopbar />
            </header>

            <main className="h-full bg-red-200 pt-10 md:pt-20 md:ml-40 md:mr-20">
                {children}
            </main>
        </div>
    );
}

export default UserLayout;
