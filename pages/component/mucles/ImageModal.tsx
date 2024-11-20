"use client"
import { Avatar, Button, FileButton, Group, Modal, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit } from '@tabler/icons-react';
import { useRef, useState } from 'react';
import avatarImg from '../../../public/assets/avatar.jpg';
const ImageModal = () =>  {
    const [opened, { open, close }] = useDisclosure(false);
    const [file, setFile] = useState<File | null>(null);
    const resetRef = useRef<() => void>(null);
  
    // let preViewLink = URL.createObjectURL(file);
    // //  console.log(preViewLink)
    // // // const clearFile = () => {
    // // //   setFile(null);
    // // //   resetRef.current?.();
    // // // };

    return (
      <>
        <Modal opened={opened} onClose={close} title="Edit Your Profile Picture" centered>
             <div className='flex flex-row my-5'>
                 <div className='w-[100px]'>
                    {/* {file?
                   <Avatar radius="xl" size="xl" className='' src={preViewLink} /> 
                   : */}
                   <Avatar radius="xl" size="xl" className='' src={avatarImg.src} /> 
                   
                 </div>
                 <div>
                 <Group >
                    <FileButton onChange={setFile} accept="image/png,image/jpeg">
                    {(props) => <Button unstyled size='sm' {...props}>Upload image</Button>}
                    </FileButton>
                    {/* <Button disabled={!file} size='sm' unstyled onClick={clearFile}>
                        Reset
                    </Button> */}
                </Group>

                {file && (
                    <Text size="sm" align="center" mt="sm">
                    Picked file: {file.name}
                    </Text>
                )}

                 </div>

                
             </div>
             <div className='text-end'>
             <button className='px-1 py-2 text-white rounded-md bg-bg_banfsgy'>Save</button>
             </div>
        </Modal>
  
        <Group position="center">
          <Button unstyled onClick={open}>
            <div className='relative ' >     

                <Avatar radius="xl" size="lg" className='' src={avatarImg.src} />  
                <div className='h-[100%] flex top-0 absolute z-10 w-[100%] bg-black opacity-60 rounded-full'>
                <IconEdit className='m-auto text-white ' />
                </div>
            </div>
        </Button>
        </Group>
      </>
    );
  }

export default ImageModal