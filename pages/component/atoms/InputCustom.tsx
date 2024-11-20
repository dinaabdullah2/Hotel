import React from "react";
import { TextInput } from "@mantine/core";

type InputCustom_TP = {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  className?:string
};
export default function InputCustom({
  label,
  placeholder,
  description,
  error,
  className
}:InputCustom_TP) {
  return (
    <div>
      <TextInput
        mt="xl"
        label={label}
        placeholder={placeholder}
        description={description}
        error={error}
        className={`${className} `}
        inputWrapperOrder={["label", "input", "description", "error"]}
        
      />
    </div>
  );
}
