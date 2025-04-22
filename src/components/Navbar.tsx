
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <span className="text-xl font-bold text-blue-700">EduAssist</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/jobs" className="text-gray-600 hover:text-blue-700">Browse Jobs</Link>
          <Link to="/companies" className="text-gray-600 hover:text-blue-700">Companies</Link>
          <Link to="/resources" className="text-gray-600 hover:text-blue-700">Resources</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-700">About Us</Link>
        </div>
        
        {/* Authentication Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="border-gray-300">Log In</Button>
          <Button className="bg-blue-600 hover:bg-blue-700">Sign Up</Button>
          <Button variant="outline" className="border-gray-300">Post Job</Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 border-b border-gray-200">
          <div className="flex flex-col space-y-3">
            <Link to="/jobs" className="text-gray-600 py-2 hover:text-blue-700">Browse Jobs</Link>
            <Link to="/companies" className="text-gray-600 py-2 hover:text-blue-700">Companies</Link>
            <Link to="/resources" className="text-gray-600 py-2 hover:text-blue-700">Resources</Link>
            <Link to="/about" className="text-gray-600 py-2 hover:text-blue-700">About Us</Link>
          </div>
          <div className="flex flex-col space-y-3 mt-4">
            <Button variant="outline" className="border-gray-300 w-full justify-center">Log In</Button>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full justify-center">Sign Up</Button>
            <Button variant="outline" className="border-gray-300 w-full justify-center">Post Job</Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
