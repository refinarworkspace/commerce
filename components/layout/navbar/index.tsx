import CartModal from "components/cart/modal";
import LogoSquare from "components/logo-square";
import { getMenu } from "lib/shopify";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { Suspense } from "react";
import MobileMenu from "./mobile-menu";
import Search, { SearchSkeleton } from "./search";

const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu("next-js-frontend-header-menu");

  return (
    <nav className="relative p-3 sm:p-4 lg:px-6">
      <div className="flex items-center gap-3 md:gap-0">
        <div className="flex min-w-0 flex-1 items-center gap-3 md:w-1/3 md:flex-none md:gap-0">
          <div className="flex-none md:hidden">
            <Suspense fallback={null}>
              <MobileMenu menu={menu} />
            </Suspense>
          </div>
          <Link
            href="/"
            prefetch={true}
            className="flex min-w-0 items-center md:mr-2 md:w-auto lg:mr-6"
          >
            <LogoSquare />
            <div className="ml-2 truncate text-sm font-medium uppercase md:hidden lg:block">
              {SITE_NAME}
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-neutral-500 underline-offset-4 hover:text-black hover:underline dark:text-neutral-400 dark:hover:text-neutral-300"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
        </div>
        <div className="flex flex-none justify-end md:w-1/3">
          <CartModal />
        </div>
      </div>
      <div className="mt-3 md:hidden">
        <Suspense fallback={<SearchSkeleton />}>
          <Search />
        </Suspense>
      </div>
    </nav>
  );
}
