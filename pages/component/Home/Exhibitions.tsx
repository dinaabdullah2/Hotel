"use client";

import { Carousel } from "@mantine/carousel";
import useFetch from "@/hooks/useFetch";
import Link from "next/link";
import BlogCard from "../mucles/BlogCard";
import { useAuth } from "@/auth/AuthProvider";
interface EventData {
  id: string;
  image: string;
  title: string;
  content: string;
  avatar: string;
  start_date: string;
}

function Exhibitions() {
  const {  user } = useAuth();
  // Blogs
  const { data: Events } = useFetch({
    endpoint: `api/section/event`,
    queryKey: [`All-Events`],
  });
  const eventsData = (Events as { data?: { events: EventData[] } })?.data
    ?.events;
  
  const { data: EventSection } = useFetch({
    endpoint: `api/dashboard/part/show/Events_page`,
    queryKey: [`Events-section`],
  });
   
  // const sanitizedData = removeHTMLTags(terms?.content);
  return (
    <>
       {user ? (
    
        <div className="px-20 m-auto my-5 pb-5 md:px-20 max-sm:px-2">
          <div className="col-span-1 p-5">
            <h1 className="relative mt-5 py-5 text-3xl font-bold  after:w-[50px] after:absolute after:left-[0px] after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px]">
              {
                //@ts-ignore

                EventSection?.data?.parts[0]?.Events_title
              }
            </h1>
            <p className="w-full py-2 md:w-1/2">
              {" "}
              {
                //@ts-ignore

                EventSection?.data?.parts[1]?.Events_body
              }
            </p>
          </div>
          <div className="px-5 mt-4">
            <Carousel
              withIndicators
              // height={200}
              slideSize="22%"
              slideGap="md"
              loop
              align="start"
              // slidesToScroll={1}
              breakpoints={[
                { maxWidth: "md", slideSize: "50%" },
                { maxWidth: "sm", slideSize: "90%", slideGap: "xs" },
              ]}
            >
              {eventsData?.map((item: EventData) => (
                <Carousel.Slide key={item?.id}>
                  <Link href={`/events/${item?.id}`}>
                    <BlogCard
                      image={item?.image}
                      avatar={item?.avatar}
                      name={item?.title}
                      Date={item?.start_date}
                      title={item?.content?.slice(0, 30)}
                    />
                  </Link>
                </Carousel.Slide>
              ))}
            </Carousel>
          </div>
        </div>
       )
       :
       null
       }
   </>
  
  )
}

export default Exhibitions;
