type TextAreaProps = {
    className?: string;
    maxLength?: number
    placeholder?: string;
};

function TextArea({ className, maxLength, placeholder }: TextAreaProps) {
    return (
        <textarea
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            maxLength={maxLength}
            placeholder={placeholder}
            className={`border border-black/40 
              focus-visible:outline-accent
              focus-visible:outline-offset-2 resize-none
               rounded-lg py-3 px-4 ${className}`}
        />
    );
}

export default TextArea;
