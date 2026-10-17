import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Placeholder } from "@tiptap/extensions";
import MenuBar from "./MenuBar.js";
import type { Dispatch } from "react";

const extensions = [
    StarterKit,
    Placeholder.configure({ placeholder: "Write your thoughts..." }),
];

type ContentEditorProps = {
    value?: string;
    onChange?: Dispatch<string>;
    // onChange?: (html: string) => void;
};

function ContentEditor({ value = "", onChange }: ContentEditorProps) {
    const editor = useEditor({
        extensions,
        content: value,
        onUpdate: ({ editor }) => onChange?.(editor.getHTML()),
        editorProps: {
            attributes: {
                class: "prose max-w-none min-h-80 p-4 focus:outline-none",
            },
        },
    });

    if (!editor) return null;

    return (
        <div
            className="rounded-xl border border-primary/30 bg-white 
        focus-within:outline-2 focus-within:outline-offset-0 focus-within:outline-accent"
        >
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
        </div>
    );
}

export default ContentEditor;
