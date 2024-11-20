import React from "react";
import Button from "../atoms/Button";
import useFetch from "@/hooks/useFetch";

function Subme() {
  const { data: SubmeSection } = useFetch({
    endpoint: `api/dashboard/part/show/CallToAction_page`,
    queryKey: [`Subme_page`],
  });
  return (
    <div className="p-10 text-center bg-bg_banfsgy">
      <div>
        <h1 className="text-3xl font-bold text-white">
        {
            //@ts-ignore

            SubmeSection?.data?.parts[0]?.Call_title
          }
          </h1>

        <p className="mt-4 text-white">
        {
            //@ts-ignore

            SubmeSection?.data?.parts[2]?.Call_sup_title
          }
        </p>

        <p className="mt-4 text-white">
        {
            //@ts-ignore

            SubmeSection?.data?.parts[1]?.Call_body
          }
        </p>

        <Button  className="px-10 py-2 mt-5 text-black bg-white" >
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default Subme;
