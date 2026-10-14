type TextInputProps = {
    className?: string;
    maxLength?: number;
    placeholder?: string;
};

function TextInput({
    className,
    maxLength = 120,
    placeholder,
}: TextInputProps) {
    return (
        <input
            maxLength={maxLength}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            placeholder={placeholder}
            className={`border border-black/40 
              focus-visible:outline-accent
              focus-visible:outline-offset-2
               rounded-lg py-3 px-4 ${className}`}
        />
    );
}

export default TextInput;
