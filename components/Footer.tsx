import { Heart, MessageSquare } from "lucide-react";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";
import { FiGithub, FiLinkedin } from "react-icons/fi";

export const Footer = () => {
  return (
    <footer className="w-full border-t border-border mt-20">
      <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 py-8 flex flex-col  md:flex-row md:justify-between">
        {/* Left Section */}
        <div className="flex gap-4 flex-col max-w-md">
          <div className="flex gap-2 w-48 hover:scale-105 transition-all duration-300 cursor-pointer">
            <MessageSquare color="#0284c7" />
            <div className="text-base font-semibold">
              PDF<span className="">Chat</span>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Transform your PDF experience with AI-powered conversations. Ask
            questions, get insights, save time.
          </p>

          <div className="flex mt-1 gap-4 text-muted-foreground">
            <a
              href="https://github.com/akgbytes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 hover:scale-105 transition-all"
            >
              <FiGithub className="icon" />
            </a>
            <a
              href="https://x.com/akgbytes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 hover:scale-105 transition-all"
            >
              <FaXTwitter className="icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/akgbytes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sky-600 hover:scale-105 transition-all"
            >
              <FiLinkedin className="icon" />
            </a>
          </div>
        </div>

        {/* Right Section */}

        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold">Quick Links</h3>

          <Link
            href=""
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href=""
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Pricing
          </Link>
        </div>

        <div className="flex flex-col gap-2 text-sm">
          <h3 className="font-semibold">Legal</h3>
          <Link
            href=""
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
          <Link
            href=""
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>

      <div className="h-full mx-auto w-full max-w-screen-xl px-2.5 md:px-20 border-t border-border py-3 text-muted-foreground">
        <div className="flex justify-between text-sm gap-3">
          <div>© 2025 PDFChat. All rights reserved.</div>
          <div>
            <span className="">
              Made with{" "}
              <Heart className="inline border-none size-5 text-sky-600" /> by{" "}
            </span>
            <span className="cursor-pointer hover:text-sky-600 hover:underline">
              akgbytes
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
