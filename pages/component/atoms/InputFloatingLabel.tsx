"use client"
import { TextInput, createStyles, rem } from '@mantine/core';
import React, { useState } from 'react'

const useStyles = createStyles((theme, { floating }: { floating: boolean }) => ({
    root: {
      position: 'relative',
      width: "100%"
    },
  
    label: {
      position: 'absolute',
      zIndex: 2,
      top: rem(3),
      left: theme.spacing.sm,
      paddingLeft:"5px",
      paddingRight:"5px",
      paddingTop:"3px",
      paddingBottom:"3px",
      borderRadius:"5px",
      pointerEvents: 'none',
      color: floating
        ? theme.colorScheme === 'dark'
          ? theme.white
          : theme.black
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition: 'transform 150ms ease, color 150ms ease, font-size 150ms ease',
      transform: floating ? `translate(${theme.spacing.xs}, ${rem(-15)})` : 'none',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: floating ? 500 : 400,
      background : 'white'
    },
  
    required: {
      transition: 'opacity 150ms ease',
      opacity: floating ? 1 : 0,
    },
  
    input: {
      '&::placeholder': {
        transition: 'color 150ms ease',
        color: !floating ? 'transparent' : undefined,
        width:"500px"
        

      },
      '&:focus':{
         borderColor: '#5d22d5'
      }
    },
  }));
  
export const InputFloatingLabel = ({placeholder,label,type}:any) => {
    const [focused, setFocused] = useState(false);
    const [value, setValue] = useState('');
    const { classes } = useStyles({ floating: value.trim().length !== 0 || focused });
  return (
    <TextInput
    label={label}
    required
    type={type}
    placeholder={placeholder}
    classNames={classes}
    value={value}
    onChange={(event) => setValue(event.currentTarget.value)}
    onFocus={() => setFocused(true)}
    onBlur={() => setFocused(false)}
    mt="md"
    size='md'
    autoComplete="nope"
  />
  )
}
export default InputFloatingLabel