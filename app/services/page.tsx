import ShaaredLayout from "../layout/shared-layout";
import ServicesHero from "./components/hero";
import ServicesTabs from "./components/services-page";

export default function ServicePage() {
  return (
    <ShaaredLayout>
      <ServicesHero />
      <ServicesTabs />
    </ShaaredLayout>
  );
}
