import React from 'react'
import { SiGooglegemini } from "react-icons/si";

interface MainHeadingProps {
  title: string;
  subtitle?: string;
}

const MainHeading = ({ title, subtitle }: MainHeadingProps) => {
  return (
    <div className="mx-auto max-w-2xl text-center">
        <div className="flex items-center justify-center gap-1 text-sm font-medium text-burgundy">
          <SiGooglegemini className="h-4 w-4 " />
          <span>{subtitle}</span>
        </div>
        <h2 className="mt-4 text-3xl leading-snug text-neutral-900 sm:text-4xl">
          {title}
        </h2>
    </div>
  )
}

export default MainHeading
