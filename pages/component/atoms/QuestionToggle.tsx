"use client";
import { useState } from 'react';
import { Accordion, Container, Group, Radio, createStyles, rem } from '@mantine/core';
import { IconThumbDown, IconThumbUp } from '@tabler/icons-react';
const useStyles = createStyles((theme) => ({
  wrapper: {
    
    paddingLeft: '0px',
    marginLeft:'0px'
    // minHeight: 300,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },

  item: {
    borderRadius: theme.radius.xs,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    background : 'white',
    '&:hover': {
        boxShadow: `${theme.shadows.md}`,
      },
    
  },
}));

type QuestionToggle_TP = {
    question?: string;
    placeholder?: string;
    description?: string;
    error?: string;
    className?:string;
    props?:any;
  };


export function QuestionToggle({
    question,
    placeholder,
    description,
    error,
    className,
    ...props
  }:QuestionToggle_TP) {
  
    const { classes } = useStyles();
    const [value, setValue] = useState('');


  return (
    <Container className={classes.wrapper}>
      <Accordion  variant="separated">
        <Accordion.Item  className={classes.item} value="reset-password">
          <Accordion.Control  fz={"md"} fw={'bold'}> <p className='font-semibold text-md'>{question} </p></Accordion.Control>
          <Accordion.Panel> <p className='text-sm'>{description}</p></Accordion.Panel>
          <Accordion.Panel>
            <div className='flex'>
                <div className='p-3 w-[100%] rounded  bg-violet-200 m-auto flex lg:flex-row flex-col justify-between  items-center'>
                    <div className='pb-2'>
                        <p className=''>Already have a booking?</p>
                        <p className='text-sm'>Sign in for faster help and instant access to existing bookings.</p>
                    </div>
                    <div className=''>
                        <button className='px-4 py-1 text-white rounded hover:bg-white hover:border hover:border-bg_banfsgy hover:text-bg_banfsgy lg:py-1 lg:px-7 bg-bg_banfsgy'>Sign in Now</button>
                    </div>
                </div>
             </div>
          </Accordion.Panel>
           <Accordion.Panel>  
            <Radio.Group  
              value={value}
              onChange={setValue}
            >
            <Group mt="xs" className='freq-ask_radio'>
                <Radio  hidden={true}  className={value === 'like' ? 'p-[.5rem] border rounded-sm bg-green-200 border-slate-300' :`p-[.5rem] border rounded-sm border-slate-300  `} value="like" label={<IconThumbUp size={20}  color={value === 'like'? "green" : "#999"} />}/>
                <Radio   hidden={true}   className={value === 'dislike' ? 'p-[.5rem] border rounded-sm bg-red-200 border-slate-300' :`p-[.5rem] border rounded-sm border-slate-300  `}  value="dislike" label={<IconThumbDown size={20} color={value === 'dislike'? "red" : "#999"} />}/>
                { value?
                <p className='pl-2 text-sm text-gray-500'>Thank you for your feedback!</p>
                :
                null
                }
            </Group>
           
            </Radio.Group>
           </Accordion.Panel>

           
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
export default QuestionToggle 
