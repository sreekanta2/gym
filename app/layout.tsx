import Providers from "@/provider/providers";

import "./assets/scss/globals.scss";

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
