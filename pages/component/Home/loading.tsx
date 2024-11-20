"use client";

import { Loader } from "@mantine/core";

function Loading() {
  return(
    
  <>
    <div className="fixed top-0 z-[1000] bottom-0 left-0 right-0 flex w-full h-full bg-white">
      <Loader color="violet" size="xl" variant="dots" className="m-auto text-bg_banfsgy loader" />;
    </div>
  </>
  )
}

export default Loading;
