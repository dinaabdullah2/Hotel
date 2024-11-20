"use client";
import { Accordion, Tabs } from "@mantine/core";
import {
  IconCreditCard,
  IconLock,
  IconUser,
  IconUserCheck,
} from "@tabler/icons-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../../auth/AuthProvider";
import ImageModal from "../component/mucles/ImageModal";
import InputContainer from "../component/atoms/InputContainer";
import SelectContainer from "../component/atoms/SelectContainer";
import PickMonthInput from "../component/atoms/PickMonthInput";
import QuestionsSection from "../component/mucles/QuestionsSection";



const User_Profile = () => {
  const [value, setValue] = useState<string | null>(null);
  const [windowSize, setWindowSize] = useState<number | any>();
  const { login, user } = useAuth();
  useEffect(() => {
    function handleResize() {
      setWindowSize(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //     const[iconChange ,setIconChange] = useState(false)

  //    function handleHideForm(){

  //       const listItems: HTMLLIElement[] = Array.from(document.querySelectorAll('.mantine-1h0npq1'));
  //       listItems.forEach(element => {

  //            if(element.dataset.active ==='true'){
  //             setIconChange(true)
  //              element.querySelector(`[data-hide="hidee"]`).classList.add('hidden')
  //              console.log(element.querySelector(`[data-hide="hidee"]`).classList,'list')
  //            }else return;
  //        });

  //    }
  //    handleHideForm()

  // const [clickedAccordion, setClickedAccordion] = useState('');

  // const handleEvent = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   event.preventDefault();

  //   const Accordion: HTMLButtonElement = event.currentTarget
  //   if(Accordion.disabled === false){
  //     Accordion.disabled = true
  //   }else{
  //     Accordion.disabled = false
  //   }
  //   console.log(Accordion.disabled);
  // };

  const router = useRouter();

  useEffect(() => {}, [user]);

  // if (!user) {
  //   router.push("/");
  // }

  return (
    <>
      {user && (
        <div className="px-20 max-sm:px-5 py-7">
          <div className="flex">
            <div className="px-10 pb-5 container w-[100] m-auto">
              <Tabs
                orientation={windowSize >= 768 ? `vertical` : "horizontal"}
                defaultValue="Personal"
                color="violet"
                fz={"xl"}
                fw="normal"
              >
                <Tabs.List>
                  <Tabs.Tab
                    value="Personal"
                    fz={"md"}
                    py="xl"
                    icon={<IconUser size="1.5rem" />}
                  >
                    Personal Details
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="Booking"
                    fz={"md"}
                    py="xl"
                    icon={<IconUserCheck size="1.5rem" />}
                  >
                    Booking
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="Payment"
                    fz={"md"}
                    py="xl"
                    icon={<IconCreditCard size="1.5rem" />}
                  >
                    Payment methods
                  </Tabs.Tab>
                  <Tabs.Tab
                    value="Security"
                    fz={"md"}
                    py="xl"
                    icon={<IconLock size="1.5rem" />}
                  >
                    Security
                  </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="Personal" pt="xl" pl="xl">
                  <div>
                    <div>
                      <div className="flex flex-row justify-between mb-5">
                        <div>
                          <h6 className="text-xl font-semibold ">
                            Personal details
                          </h6>
                          <p className="text-sm text-gray-600">
                            Update your info and find out how its used.
                          </p>
                        </div>
                        <ImageModal />
                      </div>
                      <hr />
                      <Accordion
                        transitionDuration={100}
                        chevron={
                          <button className="px-2 py-1 font-semibold rounded text-bg_banfsgy hover:bg-violet-200 ">
                            {" "}
                            Edit{" "}
                          </button>
                        }
                        styles={{
                          chevron: {
                            "&[data-rotate]": {
                              transform: "rotate(45deg)",
                            },
                          },
                        }}
                      >
                        <Accordion.Item value="Personal">
                          <Accordion.Control py="sm">
                            <div className="grid lg:grid-cols-12 max-sm:grid-cols-1 gap-7">
                              <div className="lg:col-span-2 max-sm:col-span-1">
                                <label>Name</label>
                              </div>
                              <div
                                className="lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <label className="text-sm">Dina Abdullah</label>
                              </div>
                              <div
                                className="hidden lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <div className="grid grid-cols-2 gap-5 ">
                                  <InputContainer
                                    className="col-span-1"
                                    span={true}
                                    label={"First name(s)"}
                                    placeholder=""
                                  />
                                  <InputContainer
                                    className="col-span-1"
                                    span={true}
                                    label={"Last name"}
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel py="sm">
                            <div className="flex justify-end ">
                              <button className="px-2 py-1 text-base text-white rounded bg-bg_banfsgy">
                                save
                              </button>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="display">
                          <Accordion.Control py="sm">
                            <div className="grid lg:grid-cols-12 max-sm:grid-cols-1 gap-7">
                              <div className="lg:col-span-2 max-sm:col-span-1 ">
                                <label>Display name</label>
                              </div>
                              <div
                                className="lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <label className="text-sm">
                                  Choose a display name
                                </label>
                              </div>
                              <div
                                className="hidden lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <div className="grid grid-cols-1 gap-5 ">
                                  <InputContainer
                                    className="col-span-1"
                                    span={true}
                                    label={"Display name"}
                                    placeholder=""
                                  />
                                </div>
                              </div>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel py="sm">
                            <div className="flex justify-end">
                              <button className="px-2 py-1 text-base text-white rounded bg-bg_banfsgy">
                                save
                              </button>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Email">
                          <Accordion.Control py="sm">
                            <div className="grid lg:grid-cols-12 max-sm:grid-cols-1 gap-7">
                              <div className="lg:col-span-2 max-sm:col-span-1 ">
                                <label>Email address</label>
                              </div>
                              <div
                                className="lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <label>
                                  dayman148@yahoo.com{" "}
                                  <span className="px-2 py-1 ml-1 text-sm text-white bg-green-900 rounded">
                                    verified
                                  </span>
                                </label>
                                <p className="py-2 text-sm text-gray-900">
                                  This is the email address you use to sign in.
                                  It’s also where we send your booking
                                  confirmations.
                                </p>
                              </div>
                              <div
                                className="hidden lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <div className="grid grid-cols-1 gap-5 ">
                                  <InputContainer
                                    className="col-span-1"
                                    span={true}
                                    label={"Email address"}
                                    placeholder=""
                                    description="We'll send a verification link to your new email address – check your inbox."
                                  />
                                </div>
                              </div>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel py="sm">
                            <div className="flex justify-end">
                              <button className="px-2 py-1 text-base text-white rounded bg-bg_banfsgy">
                                save
                              </button>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="phone">
                          <Accordion.Control py="sm">
                            <div className="grid lg:grid-cols-12 max-sm:grid-cols-1 gap-7">
                              <div className="lg:col-span-2 max-sm:col-span-1 ">
                                <label>Phone number</label>
                              </div>
                              <div
                                className="lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <label className="text-sm">
                                  Add your phone number
                                </label>
                                <p className="py-2 text-sm text-gray-900">
                                  Properties or attractions you book can use
                                  this number to contact you. You can also use
                                  it to sign in.
                                </p>
                              </div>
                              <div
                                className="hidden lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <div className="grid grid-cols-1 gap-5 ">
                                  <div className="col-span-1">
                                    <label className="text-sm font-semibold">
                                      Phone number
                                    </label>

                                    <input className="py-1 px-2  mt-1 rounded w-[100%] border  focus:border-2  focus:border-bg_banfsgy focus:outline-none border-neutral-950"></input>
                                    <p className="py-2 text-sm text-gray-900">
                                      Pressing Send code will text a 6 digit
                                      code to your phone, which youll enter in
                                      the next step.
                                    </p>
                                  </div>
                                </div>
                                {/* hi */}
                              </div>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel py="sm">
                            <div className="flex justify-end">
                              <button className="px-2 py-1 text-base text-white rounded bg-bg_banfsgy">
                                Send code
                              </button>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Nationality">
                          <Accordion.Control py="sm">
                            <div className="grid lg:grid-cols-12 max-sm:grid-cols-1 gap-7">
                              <div className="lg:col-span-2 max-sm:col-span-1 ">
                                <label>Nationality</label>
                              </div>
                              <div
                                className="lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <label className="text-sm">
                                  Select the country/region you are from
                                </label>
                              </div>
                              <div
                                className="hidden lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <div className="grid grid-cols-1 gap-5 ">
                                  <SelectContainer
                                    className="col-span-1"
                                    label="Nationality"
                                    span={true}
                                    SelectType="Nationality"
                                  />
                                </div>
                              </div>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel py="sm">
                            <div className="flex justify-end">
                              <button className="px-2 py-1 text-base text-white rounded bg-bg_banfsgy">
                                Save
                              </button>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Gender">
                          <Accordion.Control py="sm">
                            <div className="grid lg:grid-cols-12 max-sm:grid-cols-1 gap-7">
                              <div className="lg:col-span-2 max-sm:col-span-1 ">
                                <label>Gender</label>
                              </div>
                              <div
                                className="lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <label className="text-sm">
                                  Select your gender
                                </label>
                              </div>
                              <div
                                className="hidden lg:col-span-8 max-sm:col-span-1"
                                data-hide="hidee"
                              >
                                <div className="grid grid-cols-1 gap-5 ">
                                  <SelectContainer
                                    className="col-span-1"
                                    label="Gender"
                                    span={true}
                                    SelectType="Gender"
                                  />
                                </div>
                              </div>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel py="sm">
                            <div className="flex justify-end">
                              <button className="px-2 py-1 text-base text-white rounded bg-bg_banfsgy">
                                Save
                              </button>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Birth">
                          <Accordion.Control py="sm">
                            <div className="grid lg:grid-cols-12 max-sm:grid-cols-1 gap-7">
                              <div className="lg:col-span-2 max-sm:col-span-1">
                                <label>Date of birth</label>
                              </div>
                              <div
                                className="lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <label className="text-sm">Date of birth</label>
                              </div>
                              <div
                                className="hidden lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <div className="grid grid-cols-3 gap-2 ">
                                  <div className="col-span-2">
                                    <PickMonthInput
                                      label={"Date of birth"}
                                      placeholder={"YYYY MMM"}
                                    />
                                  </div>
                                  <InputContainer
                                    span={false}
                                    label=""
                                    placeholder="DD"
                                    className="col-span-1 w-[60%] mt-5"
                                  />
                                </div>
                              </div>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel py="sm">
                            <div className="flex justify-end ">
                              <button className="px-2 py-1 text-base text-white rounded bg-bg_banfsgy">
                                save
                              </button>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>

                        <Accordion.Item value="Address">
                          <Accordion.Control py="sm">
                            <div className="grid lg:grid-cols-12 max-sm:grid-cols-1 gap-7">
                              <div className="lg:col-span-2 max-sm:col-span-1">
                                <label>Address</label>
                              </div>
                              <div
                                className="lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <label className="text-sm">
                                  Add your address
                                </label>
                              </div>
                              <div
                                className="hidden lg:col-span-8 max-sm:col-span-1 "
                                data-hide="hidee"
                              >
                                <div className="grid grid-cols-2 gap-2 ">
                                  <InputContainer
                                    placeholder="Your street name and house/apartment number"
                                    className="col-span-2"
                                    label="Address"
                                  />

                                  <InputContainer
                                    className="col-span-1"
                                    label="Town/City"
                                  />

                                  <InputContainer
                                    className="col-span-1"
                                    label="Zip code"
                                  />

                                  <SelectContainer
                                    className="col-span-2"
                                    label="Country/Region"
                                    placeholder="Select the country/region you live in"
                                  />
                                </div>
                              </div>
                            </div>
                          </Accordion.Control>
                          <Accordion.Panel py="sm">
                            <div className="flex justify-end ">
                              <button className="px-2 py-1 text-base text-white rounded bg-bg_banfsgy">
                                save
                              </button>
                            </div>
                          </Accordion.Panel>
                        </Accordion.Item>
                      </Accordion>
                    </div>
                  </div>
                </Tabs.Panel>

                <Tabs.Panel value="Booking" pt="xl" pl="xl">
                  <QuestionsSection title="Booking" />
                </Tabs.Panel>

                <Tabs.Panel value="Payment" pt="xl" pl="xl">
                  <QuestionsSection title="Cancellation" />
                </Tabs.Panel>

                <Tabs.Panel value="Security" pt="xl" pl="xl">
                  <QuestionsSection title="Change a booking" />
                </Tabs.Panel>
              </Tabs>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default User_Profile;
