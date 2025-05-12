
import { Link } from "react-router-dom";
import CompanyLogo from "./CompanyLogo";
import { ShieldCheck } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Footer = () => {
  const location = useLocation();

  // Function to handle anchor links with smooth scrolling
  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const isAnchor = href.includes('#');
    
    if (isAnchor) {
      const path = href.split('#')[0];
      const hash = href.split('#')[1];
      
      if (location.pathname === path || (path === '' && hash)) {
        e.preventDefault();
        const element = document.getElementById(hash);
        
        if (element) {
          // Add offset to account for the fixed header
          const offset = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    }
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-200">
      <div className="container mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <CompanyLogo />
            <p className="mt-4 text-sm text-gray-600 max-w-xs">
              For over four decades, Maheshwari Industrial Corporation has pioneered the evolution of the wire manufacturing industry in India.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-[#1E2D5C]">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-[#1E2D5C] transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/foundation" className="text-gray-600 hover:text-[#1E2D5C] transition-colors text-sm">
                  Foundation
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-600 hover:text-[#1E2D5C] transition-colors text-sm">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/infrastructure" className="text-gray-600 hover:text-[#1E2D5C] transition-colors text-sm">
                  Infrastructure
                </Link>
              </li>
              <li>
                <Link to="/connect" className="text-gray-600 hover:text-[#1E2D5C] transition-colors text-sm">
                  Connect
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-[#1E2D5C]">Products</h3>
            <ul className="space-y-3">
              <li>
                <a href="/products#edm-wire" 
                   className="text-gray-600 hover:text-[#1E2D5C] transition-colors text-sm"
                   onClick={(e) => handleAnchorClick(e, '/products#edm-wire')}>
                  Wire Products
                </a>
              </li>
              <li>
                <a href="/products#brazing-wire" 
                   className="text-gray-600 hover:text-[#1E2D5C] transition-colors text-sm"
                   onClick={(e) => handleAnchorClick(e, '/products#brazing-wire')}>
                  Special Alloys
                </a>
              </li>
              <li>
                <a href="/products#copper-extrusions" 
                   className="text-gray-600 hover:text-[#1E2D5C] transition-colors text-sm"
                   onClick={(e) => handleAnchorClick(e, '/products#copper-extrusions')}>
                  Custom Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4 text-[#1E2D5C]">Contact Us</h3>
            <address className="not-italic">
              <p className="text-sm text-gray-600 mb-3">
                Maheshwari Wires
                <br />
                Industrial Area, Sector 5
                <br />
                Noida, Uttar Pradesh
                <br />
                India - 201301
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Phone:</span> +91 120 4567890
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Email:</span> info@maheshwariwires.com
              </p>
              <p className="text-sm text-gray-600 mb-3">
                <span className="font-medium">Hours:</span> 9:00 AM - 6:00 PM (Mon-Sat)
              </p>
            </address>
          </div>
        </div>

        {/* Certification Badges */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="text-center space-y-4">
            <p className="text-sm font-medium text-gray-600">Certifications & Quality Standards</p>
            <div className="flex justify-center space-x-6">
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm">
                <span className="text-xs text-center text-gray-500">ISO 9001</span>
              </div>
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm">
                <span className="text-xs text-center text-gray-500">BIS</span>
              </div>
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm">
                <span className="text-xs text-center text-gray-500">CE</span>
              </div>
              <div className="w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-sm">
                <span className="text-xs text-center text-gray-500">RoHS</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright & "Make in India" */}
        <div className="mt-8 pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-gray-600">© 2025 Maheshwari Wires. All Rights Reserved.</p>
            <div className="flex items-center space-x-2 mt-4 md:mt-0">
              <span className="text-xs text-gray-600">Proudly Made in India</span>
              <ShieldCheck className="h-5 w-5 text-[#1E2D5C]" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
