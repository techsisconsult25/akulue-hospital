import HomeHero from '@/components/home/home-hero';
import HealthcareHighlights from '@/components/home/healthcare-highlights';
import HospitalIntroduction from '@/components/home/hospital-introduction';
import ServicesOverview from '@/components/home/services-overview';
import FacilitiesGallery from '@/components/home/facilities-gallery';
import Testimonials from '@/components/home/testimonials';
import MedicalTeam from '@/components/home/medical-team';

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <HealthcareHighlights />
      <HospitalIntroduction />
      <ServicesOverview />
      <FacilitiesGallery />
      <Testimonials />
      <MedicalTeam />
    </>
  );
}
