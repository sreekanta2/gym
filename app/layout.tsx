import Providers from "@/provider/providers";

import { siteConfig } from "@/config/site";
import "./assets/scss/globals.scss";
export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
};
export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <Providers>{children}</Providers>
    </html>
  );
}
