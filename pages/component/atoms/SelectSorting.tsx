"use client"
import { Select } from "@mantine/core";
import { IconSortDescending } from "@tabler/icons-react";




  
type selectInput_TP = {
  label?: string;
  placeholder?: string;
  description?: string;
  error?: string;
  icon?:any
  className?:string;
  SelectType?:string;
 
};

export default function SelectSorting( {
  label,
  placeholder,
  description,
  error,
  icon,
  SelectType,
  className,
}:selectInput_TP) {
 
  return (

      <Select
        icon={<IconSortDescending />}
        placeholder={placeholder}
        radius='xl'
        my={'md'}
        data={[
          { value: "react", label: "Sort by : Check-in date" },
          { value: "ng", label: "Angular" },
          { value: "svelte", label: "Svelte" },
          { value: "vue", label: "Vue" },
     ]}
      />
    
  );
}
