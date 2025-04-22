
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Briefcase, List, Book, Mail, Menu } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-purple-600">EduAssist</span>
        </Link>
        
        {/* Main Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/jobs" className="flex items-center gap-2 text-gray-600 hover:text-purple-600">
            <Briefcase className="w-4 h-4" />
            Find Jobs
          </Link>
          <Link to="/categories" className="flex items-center gap-2 text-gray-600 hover:text-purple-600">
            <List className="w-4 h-4" />
            Job Categories
          </Link>
          <Link to="/blog" className="flex items-center gap-2 text-gray-600 hover:text-purple-600">
            <Book className="w-4 h-4" />
            Blog
          </Link>
          <Link to="/contact" className="flex items-center gap-2 text-gray-600 hover:text-purple-600">
            <Mail className="w-4 h-4" />
            Contact Us
          </Link>
        </div>
        
        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
            Sign In
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Sign Up
          </Button>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white">
            Post a Job
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-b border-gray-200">
          <div className="flex flex-col space-y-3">
            <Link to="/jobs" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 py-2">
              <Briefcase className="w-4 h-4" />
              Find Jobs
            </Link>
            <Link to="/categories" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 py-2">
              <List className="w-4 h-4" />
              Job Categories
            </Link>
            <Link to="/blog" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 py-2">
              <Book className="w-4 h-4" />
              Blog
            </Link>
            <Link to="/contact" className="flex items-center gap-2 text-gray-600 hover:text-purple-600 py-2">
              <Mail className="w-4 h-4" />
              Contact Us
            </Link>
          </div>
          <div className="flex flex-col space-y-3 mt-4">
            <Button variant="outline" className="border-purple-600 text-purple-600 w-full justify-center">
              Sign In
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full justify-center">
              Sign Up
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white w-full justify-center">
              Post a Job
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
