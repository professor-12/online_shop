import React, { FC, InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
    return (
        <input
            className="bg-transparent focus:outline-none p-[7px] w-full"
            {...props}
        />
    );
};

export default Input;

interface InputWrapperProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    children?: React.ReactNode;
}

export const InputWrapper: FC<InputWrapperProps> = ({
    label,
    children,
    ...rest
}: InputWrapperProps) => {
    return (
        <div className="space-y-[7px]">
            <label className="md:text-[18px] font-[500]" htmlFor={rest.id}>
                {label}
            </label>
            <div className="border px-2 border-[#646464] rounded flex space-x-2">
                {children as React.ReactNode}
                <Input {...rest} />
            </div>
        </div>
    );
};
