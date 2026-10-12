import type { ReactElement } from "react";
import UserLayout from "../../../Layouts/UserLayout.js";
import PostList from "../../../Components/Explore/PostList.js";

function Index() {
    return (
        <div>
            <p>Explore</p>

            <div className="flex flex-col md:flex-row gap-10">
                <div className="flex-2">
                    <PostList />
                </div>
                <div className="flex-1">
                    <p>Test</p>
                </div>
            </div>
        </div>
    );
}

Index.layout = (page: ReactElement) => (
    <UserLayout title="Explore">{page}</UserLayout>
);

export default Index;
