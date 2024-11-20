"use client";

import useFetch from "@/hooks/useFetch";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import BadgeCard from "../mucles/Card";

function Blog() {
  // Blogs
  interface Blog {
    id: number;
    image: string;
    content: string;
    // Add more properties if needed...
  }
  const { data: Blogs } = useFetch<{
    data: {
      blogs: Blog[];
    };
  }>({
    endpoint: `api/section/blog`,
    queryKey: [`All-Blogs`],
  });

  const { data: BlogSection } = useFetch({
    endpoint: `api/dashboard/part/show/Blogs_page`,
    queryKey: [`Blogs_page`],
  });

  return (
    <div className="pb-5 bg-gray-100 ">
      <div className="px-10 pb-5 m-auto  md:px-20 max-sm:px-2">
        <div className="col-span-1 p-5">
          <h4 className="relative  mt-5 py-5 text-3xl font-bold  after:w-[50px] after:absolute after:left-[0px] after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px]">
          {
                        //@ts-ignore

          BlogSection?.data?.parts[0]?.Blogs_title}

          </h4>
          <p className="w-full py-2 md:w-1/2">
          {
                        //@ts-ignore

          BlogSection?.data?.parts[1]?.Blogs_body}

          </p>
        </div>
        <div className="px-5 mt-4">
          <Carousel
            // height={200}
            slideSize="22%"
            slideGap="md"
            loop
            align="start"
            slidesToScroll={1}
            breakpoints={[
              { maxWidth: "md", slideSize: "50%" },
              { maxWidth: "sm", slideSize: "90%", slideGap: "xs" },
            ]}
          >
            {Blogs?.data?.blogs?.map((item: any) => (
              <Carousel.Slide key={item?.id}>
                <Link href={`blogs/${item?.id}`}>
                  <BadgeCard
                    rating="rating"
                    image={item?.image}
                    description={item?.content}
                    title={item?.title}
                  />
                </Link>
              </Carousel.Slide>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Blog;
