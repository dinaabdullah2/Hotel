"use client";
import { useAuth } from "@/auth/AuthProvider";
import {
  Avatar,
  Box,
  Burger,
  Button,
  Collapse,
  Divider,
  Drawer,
  Group,
  Header,
  Menu,
  ScrollArea,
  Text,
  ThemeIcon,
  UnstyledButton,
  createStyles,
  rem,
  useMantineTheme,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBook,
  IconChartPie3,
  IconChevronDown,
  IconChevronsDown,
  IconCode,
  IconCoin,
  IconFingerprint,
  IconLogin,
  IconLogout,
  IconNotification,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import Link from "next/link";
import avatarImg from "../../../public/assets/avatar.jpg";
import ToggleMenue from "../Home/ToggleMenue";
import Logo from "../atoms/Logo";
import AuthinticationForm from "./AuthinticationForm";
import { useState } from "react";
import SideBar from "./SideBar";
import ButtonToggleNav from "../atoms/ButtonToggleNav";
const useStyles = createStyles((theme) => ({
  link: {
    display: "flex",
    alignItems: "center",
    height: "100%",
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: "none",
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: theme.fontSizes.sm,

    [theme.fn.smallerThan("md")]: {
      height: rem(42),
      display: "flex",
      alignItems: "center",
      width: "100%",
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: "100%",
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    "&:active": theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan("md")]: {
      display: "none",
    },
  },
}));

const mockdata = [
  {
    icon: IconCode,
    title: "Open source",
    description: "This Pokémon’s cry is very loud and distracting",
  },
  {
    icon: IconCoin,
    title: "Free for everyone",
    description: "The fluid of Smeargle’s tail secretions changes",
  },
  {
    icon: IconBook,
    title: "Documentation",
    description: "Yanma is capable of seeing 360 degrees without",
  },
  {
    icon: IconFingerprint,
    title: "Security",
    description: "The shell’s rounded shape and the grooves on its.",
  },
  {
    icon: IconChartPie3,
    title: "Analytics",
    description: "This Pokémon uses its flying ability to quickly chase",
  },
  {
    icon: IconNotification,
    title: "Notifications",
    description: "Combusken battles with the intensely hot flames it spews",
  },
];

export default function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openSide, setOpenSide] = useState(false);
  const { logout, user } = useAuth();

  const [opened, { open, close }] = useDisclosure(false);

  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);

  const { classes, theme } = useStyles(); // Directly access theme from useStyles

  const links = mockdata.map((item) => (
    <UnstyledButton className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="sm" fw={500}>
            {item.title}
          </Text>
          <Text size="xs" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </UnstyledButton>
  ));

  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value: string) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid email",
    },
  });

  return (
    <>
      <Box>
        <Header height={60} px="md" className="flex justify-between shadow-lg">
          <Group sx={{ height: "100%" }}>
            <Link href="/" className={`${classes.link} w-[70%] md:w-auto `}>
              <Logo />
            </Link>

            <Group
              sx={{ height: "100%" }}
              spacing={0}
              className={`${classes.hiddenMobile}`}
            >
              <Link href="/search" className={classes.link}>
                Search
              </Link>

              <Link href="/checkout" className={classes.link}>
                checkout
              </Link>
              <Link href="/about" className={classes.link}>
                About Us
              </Link>
              {user && (
              <Link href="/events" className={classes.link}>
                Events
              </Link>
              )}
              <Link href="/blogs" className={classes.link}>
                Blogs
              </Link>
              <Link href="/Service" className={classes.link}>
                Service
              </Link>
              <Link href="/freq-questions" className={classes.link}>
                Freq Questions
              </Link>
              <Link href="/privacy-policy" className={classes.link}>
                Privacy Policy
              </Link>
              <Link href="/contact-us" className={classes.link}>
                Contact Us
              </Link>
            </Group>
          </Group>
          <Group>
            <Group >
              {user ? (
                <div className="drop-down_avatar flex flex-row items-center">
                 {user?.type && (
                    <div className="flex flex-col px-1">
                      <div className=" text-gray-700 text-sm font-semibold  capitalize mr-2 ">
                        {user?.name}
                      </div>
                    <div className=" text-gray-600 text-xs  capitalize mr-2 ">
                      {user?.type}
                    </div>
                    </div>
                  )}
                  <Menu
                    position="bottom"
                    transitionProps={{
                      // transition: "rotate-right",
                      duration: 150,
                    }}
                    width={200}
                    shadow="md"
                  >
                    
                    <Menu.Target>
                     <div className="flex flex-row items-center gap-2">
                          <Avatar
                            radius="xl"
                            size="md"
                            className="cursor-pointer "
                            src={avatarImg.src}
                          />
                          <IconChevronDown className="w-[15px] h-[15px] text-gray-400"/>
                      </div>
                    </Menu.Target>
               
                  
                    <Menu.Dropdown>
                      <Link href="/user-profile">
                        <div className="flex items-center gap-2 p-3">
                          <IconUser size={rem(18)} />
                          Profile
                        </div>
                      </Link>
                      <Link href="/setting">
                        <div className="flex items-center gap-2 p-3">
                          <IconSettings size={rem(18)} />
                          Settings
                        </div>
                      </Link>
                      <Link href="/">
                        <Button unstyled onClick={() => logout()}>
                          <div className="flex items-center gap-2 p-3">
                            <IconLogout size={rem(18)} />
                            Logout
                          </div>
                        </Button>
                      </Link>
                    </Menu.Dropdown>
                  </Menu>
                </div>
              ) : (
                <Button onClick={open} className="text-white bg-bg_banfsgy hover:bg-bg_banfsgy hover:bg-opacity-[.9]" >
                  Login
                </Button>
              )}
              <ToggleMenue />
            </Group>
            <ButtonToggleNav onClick={() => setIsOpen(!isOpen)} />
          </Group>
        </Header>
        <AuthinticationForm opened={opened} close={close} />
        <SideBar widthSm={true} closeButton={true} onOpen={isOpen} onClose={setIsOpen}>
          <Link
            href="/"
            className={classes.link}
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/search"
            className={classes.link}
            onClick={() => setIsOpen(false)}
          >
            Search
          </Link>
          <Link
            href="/checkout"
            className={classes.link}
            onClick={() => setIsOpen(false)}
          >
            checkout
          </Link>
          <Collapse in={linksOpened}>{links}</Collapse>
          <Link href="/about" className={classes.link}>
            About Us
          </Link>
          {user && (
            <Link
              href="/events"
              className={classes.link}
              onClick={() => setIsOpen(false)}
            >
              Events
            </Link>
          )}
          <Link
            href="/blogs"
            className={classes.link}
            onClick={() => setIsOpen(false)}
          >
            Blogs
          </Link>
          <Link
            href="/Service"
            className={classes.link}
            onClick={() => setIsOpen(false)}
          >
            Service
          </Link>
          <Link
            href="/freq-questions"
            className={classes.link}
            onClick={() => setIsOpen(false)}
          >
            Freq Questions
          </Link>
          <Link
            href="/privacy-policy"
            className={classes.link}
            onClick={() => setIsOpen(false)}
          >
            Privacy Policy
          </Link>
          <Link
            href="/contact-us"
            className={classes.link}
            onClick={() => setIsOpen(false)}
          >
            Contact Us
          </Link>
         
          {user ? (
            <Link href="/">
               <Button unstyled onClick={() => logout()}>
                 <div className="flex items-center gap-2 p-3">
                   <IconLogout size={rem(18)} />
                     Logout
                 </div>
               </Button>
           </Link>
            ) : (
              <Link href="/">
              <Button unstyled onClick={open}>
                <div className="flex items-center gap-2 p-3">
                  <IconLogin size={rem(18)} />
                    Login
                </div>
              </Button>
          </Link>
            )}
          <Divider
            my="sm"
            color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
          />

          <Group position="center" grow pb="xl" px="md">
            {user ? (
              <Button onClick={() => logout()}>Logout</Button>
            ) : (
              <Button>Login</Button>
            )}
          </Group>
        </SideBar>
      </Box>
    </>
  );
}
