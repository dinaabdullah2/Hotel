import { Breadcrumbs, Anchor } from '@mantine/core';
import {  IconChevronRight } from '@tabler/icons-react';

const items = [
  { title: 'Home', href: '#' },
  { title: 'Egypt Hotels(13,556)', href: '#' },
  { title: 'Cairo Hotels', href: '#' },
  { title: 'Book Kempinski Nile Hotel', href: '#' }
].map((item, index) => (
  <Anchor href={item.href} key={index} className=' underline text-xs  text-gray-500'>
    {item.title}
  </Anchor>
));
const BreadCrumbs = () => {
    return (
        <>
          <Breadcrumbs separator={<IconChevronRight  className=' text-gray-800 h-[15px] w-[15px] ' />} mt="xs">{items}</Breadcrumbs>
        </>
      );
}

export default BreadCrumbs