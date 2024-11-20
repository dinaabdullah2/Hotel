import React from "react";
import { Navbar } from "@mantine/core";
import Logo from "./atoms/Logo";

function AsideBar() {
  return (
    <div>
      <Navbar height={600} p="xs" width={{ base: 300 }}>
        <Navbar.Section><Logo/></Navbar.Section>
        <Navbar.Section grow mt="md">
          Links sections
        </Navbar.Section>
        <Navbar.Section>Footer with user</Navbar.Section>
      </Navbar>
    </div>
  );
}

export default AsideBar;
