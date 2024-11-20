"use client";
import React from 'react'
import QuestionToggle from '../atoms/QuestionToggle'

type QuestionSection_TP = {
    title?: string;
    placeholder?: string;
    description?: string;
    className?:string;
    props?:any;
  };


export const QuestionsSection = ({
    title,
    placeholder,
    description,
    className,
    ...props
  }:QuestionSection_TP) => {
  return (
    <div>
        <h6 className='font-semibold text-lg mb-5'>{title}</h6>
        <QuestionToggle question='What are the current COVID travel restrictions?' description='You can see updated COVID travel restrictions here.' />
        <QuestionToggle question='What are the current COVID travel restrictions?' description='You can see updated COVID travel restrictions here.' />
        <QuestionToggle question='What are the current COVID travel restrictions?' description='You can see updated COVID travel restrictions here.' />
    </div>
  )
}
export default QuestionsSection