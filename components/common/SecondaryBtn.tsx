import React from 'react'
import Link from "next/link";
import { cn } from "@/lib/utils";

interface SecondaryBtnProps {
  href?: string;
  children?: React.ReactNode;
  className?: string;
}

const SecondaryBtn = ({ href, children, className }: SecondaryBtnProps) => {
  return (
    <Link
        href={href || "/contact"}
        className={cn("inline-flex items-center gap-2 rounded-sm bg-[#FDF9F7] px-6 py-3 text-sm font-medium text-[#1C1815] transition-colors hover:bg-[#F6DCDD]", className)}
    >
      {children}
    </Link>
  )
}

export default SecondaryBtn
