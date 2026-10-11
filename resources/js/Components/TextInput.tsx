type TextInputProps = {
    className?: string;
};

function TextInput({ className }: TextInputProps) {
    return (
        <input
            maxLength={120}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            className={`border border-black/40 
              focus-visible:outline-accent
              focus-visible:outline-offset-2
               rounded-lg py-3 px-4 ${className}`}
        />
    );
}

export default TextInput;
