import { Accordion } from '@mantine/core';
import { IconArrowBadgeRight } from "@tabler/icons-react";
import SelectForm from "../atoms/SelectForm";

export default function AccordionComp({padding}:any) {
  return (
    <div className="">
      <Accordion p={padding?'xl':'sm'}  multiple defaultValue={['LOCATION', 'DATES','INDUSTRY']}>
        <Accordion.Item  value="LOCATION">
          <Accordion.Control py={5} >LOCATION</Accordion.Control>
          <Accordion.Panel mt='md'>
          <SelectForm/>

            <h3 className="text-[#f30] flex py-3 mt-3 font-semibold cursor-pointer"> <IconArrowBadgeRight /> Anywhere</h3>
            <ul className="pl-1 ">
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>

            </ul>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item  value="DATES">
          <Accordion.Control>DATES</Accordion.Control>
          <Accordion.Panel mt='md'>
          <h3 className="text-[#f30] flex py-3 mt-3 font-semibold cursor-pointer"> <IconArrowBadgeRight /> All upcoming</h3>
            <ul>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>

            </ul>
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item  value="INDUSTRY">
          <Accordion.Control>INDUSTRY</Accordion.Control>
          <Accordion.Panel mt='md'>
          <SelectForm/>

          <h3  className="text-[#f30] flex py-3 mt-3 font-semibold cursor-pointer"> <IconArrowBadgeRight />All industries</h3>
            <ul>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>
                <li className="py-1 hover:text-bg_banfsgy">Paris</li>

            </ul>
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}
