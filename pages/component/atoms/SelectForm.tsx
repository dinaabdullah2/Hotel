import { Avatar, Group, Select, Text } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconBuilding, IconSearch } from "@tabler/icons-react";
import { forwardRef, useEffect, useState } from "react";

const data = [
  {
    image:
      "https://f.worldota.net/ratehawk-landing/branch/b429229/_next/static/assets/ge.962a33a0.svg",
    label: "Egrisi Hotel",
    value: "Egrisi Hotel",
    description: "Batumi, Gonio, ul. Svimon Kananeli, 60",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    value: "Carol Miller",
    description: "One of the richest people on Earth",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    value: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    value: "Spongebob Squarepants",
    description: "Not just a sponge",
  },
];

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image?: string;
  label: string;
  description?: string;

}

// eslint-disable-next-line react/display-name
const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <IconBuilding />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65} className="flex">
            <Avatar src={image} size="xs" className="mr-1" />
            <p className="">{description}</p>
          </Text>
        </div>
      </Group>
    </div>
  )
);

function SelectForm({ placeholder, mobile ,value,setValue}: any) {
  
  // useEffect(()=>{
  //   if(value){
  
  //      document.getElementById("mantine-7vikrjh1v-target")?.setAttribute("aria-expanded", true)
  //     console.log(document.getElementById("mantine-7vikrjh1v-target"),'seg')
    
  //   }
  // },[])
  // const form = useForm({
  //   initialValues: {
  //     email: "",
  //     termsOfService: false,
  //   },
  //   validate: {
  //     email: (value: string) =>
  //       /^\S+@\S+$/.test(value) ? null : "Invalid email",
  //   },
  // });

  return (

    <div>
      
      {mobile ? (
        <>
          <Group noWrap w='100%' py='sm' px='md' className="hover:bg-gray-100">
            <IconBuilding />
            <div>
              <Text size="sm">Egrisi Hotel</Text>
              <Text size="xs" opacity={0.65} className="flex">
                <Avatar src="https://f.worldota.net/ratehawk-landing/branch/b429229/_next/static/assets/ge.962a33a0.svg" size="xs" className="mr-1" />
                <p className="">Batumi, Gonio, ul. Svimon Kananeli, 60</p>
              </Text>
            </div>
          </Group>
          <Group className="hover:bg-gray-100" w='100%' py='sm' px='md' noWrap>
          <IconBuilding />
          <div>
            <Text size="sm">Egrisi Hotel</Text>
            <Text size="xs" opacity={0.65} className="flex">
              <Avatar src="https://f.worldota.net/ratehawk-landing/branch/b429229/_next/static/assets/ge.962a33a0.svg" size="xs" className="mr-1" />
              <p className="">Batumi, Gonio, ul. Svimon Kananeli, 60</p>
            </Text>
          </div>
        </Group>
          <Group className="hover:bg-gray-100" w='100%' py='sm' px='md' noWrap>
          <IconBuilding />
          <div>
            <Text size="sm">Egrisi Hotel</Text>
            <Text size="xs" opacity={0.65} className="flex">
              <Avatar src="https://f.worldota.net/ratehawk-landing/branch/b429229/_next/static/assets/ge.962a33a0.svg" size="xs" className="mr-1" />
              <p className="">Batumi, Gonio, ul. Svimon Kananeli, 60</p>
            </Text>
          </div>
        </Group>
        <Group className="hover:bg-gray-100" w='100%' py='sm' px='md' noWrap>
          <IconBuilding />
          <div>
            <Text size="sm">Egrisi Hotel</Text>
            <Text size="xs" opacity={0.65} className="flex">
              <Avatar src="https://f.worldota.net/ratehawk-landing/branch/b429229/_next/static/assets/ge.962a33a0.svg" size="xs" className="mr-1" />
              <p className="">Batumi, Gonio, ul. Svimon Kananeli, 60</p>
            </Text>
          </div>
        </Group>
      </>
      ):(
        <Group>
        <Select
         value={value}
         onChange={setValue}
          radius={'lg'}
          className="w-full font-semibold"
          placeholder="City, Address,Landmark"
          itemComponent={SelectItem}
          searchable
          icon={<IconSearch className="w-[20px] h-[20px] text-bg_banfsgy"/>}
          data={data}
          transitionProps={{
            transition: "pop-top-left",
            duration: 80,
            timingFunction: "ease",
          }}
          withinPortal
        />
      </Group>
     
      )
      }
    </div>
  );
}

export default SelectForm;
