"use client"
import { MonthPickerInput } from '@mantine/dates'
import { IconCalendar } from '@tabler/icons-react';
import React, { useState } from 'react'

export const PickMonthInput = ({placeholder,label}:any) => {
    const [value, setValue] = useState<Date | null>(null);
  return (
    <MonthPickerInput
    label={label}
    withAsterisk
    placeholder={placeholder}
    valueFormat="YYYY MMM"
    value={value}
    onChange={setValue}
    icon={<IconCalendar size="1.1rem" stroke={1.5} />}
   />
  )
}
export default PickMonthInput
