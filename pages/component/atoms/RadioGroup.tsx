import { Group, Radio } from '@mantine/core'
import { IconDashboard } from '@tabler/icons-react'
import React from 'react'
import KingBedIcon from '../icons/KindBedIcon'
import TwinBedIcon from '../icons/TwinBedIcon'

const RadioGroup = () => {
  return (
    <Radio.Group
    name="favoriteFramework"
    label="Bed preference (if available)"

    >
      <Radio value="react" label={<div className='ml-1 flex justify-between hover:text-bg_banfsgy label_radio '>1 queen bed <KingBedIcon className='w-[30px] h-[30px]' /></div> } />
      <Radio value="svelte" label={<div className='ml-1 flex justify-between hover:text-bg_banfsgy label_radio '>2 single beds <TwinBedIcon className='w-[30px] h-[30px]' /></div> } />  
    </Radio.Group>

  )
}

export default RadioGroup