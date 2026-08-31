const Input = ({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder = "",
    required = false,
}) => {
    return (
        <div className="flex flex-col gap-2">
            {label && (
                <label
                    htmlFor={name}
                    className="text-sm font-medium text-gray-700"
                >
                    {label}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                className="rounded-lg border border-gray-300 px-4 py-2.5 outline-none transition focus:border-black"
            />
        </div>
    );
};

export default Input;