
import { Button } from "@/components/ui/button";

const steps = [
  {
    icon: "1",
    title: "Create Profile",
    description: "Build your professional profile"
  },
  {
    icon: "2",
    title: "Search Jobs",
    description: "Find perfect education opportunities"
  },
  {
    icon: "3",
    title: "Apply & Connect",
    description: "Apply and get hired"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How EduAssist Works</h2>
        <p className="text-gray-500 text-center mb-12">Finding the right job in education has never been easier</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-4 h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-xl font-bold">
                {step.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{step.title}</h3>
              <p className="text-gray-500">{step.description}</p>
              <div className="mt-4">
                <Button variant="link" className="text-blue-600">
                  Learn more
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
