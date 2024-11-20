import {
  Card,
  Group,
  Text,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import { IconArrowLeft, IconCheck, IconCoin, IconFileLike, IconLeaf, IconLink, IconLocation, IconPlant2, IconStar, IconStarFilled, IconThumbUpFilled } from "@tabler/icons-react";
import Button from "../atoms/Button";
import { Carousel } from "@mantine/carousel";
import Link from "next/link";
import like from './../../../public/assets/Like.svg'
import { IconChevronLeft } from "@tabler/icons-react";
import { IconChevronRight } from "@tabler/icons-react";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.white,
  },
  price: {
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },

  carousel: {

    "&:hover": {
      [`& .${getStylesRef("carouselControls")}`]: {
      opacity: 1,
      height:"100%",
      top:0
      },
    },
  },
  carouselControls: {
    ref: getStylesRef("carouselControls"),
    transition: "opacity 150ms ease",
    height:"100%",
    opacity: 0,
  },
  // carouselIndicator: {
  //   height:'100%',
  //   transition: "width 250ms ease",

  //   "&[data-active]": {
  //     width: rem(16),
  //   },
  // },

  title: {
    fontWeight: 700,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    lineHeight: 1.2,
  },
}));

interface CardSearchProps {
  image: string[];
  category?: string;
  title?: string;
  date?: string;
  author?: {
    name?: string;
    avatar?: string;
  };
}

export default function CardSearch({
  image,
  category,
  title,
  date,
  author,
}: CardSearchProps) {
  const { classes } = useStyles();

  const slides = image?.map((image) => (
    <Carousel.Slide  key={image} >
      <Image src={image} alt="img" height={0} width={0} className="h-full w-[100%]"/>
    </Carousel.Slide>
  ));

  return (
    <Card
      withBorder
      radius="lg"
      p={0}
      className={`${classes.card}  mt-4 hover:shadow-xl  hover:transition-shadow cursor-pointer`}
    >
      <Group noWrap spacing={0}>
        
          <div className="grid grid-cols-12">
            <div className="col-span-4 md:col-span-3 Carousel-container h-[100%]">
              <Carousel
               height='100%'
                withIndicators={true}
                loop
                nextControlIcon={<div className="nextIcon"> <IconChevronRight className=" absolute top-[50%] right-[10px] text-white " /></div>}
                previousControlIcon={<div className="prevIcon"><IconChevronLeft className=" absolute top-[50%] left-[10px] text-white " /> </div>}
                classNames={{
                  root: classes.carousel,
                  controls: classes.carouselControls,
                }}
              >
                 {slides}
              </Carousel>
            </div>
            
            <div
              className={`py-0 px-1 col-span-8 md:col-span-6`}
            >
              <Link href="/search/[DetailsProductID]" as="/search/123">
                 <div className="p-2 h-[82%] max-sm:pb-0">
                <Group className="flex gap-1">
                  {/* <div className="flex bg-[#F4F6F8]  px-1 rounded-lg items-center">
                    <IconCoin className="text-xs text-white   fill-[#004499] w-[12px] md:w-[18px] " />
                    <p className="text-[#004499] font-semibold px-1 text-[8px] md:text-[12px]">
                      BEST DEAL
                    </p>
                  </div> */}
                  <div className="flex bg-[#ddffdd]  px-1 rounded-lg items-center">
                    <IconLeaf className="text-xs text-[#16b116]  w-[12px] md:w-[15px] " />
                    <p className="text-[#16b116]  font-semibold px-1 text-[8px] md:text-[12px]">
                       TRAVEL SUSTAINABLE
                    </p>
                  </div>
                 <div className="flex bg-[#F4F6F8]  px-1 rounded-lg items-center">
                    <IconPlant2 className="text-xs text-[#004499]  w-[12px] md:w-[15px] " />
                    <p className="text-[#004499]  font-semibold px-1 text-[8px] md:text-[12px]">
                        SPA & WELLNESS
                    </p>
                  </div>
                  <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconCoin className="text-xs  text-white   fill-[#5d22d5]  w-[12px] md:w-[18px] max-sm:w-[15px] " />
                    <p className="text-[#5d22d5]  font-semibold  px-1 text-[8px] md:text-[12px]">
                      Best Deal
                    </p>
                  </div>
                 {/* <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconCoin className="text-xs  text-white   fill-[#5d22d5]  w-[12px] md:w-[18px] max-sm:w-[15px] " />
                    <p className="text-[#5d22d5]  font-semibold  px-1 text-[8px] md:text-[12px]">
                      Best Deal
                    </p>
                  </div>
                  <div className="flex bg-[#5d22d529]  px-1 rounded-lg items-center">
                    <IconCoin className="text-xs  text-white   fill-[#5d22d5]  w-[12px] md:w-[18px] max-sm:w-[15px] " />
                    <p className="text-[#5d22d5]  font-semibold  px-1 text-[8px] md:text-[12px]">
                      Best Deal
                    </p>
                  </div> */}
           
                </Group>
                <Text
                  transform="uppercase"
                  color="black"
                  weight={700}
                  className="pt-[0.625rem] max-sm:pt-[0.1rem]  text-sm md:text-xl cursor-pointer  hover:text-[#5d22d5] "
                >
                  {category}
                </Text>
                <span className=" inline-flex items-center">
                     <IconStarFilled size={15}  className=" text-yellow-400" />
                     <IconStarFilled size={15}  className=" text-yellow-400" />
                     <IconStarFilled size={15}  className=" text-yellow-400" />
                     <IconStarFilled size={15}  className=" text-yellow-400" /> 
                      <span className="bg-yellow-400 w-[18px] h-[18px]  p-[.15rem] rounded ml-1">
                      <IconThumbUpFilled className="w-[15px] h-[15px]  text-white" /> 
                     </span>
                </span>
                <Text
                  className={`${classes.title}  flex items-center my-[0.625rem] max-sm:my-[0.1rem] `}
                  
                >
                  <IconLocation
                    className=" text-xs fill-[#5d22d5] text-[#5d22d5]"
                    width="12px"
                    height="12px"
                  />
                  <Link href='/' className="mx-2  hover:underline text-[#5d22d5] text-xs">{title}</Link>
                </Text>
                <Group noWrap >
                  <div className="flex flex-col items-center">
                    <Text size="xs" className=" inline-flex items-center ">
                      <IconCheck className="text-[#00aa00] mr-2" size={20} />
                      <p className="text-xs ">
                        Free Internet Access, Free Parking{" "}
                      </p>
                    </Text>
                    <Text size="xs" className=" inline-flex items-center">
                      <IconCheck className="text-[#00aa00] mr-2" size={20} />
                      <p className="text-xs ">
                        Free Internet Access, Free Parking{" "}
                      </p>
                    </Text>
                  </div>
                </Group>
                </div>
                <Group className="px-2 pb-4  h-[15%]  inline-flex items-center ">
                  <h3 className="font-bold text-white bg-[#5d22d5] text-xs p-1 mt-2 max-sm:font-semibold px-3 max-sm:px-2 max-sm:mt-1  rounded-lg">
                    8.5
                  </h3>
                  <p className="text-xs md:text-sm mt-2 max-sm:mt-1 ">
                    1,426 Reviews 
                    
                  </p>
                </Group>
              
              </Link>
             </div>
            <div
              className={` p-1 max-sm:px-2 border-l border-t md:border-l-gray-500-500  col-span-12 md:col-span-3`}
            >
              <div className="flex  md:flex-col  items-center md:justify-between justify-end  md:text-center lg:gap-[100px] md:gap-[70px]">
                <div className="hidden md:block">
                  <p className="text-[#5e22d5bd] font-bold text-sm ">
                    Stay Expo
                  </p>
                  <p className="text-[#481e9bce] font-bold text-sm">
                    Sign in for a VIP-only discount
                  </p>
                </div>

                <div className=" text-end md:text-center px-2 ">
                  {/* تعمل الخصم  */}
                  {/* <p className="text-sm">50$</p> */}
                 
                  <h6 className="text-[#5d22d5] md:p-2 p-1  relative font-extrabold  text-xl md:text-4xl">
                    <span className=" lg:text-lg absolute -top-0 lg:left-8 md:left-9 text-sm left-3 z-10">$</span>
                    145
                  </h6>
                  <p className="text-xs text-gray-500">Total: $125</p>
                  <Button className="px-2 py-1 my-2 rounded-full bg-[#05ac05] hidden md:block">
                    <Link href="/checkout" className="text-base font-[400]">Choose your room</Link>
                  </Button>
                </div>
              </div>
            </div>
           
          </div>
     
      </Group>
    </Card>
  );
}
