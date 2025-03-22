"use client";
import { SiteLogo } from "@/components/svg";
import ThemeButton from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import { useMediaQuery } from "@/hooks/use-media-query";
import { AnimatePresence, motion } from "framer-motion"; // Import Framer Motion
import { ChevronDown, LogIn, LogInIcon, Menu } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { menus } from "@/config/data";
import NavMenu from "./nav-menu";

const Header = () => {
  const [scroll, setScroll] = useState<boolean>(false);
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const [open, setOpen] = useState<boolean>(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null); // Track active menu

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);

  // Toggle child menu visibility
  const toggleMenu = (title: string) => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  if (!isDesktop) {
    return (
      <>
        <div
          className={
            scroll
              ? "bg-card/50 dark:bg-card/70 backdrop-blur-lg z-50     shadow-sm fixed top-0 left-0 w-full h-fit py-3"
              : "fixed top-0 left-0 w-full py-3  z-50 "
          }
        >
          <nav className=" flex justify-between relative z-50 h-full mx-4">
            {/* Logo Section */}
            <Link href="/" className="flex items-center gap-1">
              <SiteLogo className="h-8 w-8 text-primary" />
              <span className="text-primary-500 font-medium text-xl">Care</span>
            </Link>

            {/* Right-Aligned Buttons and Menu */}
            <div className="flex items-center gap-6">
              <ThemeButton />
              <Button asChild size="sm">
                <Link href="/login" className="text-sm font-semibold">
                  <LogIn className="w-4 h-4 mr-1.5" />
                  Login
                </Link>
              </Button>
              <button type="button">
                <Menu
                  className="h-6 w-6 cursor-pointer"
                  onClick={() => setOpen(!open)}
                />
              </button>
            </div>

            {/* Dropdown Menu with Framer Motion */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="absolute bg-card/70 top-12 backdrop-blur-lg  rounded-sm rounded-t-none p-4  w-full  "
                >
                  <ul className="space-y-2 ">
                    {menus.map((menu, index) => (
                      <li key={`menu-${index}`} className="relative">
                        {/* Parent Menu Item */}
                        <div
                          className="flex items-center justify-between py-2 text-sm hover:text-primary cursor-pointer"
                          onClick={() => toggleMenu(menu.title)} // Toggle on click
                        >
                          <span>{menu.title}</span>
                          {/* Dropdown Icon (Chevron) for Parent Items with Children */}
                          {menu.child && menu.child.length > 0 && (
                            <ChevronDown
                              className={`h-4 w-4 transform transition-transform duration-200 ,  ${
                                activeMenu === menu.title ? "rotate-180" : ""
                              }`}
                            />
                          )}
                        </div>

                        {/* Child Menu Items (if any) */}
                        {menu.child && menu.child.length > 0 && (
                          <AnimatePresence>
                            {activeMenu === menu.title && (
                              <motion.ul
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{
                                  duration: 0.3,
                                  ease: "easeInOut",
                                }}
                                className=" mt-2 space-y-2 border-l border-gray-200 overflow-hidden"
                              >
                                {menu.child.map((child, childIndex) => (
                                  <li key={`child-${childIndex}`}>
                                    <Link
                                      href={child.href}
                                      className="block px-4 py-2 text-sm hover:text-primary hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                ))}
                              </motion.ul>
                            )}
                          </AnimatePresence>
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </nav>
        </div>
      </>
    );
  }

  return (
    <div
      className={
        scroll
          ? "bg-card/50 backdrop-blur-lg shadow-xl z-30 dark:bg-card/70 fixed top-0 left-0 w-full py-3"
          : "z-30 fixed top-0 left-0 w-full py-3  text-default-700 bg-card/10 backdrop-blur-sm "
      }
    >
      <nav className="container flex justify-between">
        <Link href="/" className="flex items-center gap-1">
          <SiteLogo className="h-8 w-8 text-primary" />
          <span className="text-primary-500 font-medium text-xl">evora</span>
        </Link>
        <NavMenu />
        <div className="flex items-center gap-6">
          <ThemeButton />
          <Button asChild size="sm">
            <Link href="#" className="text-sm font-semibold">
              <LogInIcon className="w-4 h-4 me-1.5" />
              Login
            </Link>
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
