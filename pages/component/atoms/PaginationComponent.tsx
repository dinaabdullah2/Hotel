import React from 'react'
import { Pagination } from '@mantine/core';
 const PaginationComponent = () => {
  return (
    <Pagination
    total={10}
    position="center"
    styles={(theme) => ({
      control: {
        '&[data-active]': {
          backgroundImage: theme.fn.gradient({ from: 'purple', to: 'blue' }),
          border: 0,
        
        },
      },
    })}
  />
  )
}
export default PaginationComponent