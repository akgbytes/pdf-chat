import { eb_garamond } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  children?: ReactNode;
}

export const Heading = ({ children, className, ...props }: HeadingProps) => {
  return (
    <h1
      className={cn(
        "text-5xl sm:text-6xl text-pretty font-semibold tracking-tight text-zinc-800",
        className,
        eb_garamond.className
      )}
      {...props}
    >
      {children}
    </h1>
  );
};
