
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Filter, MapPin, Clock, Briefcase } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Jobs = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [locationTerm, setLocationTerm] = useState("");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  
  // Parse query parameters on component mount
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryParam = params.get("q");
    const locParam = params.get("loc");
    
    if (queryParam) setSearchTerm(queryParam);
    if (locParam) setLocationTerm(locParam);
  }, [location.search]);
  
  // Handle search form submission
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Update URL with search parameters
    const params = new URLSearchParams();
    if (searchTerm) params.append("q", searchTerm);
    if (locationTerm) params.append("loc", locationTerm);
    
    navigate(`/jobs?${params.toString()}`);
  };
  
  // Handle filter toggle
  const toggleFilter = (filter: string) => {
    setActiveFilters(prev => 
      prev.includes(filter) 
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    );
  };
  
  // Sample job listings
  const jobs = [
    {
      id: 1,
      title: "Elementary School Teacher",
      company: "Delhi Public School",
      location: "New Delhi",
      type: "Full-time",
      salary: "₹40,000 - ₹50,000",
      postedDays: 1,
      description: "Looking for an experienced Elementary School Teacher to join our team. The ideal candidate should have at least 3 years of teaching experience with strong communication skills.",
      requirements: [
        "Bachelor's degree in Education or related field",
        "3+ years teaching experience",
        "Strong classroom management skills",
        "Excellent communication abilities"
      ]
    },
    {
      id: 2,
      title: "Mathematics Professor",
      company: "St. Xavier's College",
      location: "Mumbai",
      type: "Full-time",
      salary: "₹70,000 - ₹90,000",
      postedDays: 3,
      description: "St. Xavier's College is seeking a Mathematics Professor with expertise in advanced calculus and statistics to teach undergraduate and graduate courses.",
      requirements: [
        "Ph.D. in Mathematics",
        "5+ years teaching experience at college level",
        "Research background preferred",
        "Experience with curriculum development"
      ]
    },
    {
      id: 3,
      title: "School Administrator",
      company: "International School of Excellence",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹60,000 - ₹80,000",
      postedDays: 2,
      description: "International School of Excellence is looking for a dedicated School Administrator to oversee day-to-day operations and coordinate with teaching staff.",
      requirements: [
        "Master's degree in Education Administration",
        "4+ years in school administration",
        "Strong leadership qualities",
        "Experience with educational software systems"
      ]
    },
    {
      id: 4,
      title: "Science Lab Assistant",
      company: "Modern High School",
      location: "Chennai",
      type: "Part-time",
      salary: "₹20,000 - ₹25,000",
      postedDays: 5,
      description: "Modern High School needs a Science Lab Assistant to help prepare lab materials and assist teachers during practical sessions for secondary school students.",
      requirements: [
        "Bachelor's degree in Science",
        "Understanding of lab safety protocols",
        "Experience with lab equipment",
        "Good organizational skills"
      ]
    },
    {
      id: 5,
      title: "Physical Education Instructor",
      company: "Greenfield Academy",
      location: "Hyderabad",
      type: "Full-time",
      salary: "₹35,000 - ₹45,000",
      postedDays: 4,
      description: "Greenfield Academy is seeking a Physical Education Instructor to develop PE curriculum and coach school sports teams.",
      requirements: [
        "Bachelor's degree in Physical Education",
        "2+ years teaching experience",
        "Sports coaching experience",
        "First aid certification"
      ]
    },
    {
      id: 6,
      title: "College Counselor",
      company: "Career Guidance Center",
      location: "Pune",
      type: "Full-time",
      salary: "₹45,000 - ₹60,000",
      postedDays: 2,
      description: "Career Guidance Center is looking for a College Counselor to help students with college applications, career planning, and emotional support.",
      requirements: [
        "Master's degree in Counseling or Psychology",
        "3+ years experience in educational counseling",
        "Knowledge of college admission processes",
        "Strong empathetic communication skills"
      ]
    },
  ];

  // Filter jobs based on search term, location, and filters
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === "" || 
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      job.company.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesLocation = locationTerm === "" || 
      job.location.toLowerCase().includes(locationTerm.toLowerCase());
      
    const matchesType = activeFilters.length === 0 || 
      (job.type && activeFilters.some(filter => job.type.toLowerCase().includes(filter.toLowerCase())));
    
    return matchesSearch && matchesLocation && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-blue-700 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Find Your Perfect Education Job</h1>
          
          {/* Search Filters */}
          <form onSubmit={handleSearch} className="bg-white rounded-lg p-4 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Job title or keywords"
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Location"
                  className="pl-10"
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                />
              </div>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                <Search className="mr-2 h-4 w-4" />
                Search Jobs
              </Button>
            </div>
            
            <div className="flex items-center justify-between mt-4 pt-4 border-t">
              <div className="flex items-center">
                <Filter className="mr-2 h-4 w-4 text-gray-500" />
                <span className="text-sm text-gray-600">Filters:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                <Button 
                  variant={activeFilters.includes("Full-time") ? "default" : "outline"} 
                  size="sm"
                  onClick={() => toggleFilter("Full-time")}
                >
                  Full-time
                </Button>
                <Button 
                  variant={activeFilters.includes("Part-time") ? "default" : "outline"} 
                  size="sm"
                  onClick={() => toggleFilter("Part-time")}
                >
                  Part-time
                </Button>
                <Button 
                  variant={activeFilters.includes("Remote") ? "default" : "outline"} 
                  size="sm"
                  onClick={() => toggleFilter("Remote")}
                >
                  Remote
                </Button>
                <Button variant="outline" size="sm">Salary Range</Button>
                <Button variant="outline" size="sm">Experience Level</Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">
            {filteredJobs.length} Jobs Available
          </h2>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <select className="text-sm border rounded px-2 py-1">
              <option>Most Recent</option>
              <option>Salary (High to Low)</option>
              <option>Salary (Low to High)</option>
              <option>Relevance</option>
            </select>
          </div>
        </div>
        
        {/* Job Listings */}
        <div className="space-y-6">
          {filteredJobs.map((job) => (
            <Card key={job.id} className="overflow-hidden hover:shadow-md transition-shadow">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="p-6 md:w-2/3">
                    <h3 className="font-semibold text-xl mb-1">{job.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{job.company}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                        <MapPin className="h-3 w-3" /> {job.location}
                      </span>
                      <span className="text-xs flex items-center gap-1 bg-gray-100 px-2 py-1 rounded">
                        <Briefcase className="h-3 w-3" /> {job.type}
                      </span>
                      <span className="text-xs flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded">
                        {job.salary}
                      </span>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-2">Requirements:</h4>
                      <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-6 flex flex-col justify-between md:w-1/3 border-t md:border-t-0 md:border-l">
                    <div>
                      <div className="flex items-center mb-4">
                        <Clock className="h-4 w-4 mr-2 text-gray-500" />
                        <span className="text-sm text-gray-600">Posted {job.postedDays} days ago</span>
                      </div>
                      <div className="mb-6">
                        <span className="text-xs font-semibold uppercase text-gray-500">Applicants</span>
                        <div className="mt-1 h-2 w-full bg-gray-200 rounded-full">
                          <div 
                            className="h-full bg-blue-600 rounded-full" 
                            style={{width: `${Math.floor(Math.random() * 70) + 10}%`}}
                          ></div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <Button className="w-full" onClick={() => alert("Application form will be implemented soon!")}>Apply Now</Button>
                      <Button 
                        variant="outline" 
                        className="w-full"
                        onClick={() => alert("Job saved to your profile!")}
                      >
                        Save Job
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <nav className="inline-flex rounded-md shadow">
            <Button variant="outline" size="sm" className="rounded-l-md">Previous</Button>
            <Button variant="outline" size="sm" className="bg-blue-50 border-blue-300">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm" disabled>...</Button>
            <Button variant="outline" size="sm">8</Button>
            <Button variant="outline" size="sm">9</Button>
            <Button variant="outline" size="sm">10</Button>
            <Button variant="outline" size="sm" className="rounded-r-md">Next</Button>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
