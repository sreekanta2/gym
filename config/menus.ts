export interface MenuItemProps {
  title: string;
  icon?: React.ElementType;
  href: string;
  child?: MenuItemProps[];
}

export const menus: MenuItemProps[] = [
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Classes",
    href: "/classes",
  },
  {
    title: "Gallery",
    href: "/gallery",
  },
  {
    title: "Events",
    href: "/events",
  },
  {
    title: "Blogs",
    href: "/blogs",
  },
  {
    title: "Shops",
    href: "/products",
  },

  {
    title: "About me",
    href: "/about",
    child: [
      {
        title: "Company",
        href: "/about/company",
      },
    ],
  },

  {
    title: "Contact",
    href: "/contact",
  },
];
export type Menu = (typeof menus)[number];
