
import { Button } from "@/components/ui/button";

const CallToActionSection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Find Your Dream Education Career?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join thousands of educators who have found their perfect role through EduAssist. Your next opportunity awaits!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Create Your Profile
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-blue-500">
              Browse Opportunities
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
