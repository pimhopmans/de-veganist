import localFont from "next/font/local";

export const robotoFont = localFont({
  src: [
    {
      path: "../assets/fonts/Roboto-VariableFont_wdth,wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-roboto",
});

export const worksansFont = localFont({
  src: [
    {
      path: "../assets/fonts/WorkSans-VariableFont_wght.ttf",
      weight: "100 900",
      style: "normal",
    },
  ],
  variable: "--font-worksans",
});
