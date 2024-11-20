"use client";
import {
  IconBookmark,
  IconHeart,
  IconShare,
  IconEye,
  IconReport,
} from "@tabler/icons-react";
import {
  Card,
  Text,
  ActionIcon,
  Badge,
  Group,
  Center,
  Avatar,
  createStyles,
  rem,
} from "@mantine/core";
import blogImage from "./../../../public/assets/event-banner1.jpg";
import Image from "next/image";
import Link from "next/link";
const useStyles = createStyles((theme) => ({
  card: {
    position: "relative",
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },

  rating: {
    position: "absolute",
    top: theme.spacing.xs,
    right: rem(12),
    pointerEvents: "none",
  },

  title: {
    display: "block",
    marginTop: theme.spacing.md,
    marginBottom: rem(5),
  },

  action: {
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[6]
        : theme.colors.gray[0],
    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1],
    }),
  },

  footer: {
    marginTop: theme.spacing.md,
  },
}));
console.log(blogImage);
interface Blog {
  id: number;
  image: string;
  content: string;
  // Add more properties if needed...
}
interface ArticleCardProps {
  image?: string;
  link?: string;
  title?: string;
  description?: string;
  rating?: string;
  author?: {
    name?: string;
    image?: string;
  };
  Blogs?: any;
}

 function BlogCardPage({
  className,
  image,
  link,
  title,
  description,
  author,
  rating,
  Blogs,
  ...others
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) {
  const { classes, cx, theme } = useStyles();
  const linkProps = {
    href: link,
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <>
      {Blogs?.data?.blogs?.map((item: any) => (
        <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 md:mb-3 sm:mb-5" key={item?.id}>
          <Link href={`blogs/${item?.id}`}>
            <Card
              radius="sm"
              className={`${cx(classes.card, className)} p-0`}
              {...others}
            >
              <Card.Section>
                  <Image src={item?.image} height={300} width={390} alt=""  className="w-[100%] h-[300px]"/>
              </Card.Section>

              <div className="flex flex-row items-center justify-between pt-2 ">
                <Text
                  fz="sm"
                  className="text-xs font-semibold uppercase text-stone-900"
                  color="dimmed"
                >
                  {item?.title.slice(0, 30)}
                </Text>
                <span className="text-xs font-normal uppercase text-stone-500">
                  {item?.created_at.slice(0, 10)}
                </span>
              </div>
              <Text
                fz="sm"
                className="pt-2 text-xs font-bold leading-5 uppercase text-stone-900"
                color="dimmed"
                lineClamp={4}
              >
              </Text>

              <Group className={`${classes.footer} p-0`}>
                <div className="flex flex-row items-center ">
                  <ActionIcon className={classes.action}>
                    <IconEye size="1rem" />
                  </ActionIcon>
                  <span className="text-xs text-stone-500">555 </span>
                </div>
                <div className="flex flex-row items-center">
                  <ActionIcon className={classes.action}>
                    <IconReport size="1rem" />
                  </ActionIcon>
                  <span className="text-xs text-stone-500">
                    less that a 2 minute{" "}
                  </span>
                </div>
              </Group>
            </Card>
          </Link>
        </div>
      ))}
    </>
  );
}
export default BlogCardPage;
