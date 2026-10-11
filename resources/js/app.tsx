import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import type { ElementType } from "react";

createInertiaApp({
    title: (title: string) => title ? `${title} - BlogPostly` : 'BlogPostly - Where your ideas matter',
    resolve: (name: string) => {
        const pages = import.meta.glob("./Pages/**/*.tsx", {
            eager: true,
        });

        const page = pages[`./Pages/${name}.tsx`];

        if (!page) {
            throw new Error(`Page not found: ${name}`);
        }

        return page;
    },

    setup({
        el,
        App,
        props,
    }: {
        el: HTMLElement;
        App: ElementType;
        props: Record<string, unknown>;
    }) {
        createRoot(el).render(<App {...props} />);
    },
});
