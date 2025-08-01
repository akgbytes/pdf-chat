import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import { ArrowRight } from "lucide-react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { SignedIn, SignedOut, SignOutButton } from "@clerk/nextjs";

export const Navbar = async () => {
  return (
    <nav className="sticky z-[100] h-16 inset-x-0 top-0 w-full border-b border-gray-200 bg-white/80 backdrop-blur-lg transition-all">
      <MaxWidthWrapper>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex z-40 font-semibold">
            PDF<span className="text-sky-700">Chat</span>
          </Link>

          <div className="h-full flex items-center space-x-4">
            <SignedOut>
              <Link
                href="/pricing"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Pricing
              </Link>
              <Link
                href="/sign-in"
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                Sign in
              </Link>

              <div className="h-8 w-px bg-gray-200" />

              <Link
                href="/sign-up"
                className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1.5",
                })}
              >
                Sign up <ArrowRight className="size-4" />
              </Link>
            </SignedOut>

            <SignedIn>
              <SignOutButton>
                <Button size="sm" variant="ghost">
                  Sign out
                </Button>
              </SignOutButton>

              <Link
                href="/dashboard"
                className={buttonVariants({
                  size: "sm",
                  className: "flex items-center gap-1",
                })}
              >
                Dashboard <ArrowRight className="ml-1.5 size-4" />
              </Link>
            </SignedIn>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};
