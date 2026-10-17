import Select from "react-select";

const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
];

function SelectInput() {
    return (
        <Select
            options={options}
            aria-label="Select tags"
            isMulti
            isClearable
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    border: "1px solid rgb(0 0 0 / 40%)",
                    borderRadius: "0.5rem",
                    padding: "0.75rem 1rem",
                    boxShadow: "none",
                    outline: state.isFocused
                        ? "2px solid var(--color-accent)"
                        : "none",
                    outlineOffset: "0px",
                    "&:hover": {
                        borderColor: "rgb(0 0 0 / 40%)",
                    },
                }),
                input: (baseStyles) => ({
                    ...baseStyles,
                    color: "inherit",
                }),
                menu: (baseStyles) => ({
                    ...baseStyles,
                    backgroundColor: "white",
                    color: "var(--color-primary)",
                })
            }}
        />
    );
}

export default SelectInput;
