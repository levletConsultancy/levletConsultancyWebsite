import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface PrimaryBtnProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

const PrimaryBtn = ({
  href = "#get-started",
  children = "Get started",
  className,
}: PrimaryBtnProps) => {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-2 rounded-md bg-burgundy px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-burgundy-dark",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-white" />
      {children}
    </Link>
  );
};

export default PrimaryBtn;