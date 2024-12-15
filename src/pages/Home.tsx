import HeroSection from "../components/home/HeroSection";
import SpecialtiesSection from "../components/home/SpecialtiesSection";
import FeaturedGallery from "../components/home/FeaturedGallery";
// import PaymentComponent from "../components/ui/PaymentComponent";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <SpecialtiesSection />
      <FeaturedGallery />
      {/* <PaymentComponent
        servicePrice={0}
        onSuccess={function (): void {
          throw new Error("Function not implemented.");
        }}
      /> */}
    </div>
  );
};

export default Home;
