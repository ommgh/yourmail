"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 py-3">
        <div className="flex items-center justify-between rounded-full bg-white/80 px-4 py-2 backdrop-blur-md">
          <div className="flex items-center gap-4 sm:gap-8">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Logo"
                width={50}
                height={50}
                className=""
              />
            </Link>
            <nav className="hidden gap-4 sm:gap-6 md:flex">
              <Link
                href="#features"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Features
              </Link>
              <Link
                href="#faq"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                FAQ
              </Link>
              <Link
                href="#pricing"
                className="text-sm font-medium text-gray-600 hover:text-gray-900"
              >
                Pricing
              </Link>
            </nav>
          </div>
          <Link href="/auth/login" prefetch>
            <Button
              className="rounded-full bg-black text-sm font-medium text-white hover:bg-black/90"
              size="sm"
            >
              Login
            </Button>
          </Link>
        </div>
      </nav>
    </header>
  );
}
