import { useTRPC } from "@/trpc/client";
import { trpc } from "@/trpc/server";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const trpc = useTRPC();
  const greeting = useQuery(trpc.hello.queryOptions({ text: "world" }));
  if (!greeting.data) return <div>Loading...</div>;
  return <div>{greeting.data.greeting}</div>;
};

export default Page;
