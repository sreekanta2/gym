import { Application, Components, Messages } from "@/components/svg";
import appChat from "@/public/images/landing-page/app-chat.jpg";
import car from "@/public/images/landing-page/car.png";
import { Car } from "lucide-react";

export const demoMenus = [
  {
    title: "Applications",
    icon: Application,
    child: [
      {
        title: "Healthcare",
        icon: Messages,
        href: "https://dt.srikanto.site/",
        image: appChat,
      },
      {
        title: "Service",
        icon: Car,
        href: "https://auto.srikanto.site/",
        image: car,
      },
    ],
  },
  {
    title: "Healthcare",
    icon: Components,
    child: [
      {
        title: "Dcare",
        icon: Messages,
        href: "https://dt.srikanto.site/",
        image: appChat,
      },
    ],
  },
  {
    title: "Service",
    icon: Components,
    child: [
      {
        title: "Car Services",
        icon: Messages,
        href: "https://auto.srikanto.site/",
        image: car,
      },
    ],
  },
];

export const menus = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "#technology",
    child: [
      {
        title: "About Us",
        href: "/about-us",
      },
      {
        title: "About Me",
        href: "/about-me",
      },
    ],
  },

  {
    title: "Services",
    child: [
      {
        title: "Balance body mind",
        href: "/",
      },
      {
        title: "Nutrition Plan",
        href: "/",
      },
      {
        title: "Fitness & Performance",
        href: "",
      },
      {
        title: "Routein Programe",
        href: " ",
      },
      {
        title: "Weight Loos",
        href: " ",
      },
    ],
  },
  {
    title: "Events",
    href: "/",
  },
  {
    title: "Pages",
    child: [
      {
        title: "Documentation",
        href: "/docs/introduction",
      },
      {
        title: "Changelog",
        href: "/docs/update-log",
      },
      {
        title: "Github Access",
        href: "https://codeshaperbd.freshdesk.com/support/login",
      },
      {
        title: "Report a bug",
        href: "https://codeshaperbd.freshdesk.com/support/login",
      },
      {
        title: "Support",
        href: "https://codeshaperbd.freshdesk.com/support/login",
      },
      {
        title: "Hire Us",
        href: "https://codeshaper.net/",
      },
    ],
  },
  {
    title: "Shop",
    href: "/",
  },
  {
    title: "Contact",
    href: "/",
  },
];
export type Menu = (typeof menus)[number];
