import React, { FC, InputHTMLAttributes, TextareaHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className="bg-transparent focus:outline-none p-[7px] w-full"
            {...props}
        />
    );
};

export default Input;

type Input = InputHTMLAttributes<HTMLInputElement> &
    TextareaHTMLAttributes<HTMLTextAreaElement>;

interface InputWrapperProps extends Input {
    label: string;
    children?: React.ReactNode;
    textArea?: boolean;
}
export const InputWrapper: FC<InputWrapperProps> = ({
    label,
    children,
    textArea,
    ...rest
}: InputWrapperProps) => {
    return (
        <div className="space-y-[7px] w-full">
            <label
                className="md:text-[18px] text-nowrap font-[500]"
                htmlFor={rest.id}
            >
                {label}
            </label>
            <div
                className={`border px-2 border-[#646464] ${
                    !textArea && "items-center"
                } rounded flex space-x-2`}
            >
                {children as React.ReactNode}
                {!textArea ? (
                    <Input {...rest} />
                ) : (
                    <textarea
                        className="bg-transparent focus:outline-none p-[7px] w-full"
                        {...rest}
                    ></textarea>
                )}
            </div>
        </div>
    );
};
