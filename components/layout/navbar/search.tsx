"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Form from "next/form";
import { useSearchParams } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();

  return (
    <Form action="/search" className="relative w-full max-w-[550px]">
      <input
        key={searchParams?.get("q")}
        type="text"
        name="q"
        placeholder="Search for products..."
        autoComplete="off"
        defaultValue={searchParams?.get("q") || ""}
        className="h-11 w-full rounded-lg border bg-white px-4 pr-11 text-base text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <MagnifyingGlassIcon className="h-4 w-4" />
      </div>
    </Form>
  );
}

export function SearchSkeleton() {
  return (
    <form className="relative w-full max-w-[550px]">
      <input
        placeholder="Search for products..."
        className="h-11 w-full rounded-lg border bg-white px-4 pr-11 text-base text-black placeholder:text-neutral-500 md:text-sm dark:border-neutral-800 dark:bg-transparent dark:text-white dark:placeholder:text-neutral-400"
      />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <MagnifyingGlassIcon className="h-4 w-4" />
      </div>
    </form>
  );
}
