"use client";

import { ActionIcon, Group, Text, createStyles } from "@mantine/core";
import {
  IconBrandFacebook,
  IconChevronCompactUp,
  IconEye,
  IconReport,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { FC, useEffect } from "react";
import imageBlog from "../../public/assets/blog3.png";
import useFetch from "@/hooks/useFetch";
import BlogModal from "../component/mucles/BlogModal";
import SideNavBlog from "../component/mucles/SideNavBlog";
import { useRouter } from "next/router";


const useStyles = createStyles((theme) => ({
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
interface Blog {
  title: string;
  image?: string;
  content: string;
  created_at: string; // Add the created_at property here
}

interface BlogResponse {
  data: {
    blog: Blog;
    blogs: Blog[]; // This might still be needed depending on the API response structure
  };
}

interface DetailsBlogsProps {
  params: {
    Id: string;
  };
}


const DetailsBlogs: FC<DetailsBlogsProps> = (promis: any) => {
 
  const router = useRouter()
  const id = router?.query?.id
  const { classes } = useStyles();
  console.log(id,'idddd')
  type Blog = {};
    
  const { data: Blog } = useFetch<any>({
    endpoint: `api/section/blog/${id}`,
    queryKey: [`Details-Blog-page/${id}`],
  });
  
  console.log(Blog?.data?.blog?.category?.name,'cat')
  
  return (
    <>
      <section className="p-5">
        <div className="flex flex-row items-center justify-between">
          {/* <div>
            <h2 className="mt-2 text-2xl font-medium capitalize text-stone-800">
              {Blog?.data?.blog?.title}
            </h2>
          </div> */}
          <div className="lg:hidden md:block sm:block ">
            <BlogModal />
          </div>
        </div>
        <div className="grid mt-3 mb-2 lg:grid-cols-12 lg:gap-10 sm:grid-cols-1 md:gap-0 sm:gap-0 ">
          <div className="mb-3 lg:mt-10 lg:col-span-9 md:col-span-9 sm:col-span-12 ">
            <div>
              <Image
                src={Blog?.data?.blog?.image || imageBlog?.src}
                width={0}
                height={0}
                sizes="80vw"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                }}
                alt=""
              />
            </div>
            <div className="container lg:w-[80%] md:w-[80%] sm:w-[90%] mt-2 mb-2 ml-auto mx-auto  lg:px-12 pt-5">
              <div className="flex flex-row items-center justify-between pt-2 ">
                <Text
                  fz="sm"
                  className="text-xs font-semibold uppercase text-stone-900"
                  color="dimmed"
                >
                  {Blog?.data?.blog?.title}
                </Text>
                <span className="text-xs font-normal uppercase text-stone-500">
                  {Blog?.data?.blog?.created_at.slice(0, 10)}
                </span>
              </div>
              {/* <Text  className="pt-2 mb-2 text-lg font-bold leading-7 capitalize text-stone-800" color="dimmed" lineClamp={3}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ab mollitia dignissimos ex ducimus, eligendi praesentium repellat maxime, nobis quod, doloribus obcaecati? Illum ab doloribus, fuga laboriosam id tenetur? Voluptatibus!
                </Text> */}
             
                 <div dangerouslySetInnerHTML={{ __html: Blog?.data?.blog?.content }} className="pt-2 mt-2 text-sm leading-2 text-stone-600"></div>
            
           

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
              <hr />
          
              <p
                className="mt-5 mb-5 text-sm leading-2 text-stone-600"
                color="dimmed"
              >
                <strong>
                  {" "}
                  Category
                </strong>
              </p>

            
              <ul className="ml-4 list-disc ">
                <li className=""> {Blog?.data?.blog?.category?.name}</li>
             
              </ul>
         
              <div className="w-[100%]  border-rounded flex p-10 mt-3 mb-5  bg-gray-200">
                <button className="p-2 m-auto text-sm text-black bg-orange-300 rounded-lg">
                  GOOD LUCK!
                </button>
              </div>
              <hr className="pb-5 mt-5 mb-2" />
              <div className="flex flex-col-6 gap-3 h-2.5 items-center">
                
                <div className="col-span-3 ">
                  <Group className={`ml-3`}>
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
                </div>
              </div>

              <button className="flex justify-center p-3 pt-2 pb-2 pl-5 pr-5 m-auto mt-5 text-white bg-blue-800 rounded-md ">
                <IconBrandFacebook color="white" />
                <span>Share</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-3 md:col-span-3 sm:col-span-1 lg:block md:hidden sm:hidden max-sm:hidden ">
            <SideNavBlog />
          </div>
        </div>
      </section>
    </>
  );
};
export default DetailsBlogs;
