import { Burger, Menu, createStyles, rem } from "@mantine/core";


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
function ToggleMenue() {
  const { classes, theme } = useStyles();
  
  
  return (
    <div className={classes.hiddenMobile} >
    <Menu width={250} shadow="md" >
      <Menu.Target>
        <Burger size="sm" opened={false} />
      </Menu.Target>
 
      <Menu.Dropdown>
        <Menu.Item>For business</Menu.Item>

        <Menu.Item>Contacts</Menu.Item>
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Booking payment methods</Menu.Item>
        <Menu.Item>Blog</Menu.Item>
        <Menu.Item>Loyalty Program</Menu.Item>
        <Menu.Item>Group hotel booking</Menu.Item>





      </Menu.Dropdown>
    </Menu>

</div>
  );
}

export default ToggleMenue;
