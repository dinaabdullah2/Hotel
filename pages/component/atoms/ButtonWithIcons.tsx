import { Button } from '@mantine/core';

type ButtonCustom_TP = {
    label?: string;
    placeholder?: string;
    description?: string;
    error?: string;
    Icon?:any;
    className?:string;
    props?:any;
  };

export const ButtonWithIcons = ({
    label,
    placeholder,
    description,
    error,
    Icon,
    className,
    ...props
  }:ButtonCustom_TP) => {
  return (
    <Button
    leftIcon={Icon}
    sx={(theme) => ({
      backgroundColor: theme.colorScheme === 'dark' ? '#ffffff' : '#ffffff',
      '&:not([data-disabled]):hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.lighten('#ffffff', 0.05)
            : theme.fn.darken('#ffffff', 0.05),
      },
      borderWidth : '1px',
      borderColor : '#e0e0e0',
      color: "black",
      marginBottom:"10px",
      
    })}
    {...props}
  >
    {label}
  </Button>
   
  )
}

export default ButtonWithIcons
