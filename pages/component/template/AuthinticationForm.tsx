"use client";

import { useAuth } from "@/auth/AuthProvider";
import { notify } from "@/utils/toast";
import {
  Anchor,
  Divider,
  Group,
  Loader,
  Modal,
  Paper,
  PasswordInput,
  Radio,
  Stack,
  TextInput
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { upperFirst, useToggle } from "@mantine/hooks";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Button from "../atoms/Button";
import ButtonWithIcons from "../atoms/ButtonWithIcons";
import facebookIcon from "../../../public/assets/facebook.svg";
import googleIcon from "../../../public/assets/google.svg";
export default function AuthinticationForm({ opened, close }:any) {
  const [type, toggle] = useToggle(["login", "register"]);

  type GenderOption = "male" | "female";

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      username: "",
      password: "",
      gender: "",
      phone: "",
      terms: true,
      country: "",
      bio: "",
      type: "",
      login: "",
    },

    validate: {
      // email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      // password: (val) =>
      //   val.length <= 6
      //     ? "Password should include at least 6 characters"
      //     : null,
    },
  });

  const { login, user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  console.log(
    "🚀 ~ file: AuthinticationForm.tsx:60 ~ AuthinticationForm ~ isLoading:",
    isLoading
  );

  const API_BASE_URL = "https://dashboard.savvyhost.io";
  const submitValue = async (values: any) => {
    try {
      const headers = {
        "Content-Type": "application/json; charset=utf-8",
        Authorization: "Bearer your-token-here",
      };

      const response = await axios.post(
        type === "register"
          ? `${API_BASE_URL}/api/register`
          : `${API_BASE_URL}/api/login`,

        values,
        { headers }
      );
      console.log(
        "🚀 ~ file: AuthinticationForm.tsx:78 ~ submitValue ~ response:",
        response
      );

      if (type === "register") {
        if (response.status == 201) {
          toggle();
          notify("success", "Registered Successfully");
          setIsLoading(false);
        } else {
          setIsLoading(false);
        }
      }
      setIsLoading(false);

      if (type === "login") {
        if (response.status == 200) {
          notify("success", "Login Successfully");
          close(); // Close the modal after successful login
          login(response.data.user, response.data.access_token);
          setIsLoading(false);
        }
      }

      return response.data;
    } catch (error:any) {
      notify("error", `${error?.response?.data.error}`);
      setIsLoading(false);

    }
  };
  const toggleFormMode = () => {
    toggle();
    form.reset(); // Reset form fields when toggling modes
  };

  return (
    <div>
      <Modal opened={opened} onClose={close} title={`${"Sign in"}`} size={"lg"}>
        <div className="grid grid-cols-2">
          <div className="lg:col-span-1 col-span-2">
            <Paper radius="md" p="xl">
              <div className="flex flex-col ">
                <ButtonWithIcons
                  label="sign in with Google"
                  Icon={
                    <Image
                      src={googleIcon.src}
                      alt="goole"
                      width="20"
                      height="20"
                    />
                  }
                />
                <ButtonWithIcons
                  label="sign in with Facebook"
                  Icon={
                    <Image
                      src={facebookIcon.src}
                      alt="goole"
                      width="20"
                      height="20"
                    />
                  }
                />
              </div>

              <Divider
                label="Or continue with email"
                labelPosition="center"
                my="lg"
              />
              <form
                onSubmit={form.onSubmit((values) => {
                  console.log(values);
                  submitValue(values);
                })}
              >
                <Stack>
                  {type === "register" && (
                    <div>
                      <Radio.Group
                        name="type"
                        label="Select your type Registration"
                        className="mt-2"
                        withAsterisk
                        value={form.values.type}
                        onChange={(value) => form.setFieldValue("type", value)}
                      >
                        <Group mt="xs gap-2">
                          <Radio value="travelr" label="Travelr" />
                          <Radio value="company" label="Company" />
                        </Group>
                      </Radio.Group>
                      <TextInput
                        label="Name"
                        placeholder="Your name"
                        value={form.values.name}
                        className="mt-3"
                        onChange={(event) =>
                          form.setFieldValue("name", event.currentTarget.value)
                        }
                        radius="md"
                      />

                      {/* <TextInput
                        label="phone"
                        placeholder="Phone"
                        value={form.values.phone}
                        onChange={(event) =>
                          form.setFieldValue("phone", event.currentTarget.value)
                        }
                        radius="md"
                      /> */}
                      {/* <TextInput
                        label="bio"
                        placeholder="Your bio"
                        value={form.values.bio}
                        onChange={(event) =>
                          form.setFieldValue("bio", event.currentTarget.value)
                        }
                        radius="md"
                      /> */}
                      {/* <TextInput
                        label="country"
                        placeholder="Your country"
                        value={form.values.country}
                        onChange={(event) =>
                          form.setFieldValue(
                            "country",
                            event.currentTarget.value
                          )
                        }
                        radius="md"
                      /> */}
                      <TextInput
                        required
                        label="Email"
                        placeholder="hello@email.dev"
                        value={form.values.email}
                        className="mt-3"
                        onChange={(event) =>
                          form.setFieldValue("email", event.currentTarget.value)
                        }
                        error={form.errors.email && "Invalid email"}
                        radius="md"
                      />
                    </div>
                  )}
                  {type === "login" && (
                    <TextInput
                      required
                      label="Email"
                      placeholder="hello@email.dev"
                      value={form.values.login}
                      onChange={(event) =>
                        form.setFieldValue("login", event.currentTarget.value)
                      }
                      error={form.errors.login && "Invalid email"}
                      radius="md"
                    />
                  )}

                  <PasswordInput
                    required
                    label="Password"
                    placeholder="Your password"
                    value={form.values.password}
                    onChange={(event) =>
                      form.setFieldValue("password", event.currentTarget.value)
                    }
                    error={
                      form.errors.password &&
                      "Password should include at least 6 characters"
                    }
                    radius="md"
                  />
                  {/* </>
                      
                    )
                  }
                 */}
                  {type === "register" && (
                    <div>
                      {/* <Radio.Group
                        name="gender"
                        label="Select your type"
                        withAsterisk
                        className="mt-2"
                        value={form.values.gender}
                        onChange={(value) =>
                          form.setFieldValue("gender", value)
                        }
                      >
                        <Group mt="xs">
                          <Radio value="1" label="male" />
                          <Radio value="0" label="female" />
                        </Group>
                      </Radio.Group> */}

                      {/* <Checkbox
                        label="I accept terms and conditions"
                        checked={form.values.terms}
                        className="mt-5"
                        onChange={(event) =>
                          form.setFieldValue(
                            "terms",
                            event.currentTarget.checked
                          )
                        }
                      /> */}
                    </div>
                  )}
                </Stack>
                <div className="flex mt-5">
                  <Button
                    type="submit"
                    className="lg:px-[100px] px-5  text-center py-1  rounded-md m-auto w-full"
                    action={() => setIsLoading(true)}
                  >
                    {isLoading ? <Loader color="#fff" /> : upperFirst(type)}
                    {/* {} */}
                  </Button>
                </div>
                <Group position="apart" mt="xl">
                  <Anchor
                    component="button"
                    type="button"
                    color="dimmed"
                    onClick={toggleFormMode} // Toggles the "type" state between "login" and "register" and resets form fields
                    size="xs"
                  >
                    {type === "register"
                      ? "Already have an account? Login"
                      : "Don't have an account? Register"}
                  </Anchor>
                </Group>
              </form>
            </Paper>
          </div>

          <div className="lg:col-span-1 lg:block hidden ">
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKrxE2DcG3hDJ9W19P1Rp9ezqR-7nP8RcNKA&usqp=CAU"
              width="100"
              height="400"
              alt="partner"
              className="!w-[100%] h-[100%]"
            />
          </div>
        </div>
      </Modal>
    
    </div>
  );
}
