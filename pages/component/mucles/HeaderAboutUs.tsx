"use client"
import { Text, Title, createStyles, rem } from '@mantine/core'
import React, { useState } from 'react'
import shapeImg from "./../../../public/assets/primary-shape.png"
import Image from 'next/image';

// const useStyles = createStyles((theme) => ({
//     wrapper: {
//       display: 'flex',
//       alignItems: 'center',
//       padding: `calc(${theme.spacing.md} * 2)`,
//       borderRadius: theme.radius.md,
//       backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : "transparent",
//       border: `${rem(1)} solid ${
//         theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[3]
//       }`,
  
//       [theme.fn.smallerThan('sm')]: {
//         flexDirection: 'column-reverse',
//         padding: theme.spacing.xl,
//       },
//     },
  
//     image: {
//       maxWidth: '100%',
    
//       [theme.fn.smallerThan('sm')]: {
//         maxWidth: '100%',
//       },
//     },
  
//     body: {
      
  
//       [theme.fn.smallerThan('sm')]: {
//         paddingRight: 0,
//         marginTop: theme.spacing.xl,
//       },
//     },
  
//     title: {
//       color: theme.colorScheme === 'dark' ? theme.white : "text-slate-950",
//       fontFamily: `Greycliff CF, ${theme.fontFamily}`,
//       lineHeight: 1,
//       marginBottom: theme.spacing.md,
      
//     },
  
//     controls: {
//       display: 'flex',
//       marginTop: theme.spacing.xl,
//     },
  
//     inputWrapper: {
//       width: '100%',
//       flex: '1',
//     },
  
//     input: {
//       borderTopRightRadius: 0,
//       borderBottomRightRadius: 0,
//       borderRight: 0,
//     },
  
//     control: {
//       borderTopLeftRadius: 0,
//       borderBottomLeftRadius: 0,
//     },
//   }));


  type HeaderCustom_TP = {
    label?: string;
    placeholder?: string;
    description?: string;
    HeaderImage?:any;
    ui?:string;
    props?:any;
  };
  
export const HeaderAboutUs = ({
    label,
    placeholder,
    description,
    HeaderImage,
    ...props
  }:HeaderCustom_TP)=> {
    // const { classes } = useStyles();
    const [showShape,setShowShape] = useState(false)
  return (
    <div className='w-[100%] relative overflow-hidden max-sm:pb-5' >
          <div className='grid grid-cols-12 gap-10'>
          <div className='lg:col-span-6 col-span-12  lg:p-10 p-3'>
            <div className=' mt-[100px]'>
              <Title className="text-slate-950 text-4xl lg:py-5 py-2 font-bold"  >{label}</Title>
        
              <Text  className=' text-slate-900 text-lg font-medium  ' fz="lg" mb={5}>
                {description}
              </Text>
            </div>

           
          </div>
          <div className='lg:col-span-6 lg:block hidden'>
          <Image src={HeaderImage} width={600} height={100} alt='img' className=' lg:translate-x-[130px] relative  z-500' />
          </div>
       
        </div>
     
      </div>
  )
}
export default HeaderAboutUs