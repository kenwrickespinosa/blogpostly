import { Link, useForm } from "@inertiajs/react";
import { ChevronLeft } from "lucide-react";
import type { ReactNode } from "react";
import Button from "../../../Components/Button.js";
import SelectInput from "../../../Components/SelectInput.js";
import TextArea from "../../../Components/TextArea.js";
import ContentEditor from "../../../Components/Content/ContentEditor.js";
import FileUploader from "../../../Components/FileUploader.js";

const TITLE_MAX = 100;

type FieldProps = {
    label: string;
    htmlFor?: string;
    optional?: boolean;
    hint?: string;
    error?: string | undefined;
    children: ReactNode;
};

function Field({
    label,
    htmlFor,
    optional = false,
    hint,
    error,
    children,
}: FieldProps) {
    const labelContent = (
        <>
            {label}
            {optional && (
                <span className="ml-1 font-normal text-primary/60">
                    (optional)
                </span>
            )}
        </>
    );

    return (
        <div className="flex flex-col gap-2">
            {htmlFor ? (
                <label htmlFor={htmlFor} className="font-medium">
                    {labelContent}
                </label>
            ) : (
                <p className="font-medium">{labelContent}</p>
            )}
            {children}
            {hint && <p className="text-sm text-primary/70">{hint}</p>}
            {error && (
                <p role="alert" className="text-sm text-red-700">
                    {error}
                </p>
            )}
        </div>
    );
}

function Create() {
    const { data, setData, processing, errors } = useForm<{
        title: string;
        content: string;
        thumbnail: File | null;
        status: string;
    }>({
        title: "",
        content: "",
        thumbnail: null,
        status: "",
    });

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
    };

    return (
        <div className="min-h-dvh bg-background text-primary">
            {/* Header */}
            <header className="bg-background py-4 fixed top-0 w-full z-20 border-b border-b-primary/40">
                <Link
                    href="/explore"
                    className="flex items-center w-fit mx-4 text-lg font-semibold pr-2"
                >
                    <ChevronLeft />
                    <p>BlogPostly</p>
                </Link>
            </header>

            {/* Form */}
            <main className="mx-auto max-w-190 px-4 pt-24">
                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                    <Field label="Title" error={errors.title}>
                        <div className="border-b-2 border-primary/20 focus-within:border-accent">
                            <TextArea
                                maxLength={TITLE_MAX}
                                value={data.title}
                                onChange={(e) =>
                                    setData("title", e.target.value)
                                }
                                placeholder="Give your post a title..."
                                className="w-full border-0 px-0 text-3xl font-semibold 
                                focus-visible:outline-0 focus-visible:outline-offset-0
                                field-sizing-content resize-none"
                            />
                        </div>
                        <p className="text-end text-sm text-primary/70">
                            {data.title.length}/{TITLE_MAX}
                        </p>
                    </Field>

                    <Field
                        label="Thumbnail"
                        optional
                        hint="Shown on your post card and at the top of the post."
                    >
                        <FileUploader
                            value={data.thumbnail}
                            onChange={(file) => setData("thumbnail", file)}
                            error={errors.thumbnail}
                        />
                    </Field>

                    <Field label="Tags" hint="Choose up to 3.">
                        <SelectInput />
                    </Field>

                    <Field label="Content" error={errors.content}>
                        <ContentEditor
                            value={data.content}
                            onChange={(html) => setData("content", html)}
                        />
                    </Field>

                    {/* Actions stay visible at the bottom of the screen on long posts */}
                    <div
                        className="sticky bottom-0 -mx-4 flex justify-end gap-3 border-t
                     border-primary/20 bg-background/90 px-4 py-4 backdrop-blur"
                    >
                        <Button
                            type="button"
                            disabled={processing}
                            className="border-2 border-primary px-4 font-semibold text-primary"
                        >
                            Draft
                        </Button>
                        <Button
                            type="submit"
                            disabled={processing}
                            className="bg-primary px-4 font-semibold text-white"
                        >
                            Publish
                        </Button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default Create;
