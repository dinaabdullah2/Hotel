import React from "react";
import { Skeleton } from "@mantine/core";

export default function TextSkelton({ loading }: any) {
  return (
    <div>
      <Skeleton height={8} mt={6} radius="xl" width="60%" visible={loading} />
      <Skeleton height={8} mt={6} radius="xl" width="80%" visible={loading} />
      <Skeleton height={8} mt={6} width="100%" radius="xl" visible={loading} />
      <Skeleton height={8} mt={6} width="100%" radius="xl" visible={loading} />
    </div>
  );
}
