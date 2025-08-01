"use client";
import { useTRPC } from "@/trpc/client";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const origin = searchParams.get("origin");
  const trpc = useTRPC();
  const { error, isSuccess, isError } = useQuery(
    trpc.authCallback.queryOptions()
  );

  useEffect(() => {
    if (isSuccess) {
      router.push(origin ? `/${origin}` : "/dashboard");
    }

    if (isError && error?.data?.code === "UNAUTHORIZED") {
      router.push("/sign-in");
    }
  }, [isSuccess, isError, error, origin, router]);

  return (
    <div className="w-full mt-24 flex justify-center">
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="h-8 w-8 animate-spin text-zinc-800" />
        <h3 className="font-semibold text-xl">Setting up your account...</h3>
        <p>You will be redirected automatically.</p>
      </div>
    </div>
  );
};

export default Page;
