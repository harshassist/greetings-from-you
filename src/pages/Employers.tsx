
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { FileText, Users, Briefcase, Award } from "lucide-react";
import { Link } from "react-router-dom";

const Employers = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Find the Perfect Educators for Your Institution
            </h1>
            <p className="text-lg mb-8 opacity-90">
              Connect with qualified educators and streamline your recruitment process with EduAssist's powerful employer tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-100 font-medium">
                Post a Job
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white bg-blue-800 hover:bg-blue-700 font-medium">
                View Our Plans
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduAssist?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-blue-100 p-3 rounded-full mb-4">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Qualified Candidates</h3>
                  <p className="text-gray-500">
                    Access a curated pool of qualified education professionals ready for their next opportunity.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-purple-100 p-3 rounded-full mb-4">
                    <FileText className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Easy Job Posting</h3>
                  <p className="text-gray-500">
                    Create and manage job postings with our intuitive interface designed for educational institutions.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 p-3 rounded-full mb-4">
                    <Briefcase className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Application Management</h3>
                  <p className="text-gray-500">
                    Easily review applications, schedule interviews, and manage your entire recruitment process.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 p-3 rounded-full mb-4">
                    <Award className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Support</h3>
                  <p className="text-gray-500">
                    Get dedicated support from our team to help you find the perfect candidates for your institution.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Flexible Plans for Every Institution</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Choose the perfect plan for your recruitment needs, from small schools to large universities.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-t-4 border-gray-400">
              <CardHeader className="text-center pb-2">
                <h3 className="text-xl font-bold">Basic</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">5 Job Postings</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Basic Candidate Search</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">30-day Job Visibility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-gray-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Email Support</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Choose Basic</Button>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-purple-500 shadow-lg relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white text-xs px-3 py-1 rounded-full">Popular</div>
              <CardHeader className="text-center pb-2">
                <h3 className="text-xl font-bold">Premium</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$199</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">15 Job Postings</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Advanced Candidate Search</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">60-day Job Visibility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Priority Support</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-purple-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Featured Listings</span>
                  </li>
                </ul>
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Choose Premium</Button>
              </CardContent>
            </Card>
            
            <Card className="border-t-4 border-blue-500">
              <CardHeader className="text-center pb-2">
                <h3 className="text-xl font-bold">Enterprise</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$399</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Unlimited Job Postings</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Premium Candidate Search</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">90-day Job Visibility</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Dedicated Account Manager</span>
                  </li>
                  <li className="flex items-center">
                    <div className="bg-blue-100 p-1 rounded-full mr-2">
                      <svg className="h-3 w-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    </div>
                    <span className="text-sm">Custom Branding</span>
                  </li>
                </ul>
                <Button variant="outline" className="w-full">Contact Sales</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call To Action */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Recruiting?</h2>
            <p className="mb-8">Join thousands of educational institutions that trust EduAssist for their staffing needs.</p>
            <Link to="/signup">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Create Your Employer Account
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Employers;
