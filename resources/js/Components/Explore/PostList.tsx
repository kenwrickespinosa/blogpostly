import PostCard from "./PostCard.js";

const SAMPLE = [
    {
        name: "John Doe",
        title: "Cooking Adobo",
        content: `Asadnsnanwndnsanwndnnsanw dnandnsnanwdn snanwnd sawdsawdsssssssssssssssssssssssssssssssssssssssssss
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa`,
    },
    {
        name: "Lucas Mac",
        title: "HAHAHHAAHHAHAAAAAAAAAAAAAAAAAA HAAAAAAAAAA",
        content:
            "Asadnsnanwndnsanwndnns sawdssssssssssssssssssssssssssssssawdsawdsawdsa",
    },
    {
        name: "Jeniffer Jane",
        title: "Cooking sssssssssssssssssssssssssssssssssssssssssssssssssssssssss",
        content:
            "Asadnsnanwndnsanwndnnsanw dnandnsnanwdn snanwnd sawdsawdssssssssssss",
    },
    {
        name: "Jack Orange",
        title: "Cooking",
        content:
            `Asadnsnanwndnsanwndnnsanw dnandnsnanwdn snanwnd sawdsawdssssssssssss
            ssssss ssssssssssssss ssssssssssss sssssssssssssssssssssssssssssssssssssss
            ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss`,
    },
];

function PostList() {
    return (
        <div className="flex flex-col gap-4">
            {SAMPLE.map((sample) => (
                <PostCard data={sample} key={crypto.randomUUID()} />
            ))}
        </div>
    );
}

export default PostList;
