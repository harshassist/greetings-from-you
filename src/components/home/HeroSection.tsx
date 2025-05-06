
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FileText, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
  const [jobQuery, setJobQuery] = useState("");
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query params for search
    const params = new URLSearchParams();
    if (jobQuery) params.append("q", jobQuery);
    if (location) params.append("loc", location);
    
    // Navigate to the jobs page with search parameters
    navigate(`/jobs?${params.toString()}`);
  };

  return (
    <section className="bg-[#0000FF] text-white">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Connecting Educators with Their Dream Opportunities
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            EduAssist helps educators find their perfect career match while enabling educational institutions to discover exceptional talent. The #1 platform for education professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link to="/jobs">
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 text-base font-medium px-8 py-6 h-auto flex items-center gap-2 w-full"
              >
                <Briefcase className="w-5 h-5" />
                For Job Seekers
              </Button>
            </Link>
            <Link to="/employers">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white text-base font-medium px-8 py-6 h-auto bg-blue-600 hover:bg-blue-500 flex items-center gap-2 w-full"
              >
                <FileText className="w-5 h-5" />
                For Employers
              </Button>
            </Link>
          </div>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="bg-blue-800/50 rounded-lg p-6 max-w-3xl mx-auto">
            <h3 className="text-white font-medium mb-4 text-xl">Find Your Next Opportunity</h3>
            <div className="flex flex-col md:flex-row gap-3">
              <Input 
                placeholder="Job title, keywords, etc." 
                className="bg-white text-gray-900 border-0 h-11 text-base" 
                value={jobQuery}
                onChange={(e) => setJobQuery(e.target.value)}
              />
              <Input 
                placeholder="City, state, or remote" 
                className="bg-white text-gray-900 border-0 h-11 text-base"
                value={location}
                onChange={(e) => setLocation(e.target.value)} 
              />
              <Button 
                type="submit"
                className="bg-purple-600 hover:bg-purple-700 text-white h-11 px-6 text-base font-medium"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mt-16 text-center">
            <div>
              <p className="text-4xl font-bold mb-1">10,000+</p>
              <p className="text-sm opacity-80">Active Job Listings</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">5,000+</p>
              <p className="text-sm opacity-80">Educational Institutions</p>
            </div>
            <div>
              <p className="text-4xl font-bold mb-1">25,000+</p>
              <p className="text-sm opacity-80">Educators Placed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
