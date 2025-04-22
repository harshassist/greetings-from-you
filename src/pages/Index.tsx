
import { CategoryNav } from "@/components/CategoryNav/CategoryNav";
import { categories } from "@/types/categories";
import HeroSection from "@/components/home/HeroSection";
import FeaturedJobs from "@/components/home/FeaturedJobs";
import HowItWorks from "@/components/home/HowItWorks";
import WhyChooseSection from "@/components/home/WhyChooseSection";
import CallToActionSection from "@/components/home/CallToActionSection";
import CategoriesSection from "@/components/home/CategoriesSection";
import Footer from "@/components/home/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <CategoryNav categories={categories} />
      <HeroSection />
      <CategoriesSection />
      <FeaturedJobs />
      <WhyChooseSection />
      <HowItWorks />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default Index;
