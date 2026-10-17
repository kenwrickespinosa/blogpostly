type TextAreaProps = {
    className?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
    maxLength?: number;
    placeholder?: string;
};

function TextArea({ className, value, onChange, maxLength, placeholder }: TextAreaProps) {
    return (
        <textarea
            value={value}
            onChange={onChange}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            spellCheck="false"
            maxLength={maxLength}
            placeholder={placeholder}
            className={`${className} border border-black/40 
              focus-visible:outline-accent
              focus-visible:outline-offset-2 resize-none
               rounded-lg py-3 px-4`}
        />
    );
}

export default TextArea;
