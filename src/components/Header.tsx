
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, ChevronDown, Phone, Mail, X } from "lucide-react";

// Company logo
import CompanyLogo from "./CompanyLogo";

interface HeaderProps {
  scrolled?: boolean;
}

const Header = ({
  scrolled = false
}: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [foundationDropdownOpen, setFoundationDropdownOpen] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const location = useLocation();
  const isMobile = useIsMobile();
  const foundationDropdownRef = useRef<HTMLDivElement>(null);
  const productsDropdownRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setFoundationDropdownOpen(false);
    setProductsDropdownOpen(false);
  }, [location]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Type cast event.target to HTMLElement to use closest method
      const target = event.target as HTMLElement;
      
      if (foundationDropdownRef.current && 
          !foundationDropdownRef.current.contains(target) &&
          !target.closest('[data-dropdown="foundation"]')) {
        setFoundationDropdownOpen(false);
      }
      
      if (productsDropdownRef.current && 
          !productsDropdownRef.current.contains(target) &&
          !target.closest('[data-dropdown="products"]')) {
        setProductsDropdownOpen(false);
      }
      
      // Close mobile menu when clicking outside
      if (isMenuOpen && 
          headerRef.current && 
          !headerRef.current.contains(target)) {
        setIsMenuOpen(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Function to handle navigation and scroll to top
  const handleNavigation = () => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  };

  // Improved function to handle navigation with smooth scrolling to sections
  const handleNavigationWithHash = (hashPath: string) => {
    const path = hashPath.split('#')[0];
    const hash = hashPath.includes('#') ? hashPath.split('#')[1] : '';
    
    if (location.pathname === path && hash) {
      // We're on the same page, just scroll to the section
      const element = document.getElementById(hash);
      if (element) {
        // Add offset to account for the fixed header
        const offset = isMobile ? 120 : 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        // Close mobile menu if open
        setIsMenuOpen(false);
        setFoundationDropdownOpen(false);
        setProductsDropdownOpen(false);
      }
    } else {
      // Different page, navigate first
      // The scrolling will be handled by useEffect in the destination page
      handleNavigation();
    }
  };

  // Toggle foundation dropdown
  const toggleFoundationDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setFoundationDropdownOpen(!foundationDropdownOpen);
    // Close the other dropdown when opening this one
    if (!foundationDropdownOpen && productsDropdownOpen) {
      setProductsDropdownOpen(false);
    }
  };

  // Toggle products dropdown
  const toggleProductsDropdown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    setProductsDropdownOpen(!productsDropdownOpen);
    // Close the other dropdown when opening this one
    if (!productsDropdownOpen && foundationDropdownOpen) {
      setFoundationDropdownOpen(false);
    }
  };

  // Foundation submenu items
  const foundationItems = [{
    label: "Our History",
    path: "/foundation#legacy"
  }, {
    label: "Mission & Vision",
    path: "/foundation#foundation"
  }, {
    label: "Leadership Team",
    path: "/foundation#maheshwari-wires"
  }];

  // Products submenu items
  const productItems = [{
    label: "Wire Products",
    path: "/products#edm-wire"
  }, {
    label: "Special Alloys",
    path: "/products#brazing-wire"
  }, {
    label: "Custom Solutions",
    path: "/products#copper-extrusions"
  }];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 w-full flex flex-col" ref={headerRef}>
      {/* Top Info Bar */}
      <div className="bg-[#14274E] text-white py-2 px-4 hidden sm:block">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div>
            <p className="font-light">Precision Engineered Wire Solutions Since 1982</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="tel:+911234567890" className="flex items-center hover:text-gray-300 transition-colors">
              <Phone className="h-3.5 w-3.5 mr-1" />
              <span>+91 1234 567 890</span>
            </a>
            <a href="mailto:info@maheshwariwires.com" className="flex items-center hover:text-gray-300 transition-colors">
              <Mail className="h-3.5 w-3.5 mr-1" />
              <span>info@maheshwariwires.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={cn(
        "transition-all duration-300 w-full bg-white shadow-md",
        scrolled ? "py-2" : "py-3",
        "box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1)"
      )}>
        <div className="container mx-auto flex items-center justify-between px-4">
          <Link to="/" className="flex items-center" onClick={handleNavigation}>
            <CompanyLogo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link to="/" className={cn("px-4 py-2 rounded-md font-medium transition-colors", isActive("/") ? "bg-[#E8F0FE] text-[#1E2D5C]" : "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80 hover:font-semibold")} onClick={handleNavigation}>
              Home
            </Link>

            {/* Foundation Dropdown */}
            <div className="relative" ref={foundationDropdownRef}>
              <button 
                data-dropdown="foundation"
                className={cn("px-4 py-2 rounded-md font-medium transition-colors flex items-center", 
                  isActive("/foundation") || foundationDropdownOpen ? 
                  "bg-[#E8F0FE] text-[#1E2D5C]" : 
                  "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80 hover:font-semibold"
                )} 
                onClick={toggleFoundationDropdown}
              >
                <span>Foundation</span>
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", foundationDropdownOpen && "transform rotate-180")} />
              </button>

              {foundationDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link to="/foundation" className="block w-full text-left px-4 py-2 text-[#1E2D5C] hover:bg-[#E8F0FE] transition-colors" onClick={() => {
                    handleNavigation();
                    setFoundationDropdownOpen(false);
                  }}>
                    Overview
                  </Link>
                  {foundationItems.map(item => (
                    <Link key={item.label} to={item.path} className="block w-full text-left px-4 py-2 text-[#1E2D5C] hover:bg-[#E8F0FE] transition-colors" onClick={() => {
                      handleNavigationWithHash(item.path);
                      setFoundationDropdownOpen(false);
                    }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Products Dropdown */}
            <div className="relative" ref={productsDropdownRef}>
              <button 
                data-dropdown="products"
                className={cn("px-4 py-2 rounded-md font-medium transition-colors flex items-center", 
                  isActive("/products") || productsDropdownOpen ? 
                  "bg-[#E8F0FE] text-[#1E2D5C]" : 
                  "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80 hover:font-semibold"
                )} 
                onClick={toggleProductsDropdown}
              >
                <span>Products</span>
                <ChevronDown className={cn("ml-1 h-4 w-4 transition-transform", productsDropdownOpen && "transform rotate-180")} />
              </button>

              {productsDropdownOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg py-1 z-50">
                  <Link to="/products" className="block w-full text-left px-4 py-2 text-[#1E2D5C] hover:bg-[#E8F0FE] transition-colors" onClick={() => {
                    handleNavigation();
                    setProductsDropdownOpen(false);
                  }}>
                    All Products
                  </Link>
                  {productItems.map(item => (
                    <Link key={item.label} to={item.path} className="block w-full text-left px-4 py-2 text-[#1E2D5C] hover:bg-[#E8F0FE] transition-colors" onClick={() => {
                      handleNavigationWithHash(item.path);
                      setProductsDropdownOpen(false);
                    }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Infrastructure */}
            <Link to="/infrastructure" className={cn("px-4 py-2 rounded-md font-medium transition-colors", isActive("/infrastructure") ? "bg-[#E8F0FE] text-[#1E2D5C]" : "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80 hover:font-semibold")} onClick={handleNavigation}>
              Infrastructure
            </Link>

            {/* Connect */}
            <Link to="/connect" className={cn("px-4 py-2 rounded-md font-medium transition-colors", isActive("/connect") ? "bg-[#E8F0FE] text-[#1E2D5C]" : "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80 hover:font-semibold")} onClick={handleNavigation}>
              Connect
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className="h-5 w-5 text-[#1E2D5C]" />
            ) : (
              <Menu className="h-5 w-5 text-[#1E2D5C]" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bg-white shadow-md py-2 animate-fade-in max-h-[calc(100vh-60px)] overflow-y-auto z-50">
          <div className="container mx-auto flex flex-col space-y-1 px-4">
            <Link to="/" className={cn("px-3 py-2.5 rounded-md font-medium text-sm transition-colors", isActive("/") ? "bg-[#E8F0FE] text-[#1E2D5C]" : "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80")} onClick={() => {
              setIsMenuOpen(false);
              handleNavigation();
            }}>
              Home
            </Link>
            
            {/* Mobile Foundation Dropdown */}
            <div className="border-t border-gray-100">
              <button 
                className={cn(
                  "w-full flex justify-between items-center px-3 py-2.5 rounded-md font-medium text-sm transition-colors", 
                  isActive("/foundation") ? "bg-[#E8F0FE] text-[#1E2D5C]" : "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80"
                )} 
                onClick={toggleFoundationDropdown}
              >
                <span>Foundation</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", foundationDropdownOpen && "transform rotate-180")} />
              </button>
              
              {foundationDropdownOpen && (
                <div className="pl-2 mt-1 border-l-2 border-[#E8F0FE] ml-3 bg-[#F7F7F7] rounded-md">
                  <Link to="/foundation" className="block px-3 py-2 text-sm text-[#1E2D5C] hover:bg-[#E8F0FE] rounded-md transition-colors" onClick={() => {
                    setIsMenuOpen(false);
                    handleNavigation();
                  }}>
                    Overview
                  </Link>
                  {foundationItems.map(item => (
                    <Link key={item.label} to={item.path} className="block px-3 py-2 text-sm text-[#1E2D5C] hover:bg-[#E8F0FE] rounded-md transition-colors" onClick={() => {
                      setIsMenuOpen(false);
                      handleNavigationWithHash(item.path);
                    }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Mobile Products Dropdown */}
            <div className="border-t border-gray-100">
              <button 
                className={cn(
                  "w-full flex justify-between items-center px-3 py-2.5 rounded-md font-medium text-sm transition-colors", 
                  isActive("/products") ? "bg-[#E8F0FE] text-[#1E2D5C]" : "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80"
                )} 
                onClick={toggleProductsDropdown}
              >
                <span>Products</span>
                <ChevronDown className={cn("h-4 w-4 transition-transform", productsDropdownOpen && "transform rotate-180")} />
              </button>
              
              {productsDropdownOpen && (
                <div className="pl-2 mt-1 border-l-2 border-[#E8F0FE] ml-3 bg-[#F7F7F7] rounded-md">
                  <Link to="/products" className="block px-3 py-2 text-sm text-[#1E2D5C] hover:bg-[#E8F0FE] rounded-md transition-colors" onClick={() => {
                    setIsMenuOpen(false);
                    handleNavigation();
                  }}>
                    All Products
                  </Link>
                  {productItems.map(item => (
                    <Link key={item.label} to={item.path} className="block px-3 py-2 text-sm text-[#1E2D5C] hover:bg-[#E8F0FE] rounded-md transition-colors" onClick={() => {
                      setIsMenuOpen(false);
                      handleNavigationWithHash(item.path);
                    }}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <Link to="/infrastructure" className={cn("px-3 py-2.5 rounded-md font-medium text-sm transition-colors border-t border-gray-100", isActive("/infrastructure") ? "bg-[#E8F0FE] text-[#1E2D5C]" : "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80")} onClick={() => {
              setIsMenuOpen(false);
              handleNavigation();
            }}>
              Infrastructure
            </Link>
            
            <Link to="/connect" className={cn("px-3 py-2.5 rounded-md font-medium text-sm transition-colors border-t border-gray-100", isActive("/connect") ? "bg-[#E8F0FE] text-[#1E2D5C]" : "text-[#1E2D5C] hover:bg-[#E8F0FE] hover:text-[#1E2D5C]/80")} onClick={() => {
              setIsMenuOpen(false);
              handleNavigation();
            }}>
              Connect
            </Link>
            
            <div className="border-t border-gray-100 pt-2 pb-1">
              <a href="tel:+911234567890" className="flex items-center px-3 py-2 text-sm text-[#1E2D5C] hover:bg-[#E8F0FE] rounded-md transition-colors">
                <Phone className="h-3.5 w-3.5 mr-2" />
                <span>+91 1234 567 890</span>
              </a>
              <a href="mailto:info@maheshwariwires.com" className="flex items-center px-3 py-2 text-sm text-[#1E2D5C] hover:bg-[#E8F0FE] rounded-md transition-colors">
                <Mail className="h-3.5 w-3.5 mr-2" />
                <span>info@maheshwariwires.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
