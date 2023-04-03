import { Inter, Kaisei_Tokumin } from "next/font/google";
import clsx from "clsx";
import "@/styles/globals.css";
import MovingCircles from "./MovingCircles";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const kaisei = Kaisei_Tokumin({
  subsets: ["latin"],
  variable: "--font-kaisei",
  weight: ["400", "500", "700", "800"],
});

export const metadata = {
  title: "Minimalistic Design",
  description: "Des 10 team project",
  themeColor: "#25292F",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={clsx(kaisei.variable, inter.variable)}>
      <body className='bg-zinc-200'>
        <div className='relative z-10'>{children}</div>
        <MovingCircles />
      </body>
    </html>
  );
}
