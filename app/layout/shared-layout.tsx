import Header from "@/components/header";
import Footer from "@/components/landing-page/footer";
export const metadata = {
  title: "account",
};
export default function ShaaredLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
