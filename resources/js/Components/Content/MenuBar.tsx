import { Editor, useEditorState } from "@tiptap/react";
import { Bold, Italic, Underline } from "lucide-react";
import type { ReactNode } from "react";

type ToolbarButtonProps = {
    label: string;
    active: boolean;
    disabled: boolean;
    onClick: () => void;
    children: ReactNode;
};

function ToolbarButton({ label, active, disabled, onClick, children }: ToolbarButtonProps) {
    return (
        <button
            type="button"
            aria-label={label}
            aria-pressed={active}
            disabled={disabled}
            onClick={onClick}
            className={`flex size-11 cursor-pointer items-center justify-center rounded-lg
                focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent
                disabled:cursor-not-allowed disabled:opacity-40
                ${active ? "bg-accent text-white" : "text-primary hover:bg-secondary"}`}
        >
            {children}
        </button>
    );
}

function MenuBar({ editor }: { editor: Editor }) {
    const state = useEditorState({
        editor,
        selector: ({ editor }: { editor: Editor }) => ({
            isBold: editor.isActive("bold"),
            canBold: editor.can().chain().toggleBold().run(),
            isItalic: editor.isActive("italic"),
            canItalic: editor.can().chain().toggleItalic().run(),
            isUnderline: editor.isActive("underline"),
            canUnderline: editor.can().chain().toggleUnderline().run(),
        }),
    });

    return (
        <div
            role="toolbar"
            aria-label="Text formatting"
            className="flex items-center gap-1 rounded-t-xl border-b border-primary/20 bg-secondary/50 p-2"
        >
            <ToolbarButton
                label="Bold"
                active={state.isBold}
                disabled={!state.canBold}
                onClick={() => editor.chain().focus().toggleBold().run()}
            >
                <Bold className="size-5" />
            </ToolbarButton>
            <ToolbarButton
                label="Italic"
                active={state.isItalic}
                disabled={!state.canItalic}
                onClick={() => editor.chain().focus().toggleItalic().run()}
            >
                <Italic className="size-5" />
            </ToolbarButton>
            <ToolbarButton
                label="Underline"
                active={state.isUnderline}
                disabled={!state.canUnderline}
                onClick={() => editor.chain().focus().toggleUnderline().run()}
            >
                <Underline className="size-5" />
            </ToolbarButton>
        </div>
    );
}

export default MenuBar;