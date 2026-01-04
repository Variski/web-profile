import "@/styles/globals.css";
import Providers from "@/app/providers";

export const metadata = {
  title: "Deva Hella Eka Variski",
  description:
    "Portfolio website of Deva Hella Eka Variski, a passionate frontend developer specializing in crafting engaging and user-friendly web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-[#0a0a0a] text-white min-h-screen">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
