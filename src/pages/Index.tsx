import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  // Categories for job browsing
  const categories = [
    { name: "Teaching & Faculty", icon: "🎓" },
    { name: "K-12 Education", icon: "📚" },
    { name: "Administration", icon: "🏫" },
    { name: "Finance", icon: "💼" },
    { name: "Support", icon: "🤝" },
  ];

  // Featured jobs
  const featuredJobs = [
    {
      title: "Science Teacher",
      company: "Delhi Public School",
      location: "New Delhi",
      type: "Full-time",
      salary: "₹45,000 - ₹60,000",
      postedDays: 2,
    },
    {
      title: "University Professor - Computer Science",
      company: "Bangalore University",
      location: "Bangalore",
      type: "Full-time",
      salary: "₹75,000 - ₹95,000",
      postedDays: 5,
    },
    {
      title: "School Principal",
      company: "Green Valley International",
      location: "Mumbai",
      type: "Full-time",
      salary: "₹95,000 - ₹1,20,000",
      postedDays: 3,
    },
    {
      title: "Educational Counselor",
      company: "Career Pathways",
      location: "Chennai",
      type: "Part-time",
      salary: "₹25,000 - ₹35,000",
      postedDays: 1,
    },
    {
      title: "School Coordinator",
      company: "Vidya International",
      location: "Hyderabad",
      type: "Full-time", 
      salary: "₹40,000 - ₹55,000",
      postedDays: 4,
    },
    {
      title: "E-Learning Developer",
      company: "EdTech Solutions",
      location: "Pune",
      type: "Remote",
      salary: "₹55,000 - ₹70,000",
      postedDays: 2,
    }
  ];

  // How it works steps
  const howItWorks = [
    {
      title: "Create Your Profile",
      description: "Create an account and build your profile with your qualifications, experiences, and skills to stand out.",
      icon: "1",
    },
    {
      title: "Discover Opportunities",
      description: "Explore job positions from educational institutions across the country that match your expertise and preferences.",
      icon: "2",
    },
    {
      title: "Apply & Connect",
      description: "Apply to positions with a single click and connect directly with educational institutions hiring for roles.",
      icon: "3",
    },
  ];

  // Why choose EduAssist features
  const features = [
    {
      title: "Education Focused",
      description: "A platform built solely for education jobs - schools, colleges, universities, and educational startups.",
    },
    {
      title: "Quality Opportunities",
      description: "Verified institutions and quality job listings curated specifically for the education sector.",
    },
    {
      title: "Privacy & Security",
      description: "Your data security is our priority. Your profile is only visible to employers you apply to.",
    },
    {
      title: "Career Advancement",
      description: "Access resources designed to enhance your resume, interview, and networking skills.",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
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
              <Button 
                size="lg" 
                className="bg-white text-blue-700 hover:bg-gray-100 text-base font-medium px-8 py-2 h-auto"
              >
                For Job Seekers
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-blue-600 text-base font-medium px-8 py-2 h-auto"
              >
                For Employers
              </Button>
            </div>

            {/* Search Bar */}
            <div className="bg-blue-800/50 rounded-lg p-6 max-w-3xl mx-auto">
              <h3 className="text-white font-medium mb-4 text-xl">Find Your Next Opportunity</h3>
              <div className="flex flex-col md:flex-row gap-3">
                <Input 
                  placeholder="Job title, keywords, etc." 
                  className="bg-white text-gray-900 border-0 h-11 text-base" 
                />
                <Input 
                  placeholder="City, state, or remote" 
                  className="bg-white text-gray-900 border-0 h-11 text-base" 
                />
                <Button 
                  className="bg-purple-600 hover:bg-purple-700 text-white h-11 px-6 text-base font-medium"
                >
                  Search
                </Button>
              </div>
            </div>

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

      {/* Categories Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Browse by Category</h2>
          <p className="text-gray-500 text-center mb-10">Find opportunities in your specialized education field</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
            {categories.map((category, index) => (
              <Link key={index} to={`/jobs?category=${category.name}`} className="group">
                <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all border border-gray-100">
                  <div className="text-3xl mb-3">{category.icon}</div>
                  <p className="text-sm text-gray-700 font-medium group-hover:text-blue-600">{category.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Jobs</h2>
            <Link to="/jobs" className="text-blue-600 hover:underline">View all jobs</Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredJobs.map((job, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="p-4 bg-gray-50 flex items-center">
                    <div className="bg-blue-100 text-blue-600 rounded-md h-12 w-12 flex items-center justify-center text-lg font-bold mr-3">
                      {job.title.charAt(0)}
                    </div>
                    <div>
                      <h3 className="font-medium text-lg">{job.title}</h3>
                      <p className="text-gray-500 text-sm">{job.company}</p>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.location}</span>
                      <span className="text-xs bg-gray-100 px-2 py-1 rounded">{job.type}</span>
                      <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded">{job.salary}</span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <p className="text-xs text-gray-500">{job.postedDays} days ago</p>
                      <Button variant="default" size="sm">Apply</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline">Browse All Jobs</Button>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">How EduAssist Works</h2>
          <p className="text-gray-500 text-center mb-12">Finding the right job in education has never been easier</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {howItWorks.map((step, index) => (
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

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Why Choose EduAssist for Your Education Career?</h2>
          <p className="text-gray-500 mb-10">We're more than just a job portal - we're a specialized platform built specifically for the education sector in India.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-6 w-6 rounded-full border-2 border-blue-600 flex items-center justify-center text-blue-600">✓</div>
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <Button className="bg-blue-600 hover:bg-blue-700">Create Your Account</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Find Your Dream Education Career?</h2>
          <p className="mb-8 opacity-90">Join thousands of educators who have found their perfect job through EduAssist!</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-700 hover:bg-gray-100">Find Jobs</Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-purple-600">Post a Job</Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-bold mb-4">EduAssist</h3>
              <p className="mb-4 text-sm">Connecting qualified educators with top educational institutions across India.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="hover:text-white">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19.7,3H4.3C3.582,3,3,3.582,3,4.3v15.4C3,20.418,3.582,21,4.3,21h15.4c0.718,0,1.3-0.582,1.3-1.3V4.3 C21,3.582,20.418,3,19.7,3z M8.339,18.338H5.667v-8.59h2.672V18.338z M7.004,8.574c-0.857,0-1.549-0.694-1.549-1.548 c0-0.855,0.691-1.548,1.549-1.548c0.854,0,1.547,0.694,1.547,1.548C8.551,7.881,7.858,8.574,7.004,8.574z M18.339,18.338h-2.669 v-4.177c0-0.996-0.017-2.278-1.387-2.278c-1.389,0-1.601,1.086-1.601,2.206v4.249h-2.667v-8.59h2.559v1.174h0.037 c0.356-0.675,1.227-1.387,2.526-1.387c2.703,0,3.203,1.779,3.203,4.092V18.338z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">For Job Seekers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Browse Jobs</a></li>
                <li><a href="#" className="hover:text-white">Create Profile</a></li>
                <li><a href="#" className="hover:text-white">Job Alerts</a></li>
                <li><a href="#" className="hover:text-white">Career Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">For Employers</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white">Post a Job</a></li>
                <li><a href="#" className="hover:text-white">Browse Resumes</a></li>
                <li><a href="#" className="hover:text-white">Pricing Plans</a></li>
                <li><a href="#" className="hover:text-white">Employer Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm">
                <li>support@eduassist.com</li>
                <li>+91 9876543210</li>
                <li>Bangalore, India</li>
                <li>
                  <Button size="sm" variant="secondary" className="mt-2">Contact Support</Button>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm">© 2025 EduAssist. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-xs">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms</a>
              <a href="#" className="hover:text-white">Cookie Policy</a>
              <a href="#" className="hover:text-white">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
