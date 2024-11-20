"use client";
import { useForm } from "@mantine/form";
import Image from "next/image";
import shape from "../../../public/assets/primary-shape.png";
import useFetch from "@/hooks/useFetch";
import SearchComponent from "../mucles/SearchComponent";
import TextSkelton from "../Skelton/TextSkelton";
function HeroSection() {
  const form = useForm({
    initialValues: {
      email: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
    },
  });

  const {
    data: HeroSection,
    isLoading: loadingText,
    isRefetching: refetchText,
  } = useFetch({
    endpoint: `api/dashboard/part/show/home_page`,
    queryKey: [`Hero-section`],
  });

  return (
    <div className="relative Hero-section-overflow">
      <div className="container p-0 m-auto lg:p-20 md:p-5">
        <div className="grid grid-cols-2 px-5 ">
          <div className="col-span-2 md:col-span-1 ">
            {loadingText || refetchText ? (
              <TextSkelton loading={true} />
            ) : (
              <>
                <h1 className="pt-5 mt-2 text-2xl font-semibold">
                  {
                    //@ts-ignore
                    HeroSection?.data?.parts[0].hero_title
                  }
                </h1>
                <p className="mt-2">
                  {
                    //@ts-ignore

                    HeroSection?.data?.parts[1].hero_body
                  }
                </p>
              </>
            )}
          </div>
          <div className="col-span-2 pb-5 md:col-span-1 ">
            <form
              onSubmit={form.onSubmit((values) => {
                //console.log(values)
              })}
            >
              <SearchComponent />
            </form>
          </div>
        </div>
        <div className="absolute shapeOne">
          <Image alt="shape" src={shape} />
        </div>
        <div className="absolute shapTwo">
          <Image alt="shape" src={shape} className="w-1/2" />
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
