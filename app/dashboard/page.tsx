import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Dashboard from "@/components/Dashboard";

export default async function Page() {
  const user = await currentUser();
  if (!user) redirect("/auth-callback?origin=dashboard");

  const dbUser = await prisma.user.findFirst({ where: { id: user.id } });

  if (!dbUser) redirect("/auth-callback?origin=dashboard");

  return <Dashboard />;
}
