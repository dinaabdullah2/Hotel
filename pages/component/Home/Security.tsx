import useFetch from "@/hooks/useFetch";
import Image from "next/image";

function Security() {
  interface Partner {
    partners: {
      id: number;
      name: string;
      image: string;
      content: string;
      updated_at: string;
    };

    // Add more properties if needed...
  }
  const { data: SecuritySection } = useFetch({
    endpoint: `api/dashboard/part/show/Security_page`,
    queryKey: [`Security-section`],
  });

  return (
    <div className="bg-white p-5 md:p-20 ">
      <div>
        <h4
          className="relative  mt-5 py-5 text-3xl font-bold  
        after:w-[50px] after:absolute after:left-[0px]
        after:bg-bg_banfsgy after:bottom-[10%] after:h-[3px]"
        >
          {
                        //@ts-ignore

          SecuritySection?.data?.parts[0]?.Security_title}
        </h4>
        <p className="w-full py-2 md:w-1/2">
          {
                        //@ts-ignore

          SecuritySection?.data?.parts[1]?.Security_body}
        </p>
      </div>

      <div className="grid items-center justify-center grid-cols-5 mt-8">
        {/* {SecuritySection?.data?.parts?.map((item: any) => (
          <div className="w-[60%]" key={item?.image}>
            <Image
              className="w-full"
              src={item?.image}
              width={50}
              height={50}
              alt="lazy"
            />
          </div>
        ))} */}
      </div>
    </div>
  );
}

export default Security;
