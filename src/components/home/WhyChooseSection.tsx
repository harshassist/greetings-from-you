
import { Award, GraduationCap, Users } from "lucide-react";

const features = [
  {
    icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
    title: "Expert Career Guidance",
    description: "Get personalized advice from education industry professionals to guide your career path."
  },
  {
    icon: <Users className="h-12 w-12 text-blue-600" />,
    title: "Vast Network",
    description: "Connect with thousands of educational institutions and fellow educators across the country."
  },
  {
    icon: <Award className="h-12 w-12 text-blue-600" />,
    title: "Quality Opportunities",
    description: "Access carefully curated job listings from top-rated schools and educational organizations."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Choose EduAssist for Your Education Career?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're dedicated to helping educators find their perfect role while enabling institutions to discover exceptional talent.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
