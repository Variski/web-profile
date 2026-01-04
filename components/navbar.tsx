  "use client";

  import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle,
  } from "@heroui/react";
  import Link from "next/link";
  import { usePathname } from "next/navigation";

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Service", href: "#service" },
    { name: "Project", href: "#project" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/resume" },
  ];

  export default function AppNavbar() {
    const pathname = usePathname();

    return (
      <Navbar
        isBordered
        maxWidth="full"
        className="bg-black text-white"
      >
        {/* LEFT */}
        <NavbarBrand
          className="
            sm:static
            absolute left-1/2 -translate-x-1/2
            sm:translate-x-0 sm:left-auto
          "
        >
          <Link
            href="/"
            className="font-bold text-xl text-white"
          >
            Deva
          </Link>
        </NavbarBrand>
        
        {/* DESKTOP MENU */}
        <NavbarContent className="hidden sm:flex gap-1 mr-38" justify="end">
          {menuItems.map((item) => (
            <NavbarItem
              key={item.name}
              isActive={pathname === item.href}
            >
              <Link
                  href={item.href}
                      className={`transition px-6 py-2 font-semibold 
                          no-underline
                          hover:text-white
                          active:text-white
                          focus:text-white
                          focus-visible:text-white
                          visited:text-white
                          outline-none
                                  ${
                                      item.name === "Resume"
                                      ? "bg-purple-800 text-black hover:bg-purple-950"
                                      : pathname === item.href
                                      ? "text-primary font-extrabold"
                                      : "text-white/95 hover:text-primary"
                                  }
                                  `}
                  >
                  {item.name}
              </Link>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* MOBILE MENU */}
        <NavbarMenuToggle className="sm:hidden text-white" />

        <NavbarMenu className="bg-black">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.name}>
              <Link
                  href={item.href}
                  className={`block w-full py-2 text-center no-underline
                      focus:outline-none focus:ring-0 active:text-inherit visited:text-inherit
                      ${
                          item.name === "Resume"
                          ? "border border-white text-white"
                          : "text-white/80 hover:text-white"
                      }
                      `}
                  >
                  {item.name}
              </Link>
            </NavbarMenuItem>
          ))}
        </NavbarMenu>
      </Navbar>
    );
  }
