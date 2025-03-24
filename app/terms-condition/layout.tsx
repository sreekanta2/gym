import Header from "@/components/header";
import Footer from "@/components/landing-page/footer";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
