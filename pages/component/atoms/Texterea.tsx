import { Textarea } from '@mantine/core'
import React from 'react'

type InputCustom_TP = {
    label?: string;
    placeholder?: string;
    description?: string;
    error?: string;
    className?:string
  };

export default function TextereaCustom ({
    label,
    placeholder,
    description,
    error,
    className
  }:InputCustom_TP) {
    return (
      <div>
         <Textarea
              label={label}
              placeholder={placeholder}
              description={description}
              error={error}
              className={`${className}`}
              inputWrapperOrder={["label", "input", "description", "error"]}
              minRows={5}
            />
      </div>
    );
  }