import { useEffect, useState } from "react";
import { Accordion, TextInput, createStyles, rem } from "@mantine/core";
import {
  IconArrowBigLeftLines,
  IconArrowRight,
  IconCalendar,
  IconFlag,
  IconWifi,
} from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Button from "../component/atoms/Button";
import CheckboxComp from "../component/atoms/CheckBox";
import DateInputComp from "../component/atoms/DateInput";
import InputFloatingLabel from "../component/atoms/InputFloatingLabel";
import SelectNormal from "../component/atoms/Select";
import TextereaCustom from "../component/atoms/Texterea";
import SideBar from "../component/template/SideBar";
import useFetch from "@/hooks/useFetch";
import { Input } from "@mantine/core";
import ModalComp from "../component/template/Modal";

const useStyles = createStyles((theme) => ({
  controls: {
    display: "flex",
    marginTop: theme.spacing.xs,
  },

  inputWrapper: {
    width: "100%",
    flex: "1",
  },

  input: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    borderleft: 0,
  },
  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const DetailsEvent = () => {
  // const router = useRouter()
  // const id = router?.query?.id
  const [windowSize, setWindowSize] = useState<number | any>();

    useEffect(() => {
        function handleResize() {
          setWindowSize(window.innerWidth);
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
      }, []);
  const [openDate, setOpenDate] = useState(false);
  const router = useRouter()
  const id = router?.query?.id
  const { classes } = useStyles();
  console.log(id,'idddd')
  type Event = {};
  const { data: Event } = useFetch<any>({
    endpoint: `api/section/event/${id}`,
    queryKey: [`Details-Event-page/${id}`],
    
  });
  console.log(Event?.data?.event,'cat')

  const [isOpen, setIsOpen] = useState(false);


  const inputArr = [
    {
      type: "text",
      id: 1,
      value: "",
    },
  ];

  const [arr, setArr] = useState(inputArr);

  const addInput = () => {
    setArr((s: any) => {
      return [
        ...s,
        {
          type: "text",
        },
      ];
    });
  };
  const removeInputFields = (index: any) => {
    const rows = [...arr];
    rows.splice(index, 1);
    setArr(rows);
  };

  return (
    <div>
      <div className="relative bg-gray-50 ">
        <div>
          <Image
            className="!w-full brightness-50 lg:h-[70vh] h-[90vh]"
            alt="banner"
            width="500"
            height="500"
            src="https://ik.imagekit.io/etg/tr:w-1920,h-425/expobeds.com/skeleton/panorama-miami-florida-water.jpg"
          />
        </div>
        <div className="absolute lg:top-[70px] top-[10px] w-[100%] ">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10">
            <div className="col-span-1 p-5 lg:col-span-8 lg:p-10">
              <div className="grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-10 ">
                <div className="col-span-1 lg:col-span-4 ">
                  <Image
                    src={Event?.data?.event?.image || "https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"}
                    width={150}
                    height={150}
                    alt="eventImg"
                    className=" rounded-lg lg:h-[200px] m-auto h-[150px] lg:w-[90%] w-[150px] "
                  />
                </div>
                <div className="col-span-1 lg:col-span-7">
                  <h4 className="pb-3 text-3xl font-semibold leading-6 text-center text-white max-sm:text-xl lg:text-left ">
                  {Event?.data?.event?.title}
                  </h4>
                  <div className="text-center lg:text-left">
    
                    {Event?.data?.event?.domains.map((domain:any)=>(
                      <span className="font-semibold  text-[#9E9E9E]  pr-2 text-sm   " key={domain?.name}>
                        {domain?.name}
                      </span>
                  ))}
                
                  </div>
                  <div className="text-center lg:text-left">
                    <p className="inline-flex items-center py-2 text-2xl text-center text-white max-sm:text-sm lg:py-5 lg:text-left ">
                    from {Event?.data?.event?.start_date} - to {Event?.data?.event?.end_date}
                      <IconCalendar className="ml-2" />
                    </p>
                    <p className="text-base text-center text-white max-sm:text-sm lg:pt-2 lg:text-left ">
                    {Event?.data?.event?.location}
                    </p>
                    <button
                      className="px-2 py-1 mt-5 text-base font-light text-center text-white max-sm:text-sm lg:text-left bg-bg_banfsgy rounded-2xl"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      Group Booking
                    </button>
                  </div>
                </div>
                <SideBar closeButton={true} onOpen={isOpen} onClose={setIsOpen}>
                  <div>
                    <h3 className="py-5 text-2xl font-light lg:text-4xl ">
                      Book your Hotel
                    </h3>

                    <div className="grid grid-cols-1 gap-2 p-2 bg-gray-100 rounded-lg lg:grid-cols-12">
                      <div className="col-span-1 lg:col-span-5">
                        <InputFloatingLabel
                          label="Campany Name"
                          className="rounded-md focus:border-bg_banfsgy"
                        />
                      </div>
                      <div className="col-span-1 lg:col-span-2">
                        <SelectNormal
                          placeholder="Gander"
                          className="pt-4 rounded-md focus:border-bg_banfsgy"
                        />
                      </div>
                      <div className="col-span-1 lg:col-span-5">
                        <InputFloatingLabel
                          label="Contact name"
                          className="rounded-md focus:border-bg_banfsgy"
                        />
                      </div>
                      <div className="col-span-1 lg:col-span-4">
                        <InputFloatingLabel
                          label="Country"
                          className="rounded-md focus:border-bg_banfsgy"
                        />
                      </div>
                      <div className="col-span-1 lg:col-span-4">
                        <InputFloatingLabel
                          label="Phone number"
                          className="rounded-md focus:border-bg_banfsgy"
                        />
                      </div>
                      <div className="col-span-1 lg:col-span-4">
                        <InputFloatingLabel
                          label="Email"
                          className="rounded-md focus:border-bg_banfsgy"
                        />
                      </div>

                      {arr?.map((item, index) => (
                        <>
                          <div className="col-span-1 lg:col-span-3" key={item?.id}>
                            <SelectNormal
                              placeholder="Room Type "
                              className="pt-4 rounded-md focus:border-bg_banfsgy"
                            />
                          </div>
                          <div className="col-span-1 lg:col-span-3">
                            <InputFloatingLabel
                              type="number"
                              label="Room Count"
                              className="pt-4 rounded-md focus:border-bg_banfsgy"
                            />
                          </div>
                          <ModalComp
                            opened={openDate}
                            isClose={() => setOpenDate(false)}
                            title={<button className="px-5 py-2 text-white rounded-lg bg-bg_banfsgy " onClick={()=>setOpenDate(false)}><IconArrowBigLeftLines className="font-bold text-white" /></button>}
                            fullScreen={true}
                            withCloseButton={false}
                          >
                            <DateInputComp placeholder="Check-in - Check-out " mobile={true} setOpen={setOpenDate}/>
                            {/* <CoustomDatePickerMobile/> */}
                          </ModalComp>
                          <div className="col-span-1 pt-4 lg:col-span-6">
                            <div className="grid grid-cols-12 gap-2">
                              <div className="col-span-11 date-event">
                                {windowSize < 800 ? 
                                  <Input
                                    component="button"
                                    className="p-0 text-[#adb5bd]"
                                    onClick={() => setOpenDate(true)}
                                  >
                                    Check-in - Check-out
                                  </Input>

                                  :
                                  <DateInputComp placeholder="Check-in - Check-out " />
                                }
                        
                              </div>
                              <div className="col-span-1 py-2">
                                <button
                                  className="text-red-600"
                                  disabled={arr?.length > 1 ? false : true}
                                  onClick={() => {
                                    removeInputFields(index);
                                  }}
                                >
                                  X
                                </button>
                              </div>
                            </div>
                          </div>
                        </>
                      ))}
                      <div className="col-span-1 pt-2 lg:col-span-6">
                        <button
                          className="text-white bg-[#f30] rounded-2xl py-1 px-2"
                          onClick={addInput}
                        >
                          +add room
                        </button>
                      </div>
                      <div className="col-span-1 pt-3 lg:col-span-12">
                        <Accordion variant="separated">
                          <Accordion.Item
                            className={classes.item}
                            value="another-account"
                          >
                            <Accordion.Control fz="sm">
                              Send us more details to get an even more
                              personalised offer
                              <span className="text-red-600 "> *</span>Optional
                            </Accordion.Control>
                            <Accordion.Panel>
                              <div className="grid grid-cols-1 gap-2 lg:grid-cols-12">
                                <div className="col-span-1 lg:col-span-4">
                                  <SelectNormal
                                    placeholder="Preferred Contact Time"
                                    className="pt-2 rounded-md focus:border-bg_banfsgy"
                                  />
                                </div>
                                <div className="col-span-1 lg:col-span-4">
                                  <SelectNormal
                                    placeholder="Desired Area"
                                    className="pt-2 rounded-md focus:border-bg_banfsgy"
                                  />
                                </div>
                                <div className="col-span-1 lg:col-span-4">
                                  <SelectNormal
                                    placeholder="Budget"
                                    className="pt-2 rounded-md focus:border-bg_banfsgy"
                                  />
                                </div>
                                <div className="col-span-1 lg:col-span-6">
                                  <SelectNormal
                                    placeholder="Favourite Hotel/Hotel Chain"
                                    className="pt-2 rounded-md focus:border-bg_banfsgy"
                                  />
                                </div>
                                <div className="col-span-1 lg:col-span-6">
                                  <SelectNormal
                                    placeholder="Additional Services"
                                    className="pt-2 rounded-md focus:border-bg_banfsgy"
                                  />
                                </div>
                                <div className="col-span-1 mt-2 lg:col-span-12">
                                  <TextereaCustom />
                                </div>
                                <div className="col-span-1 mt-3 lg:col-span-12">
                                  <CheckboxComp
                                    label={`I am OK with ExpoBeds'`}
                                    text="Privacy Policy"
                                    className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
                                  />
                                </div>
                                <div className="col-span-1 mt-3 lg:col-span-12">
                                  <CheckboxComp
                                    label={`Receive news and special offers via email`}
                                    className="rounded-md border-bg_banfsgy placeholder:text-md focus:border-bg_banfsgy"
                                  />
                                </div>
                              </div>
                            </Accordion.Panel>
                          </Accordion.Item>
                        </Accordion>
                        <div className="col-span-1 py-5 mt-5 text-center lg:col-span-12">
                          <Button className="px-5 py-1 text-base font-light text-white bg-bg_banfsgy rounded-2xl lg:text-xl">
                            Send Request
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </SideBar>
              </div>
            </div>
            <div className="hidden p-5 lg:col-span-4 lg:block lg:pt-10 ">
              <div className="flex flex-row items-center justify-between lg:flex-col">
                <div className=" bg-[#0006]  p-5  rounded-2xl ">
                  <p className="py-5 font-light text-white lg:text-5xl ">
                    Need <span className="text-[#f30]"> 5</span> or less rooms?
                  </p>
                  <div className="flex flex-row items-center justify-between">
                    <div>
                      <p className="text-base font-light text-white lg:text-2xl ">
                        Try our online
                      </p>
                      <p className="text-base font-light text-white lg:text-2xl ">
                        booking tool
                      </p>
                    </div>
                    <div>
                      <Link
                        href="/search"
                        className="text-white lg:text-base font-light bg-[#f30] py-1 px-2 rounded-2xl"
                      >
                        Book Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5 p-4 bg-gray-50 first-letter:">
        <div className="col-span-12  md:col-span-8 relative z-[100] px-2  translate-y-[-60px]  ">
          <div className="grid grid-cols-1">
            <div className="col-span-1 bg-white shadow rounded-xl">
              <div className="p-5">
  

                <div className="py-2" dangerouslySetInnerHTML={{ __html:  Event?.data?.event?.content }}>
             
                 </div>
              </div>
            </div>

            <div className="col-span-1 mt-5 ">
              <iframe
                src="https://www.youtube.com/embed/_gTCqw5S2VU"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                height="500"
                allowFullScreen
                loading="lazy"
                className="w-full rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="col-span-12 md:col-span-4 relative z-[100]  px-2  translate-y-[-60px]   ">
          <div className="grid grid-cols-1">
            <div className="col-span-1 mb-5">
              <div className="rounded-xl p-8 block bg-white h-auto   w-[100%]">
                <h3 className="py-4 text-4xl font-light ">Quick Info. </h3>

                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Organizer:</strong>
                  Mohammed Ahmed
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Founded:</strong> 2004
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Frequeny:</strong>
                  every 2 years
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Next Edition:</strong>
                  every 2 years
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Frequeny:</strong>
                  About gamescom 2025
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Sector:</strong>
                  Interior | Interior | Interior | Interior
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Frequeny:</strong>
                  About gamescom 2025
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Website:</strong>
                  <Link href="/">Link</Link>
                </p>
                <p className="py-1">
                  <strong className="mr-5 font-semibold"> Exhibtors:</strong>
                  Exhibtor registration
                </p>
                <p className="py-2 text-[#9E9E9E] flex items-center">
                  <IconFlag className="text-[#9E9E9E]" /> Report Error
                </p>
              </div>
            </div>
            <div className="col-span-1 text-center rounded-lg w-[100%] py-3 bg-bg_banfsgy text-white">
              <p className="flex items-center justify-around text-3xl font-light text-white">
                <IconWifi className="text-white " /> Live Availability
                <IconArrowRight className="text-white hover:translate-x-2" />
              </p>
            </div>
            <div className="col-span-1 mt-5 mb-5">
              <div className="rounded-xl p-8 block bg-white h-auto   w-[100%]">
                <h3 className="py-4 text-4xl font-light ">Important Facts .</h3>
                <ul className="pl-4 list-disc">
                  <li className="py-1">538 German exhibitors in 2016</li>
                  <li className="py-1">538 German exhibitors in 2016</li>
                  <li className="py-1">538 German exhibitors in 2016</li>
                  <li className="py-1">538 German exhibitors in 2016</li>
                  <li className="py-1">538 German exhibitors in 2016</li>
                </ul>
              </div>
            </div>
            <div className="col-span-1 mt-5 mb-5">
              <div className="rounded-xl p-8 block bg-white h-auto   w-[100%]">
                <h3 className="py-4 text-4xl font-light ">Next editions . </h3>
                <div className="flex flex-row items-center ">
                  <Image
                    src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                    width={100}
                    height={100}
                    alt="nextEdition"
                  />
                  <div className="ml-2">
                    <h6 className="py-2 text-lg font-semibold">
                      gamescom 2025
                    </h6>
                    <p className="text-sm ">Dates are not know yet</p>
                    <Link
                      href=""
                      className="px-1 text-xs text-white bg-gray-700 rounded-lg"
                    >
                      Notify Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-1 pb-5 mt-5 mb-5">
              <div className="rounded-xl p-8 block bg-white h-auto   w-[100%]">
                <h3 className="py-5 text-4xl font-light ">
                  Trade fair location .
                </h3>
                <div className="flex flex-col">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2503345.0294716563!2d5.27937025!3d52.21299185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sar!2snl!4v1686505162649!5m2!1sar!2snl"
                    height="150"
                    allowFullScreen
                    loading="lazy"
                    className="w-full rounded-xl"
                  ></iframe>
                  <h6 className="mt-2 text-lg font-semibold">Messe Munich</h6>
                  <p>Messegland Munich Germany</p>
                  <p className="mb-5">
                    <strong>Coordinats:</strong> 48.5134.11.232
                  </p>
                  <button className="px-2 py-1 m-auto text-white rounded-full bg-bg_banfsgy">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-1 gap-10 p-5 text-white lg:grid-cols-12 bg-bg_banfsgy">
          <div className="flex col-span-1 pl-5 lg:col-span-3">
            <h3 className="m-auto text-3xl">Stay in touch</h3>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className={classes.controls}>
              <TextInput
                placeholder="Your email"
                classNames={{
                  input: classes.input,
                  root: classes.inputWrapper,
                }}
              />
              <Button className={` bg-[#f30]  text-white`}>Subscribe</Button>
            </div>
          </div>
          <div className="flex col-span-1 lg:col-span-4">
            <p className="pt-1 m-auto text-white ">
              Sign up for mailing list and be the first to find out about our
              best deals, news and more
            </p>
          </div>
        </div>
        <div className="py-10 bg-gray-100 ">
          <h3 className="p-5 m-auto text-3xl">Similar events</h3>
          <div className="grid grid-cols-4 gap-10 px-8 lg:grid-cols-8 max-sm:grid-cols-2">
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="py-2 text-base text-center">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="py-2 text-base text-center">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="py-2 text-base text-center">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="py-2 text-base text-center">Parts2Clean</h6>
            </div>
            <div className="col-span-1 w-[100%]">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="py-2 text-base text-center">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="py-2 text-base text-center">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="py-2 text-base text-center">Parts2Clean</h6>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col">
                <Image
                  src="https://ik.imagekit.io/etg/tr:w-82,h-82,cm-pad_resize,bg-FFFFFF/event-web/gamescom/gamescom-DpIZ-logo.jpg"
                  width={100}
                  height={100}
                  alt="eventImg"
                  className=" rounded-lg h-[100px] w-[100%]"
                />
              </div>
              <h6 className="py-2 text-base text-center">Parts2Clean</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsEvent;
