import { Link, usePage } from "@inertiajs/react";

const NAV_ITEMS = [
    { label: "Explore", href: "/explore" },
    { label: "ABC", href: "/auth/login" },
];

function UserTopbar() {
    const { url } = usePage();

    return (
        <div className="flex justify-between items-center border-b border-b-accent md:px-20 md:py-4">
            <p>BlogPostly</p>

            <nav>
                <ul className="flex gap-4">
                    {NAV_ITEMS.map((item) => (
                        <li key={item.href}>
                            <Link
                                href={item.href}
                                className={
                                    url === item.href ? "text-accent" : "bg-none"
                                }
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <p>Full Name</p>
        </div>
    );
}

export default UserTopbar;
