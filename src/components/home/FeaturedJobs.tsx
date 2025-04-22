import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const featuredJobs = [
  {
    title: "Math Teacher",
    company: "ABC School",
    location: "Remote",
    type: "Full-time",
    salary: "$50,000 - $70,000",
    postedDays: 7
  },
  // Add more job listings as needed
];

const FeaturedJobs = () => {
  return (
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
  );
};

export default FeaturedJobs;
