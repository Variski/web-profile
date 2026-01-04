"use client";

import { HeroUIProvider } from "@heroui/system";
import { ThemeProvider } from "next-themes";
import { useRouter } from "next/navigation";

export default function Providers({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <ThemeProvider attribute="class"  >
        {children}
      </ThemeProvider>
    </HeroUIProvider>
  );
}
