import {
  Badge,
  Card,
  Group,
  Image,
  Text,
  createStyles,
  rem,
} from "@mantine/core";
const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
    "&:hover": {
      boxShadow: " rgba(149, 157, 165, 0.2) 0px 8px 24px",
    },
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: "none",
  },

  section: {
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    paddingBottom: theme.spacing.md,
  },

  like: {
    color: theme.colors.red[6],
  },

  label: {
    textTransform: "uppercase",
    fontSize: theme.fontSizes.xs,
    fontWeight: 700,
  },
}));

interface BadgeCardProps {
  image: string;
  title?: string;
  country?: string;
  description: string;
  rating: string;

  badges?: {
    emoji?: string;
    label?: string;
  }[];
}

export default function BadgeCard({
  image,
  title,
  description,
  country,
  badges,
  rating,
}: BadgeCardProps) {
  const { classes, theme } = useStyles();

  const features = badges?.map((badge) => (
    <Badge
      className="hover:shadow-md "
      color={theme.colorScheme === "dark" ? "dark" : "gray"}
      key={badge.label}
      leftSection={badge.emoji}
    >
      {badge.label}
    </Badge>
  ));

  return (
    <Card withBorder radius="md" p="md" className={classes.card}>
      <Card.Section>
        <Image src={image} alt={title} height={145} />
      </Card.Section>
      <Badge
        className={classes.rating}
        variant="gradient"
        gradient={{ from: "yellow", to: "red" }}
      >
        {rating}
      </Badge>

      <Card.Section className={classes.section} mt="md">
        <Group position="apart">
          <Text fz="xs" fw={'lg'} className="text-gray-500">
            AIGUST 18,2023
          </Text>
        </Group>
        <Text fz="sm" className="">
           {title}
        </Text>
      </Card.Section>
      {/* 
      <Card.Section className={classes.section}>
        <Text mt="md" className={classes.label} c="dimmed">
          Perfect for you, if you enjoy
        </Text>
        <Group spacing={7} mt={5}>

        </Group>
      </Card.Section> */}

      {/* <Group mt="xs">
        <Button radius="md" style={{ flex: 1 }}>
          Show details
        </Button>
        <ActionIcon variant="default" radius="md" size={36}>
          <IconHeart size="1.1rem" className={classes.like} stroke={1.5} />
        </ActionIcon>
      </Group> */}
    </Card>
  );
}
