import { ImagePlus, RefreshCw, Trash2 } from "lucide-react";
import {
    useEffect,
    useId,
    useRef,
    useState,
    type ChangeEvent,
    type Dispatch,
    type DragEvent,
} from "react";

type FileUploaderProps = {
    value: File | null;
    onChange: Dispatch<File | null>;
    maxSizeMB?: number;
    error?: string | undefined;
};

const buttonClass =
    "flex h-11 cursor-pointer items-center gap-2 rounded-lg border border-primary/30 px-4 text-sm font-medium text-primary " +
    "hover:bg-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";

function FileUploader({ value, onChange, maxSizeMB = 5, error }: FileUploaderProps) {
    const id = useId();
    const inputRef = useRef<HTMLInputElement>(null);
    const urlRef = useRef<string | null>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [localError, setLocalError] = useState("");
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    // Creates (or clears) the preview URL, and frees the previous one.
    const updatePreview = (file: File | null) => {
        if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        urlRef.current = file ? URL.createObjectURL(file) : null;
        setPreviewUrl(urlRef.current);
    };

    // Free the last preview URL when the component is removed.
    useEffect(() => {
        return () => {
            if (urlRef.current) URL.revokeObjectURL(urlRef.current);
        };
    }, []);

    const handleFile = (file: File | undefined) => {
        if (!file) return;
        if (!file.type.startsWith("image/")) {
            setLocalError("Please choose an image file.");
            return;
        }
        if (file.size > maxSizeMB * 1024 * 1024) {
            setLocalError(`Image must be ${maxSizeMB} MB or smaller.`);
            return;
        }
        setLocalError("");
        updatePreview(file);
        onChange(file);
    };

    const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
        handleFile(e.target.files?.[0]);
        e.target.value = ""; // lets the same file be chosen again later
    };

    const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
        e.preventDefault();
        setIsDragging(false);
        handleFile(e.dataTransfer.files[0]);
    };

    const handleRemove = () => {
        setLocalError("");
        updatePreview(null);
        onChange(null);
    };

    const message = localError || error;

    return (
        <div className="flex flex-col gap-2">
            <input
                ref={inputRef}
                id={id}
                type="file"
                accept="image/*"
                onChange={handleInput}
                className="peer sr-only"
            />

            {value && previewUrl ? (
                <div className="flex flex-col gap-3">
                    <img
                        src={previewUrl}
                        alt="Thumbnail preview"
                        className="aspect-video w-full rounded-xl border border-primary/20 object-cover"
                    />
                    <div className="flex gap-2">
                        <button type="button" onClick={() => inputRef.current?.click()} className={buttonClass}>
                            <RefreshCw className="size-4" />
                            Replace
                        </button>
                        <button type="button" onClick={handleRemove} className={buttonClass}>
                            <Trash2 className="size-4" />
                            Remove
                        </button>
                    </div>
                </div>
            ) : (
                <label
                    htmlFor={id}
                    onDragOver={(e) => {
                        e.preventDefault();
                        setIsDragging(true);
                    }}
                    onDragLeave={() => setIsDragging(false)}
                    onDrop={handleDrop}
                    className={`flex min-h-44 cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center
                        peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent
                        ${isDragging ? "border-accent bg-accent/10" : "border-primary/30 bg-secondary/40 hover:bg-secondary/70"}`}
                >
                    <ImagePlus className="size-8 text-accent" aria-hidden="true" />
                    <span className="font-medium text-primary">Click to upload or drag and drop</span>
                    <span className="text-sm text-primary/70">PNG, JPG or WebP, up to {maxSizeMB} MB</span>
                </label>
            )}

            {message && (
                <p role="alert" className="text-sm text-red-700">
                    {message}
                </p>
            )}
        </div>
    );
}

export default FileUploader;