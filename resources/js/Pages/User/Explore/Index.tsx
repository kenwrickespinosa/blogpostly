import type { ReactElement } from "react";
import UserLayout from "../../../Layouts/UserLayout.js";

function Index() {
    return (
        <div>
            <p>Explore</p>
        </div>
    );
}

Index.layout = (page: ReactElement) => (
    <UserLayout title="Explore">{page}</UserLayout>
);

export default Index;
