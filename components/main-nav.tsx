"use client";

import Link from "next/link";
import Image from "next/image";

export function MainNav() {
  return (
    <div className="mr-4 hidden md:flex">
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Image src="/logo.svg" alt="Eventify Logo" width={24} height={24} />
        <span className="hidden font-bold sm:inline-block">Eventify</span>
      </Link>
    </div>
  );
} 