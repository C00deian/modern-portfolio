import localFont from "next/font/local";

export const primaryFont = localFont({
  src: [
    {
      path: "../public/fonts/regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-primary",
  display: "swap",
  
});



// import { Crimson_Text } from "next/font/google";

// export const crimson = Crimson_Text({
//   subsets: ["latin"],
//   weight: ["400", "600", "700"],
//   style: ["normal", "italic"],
//   variable: "--font-crimson",
//   display: "swap",
// });
