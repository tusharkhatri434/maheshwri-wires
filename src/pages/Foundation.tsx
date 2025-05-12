
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Foundation = () => {
  const location = useLocation();
  const { hash } = location;
  
  // Scroll to the specific section when hash changes
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Add offset for header
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
  }, [hash]);

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management" },
    { name: "ISO 14001:2015", description: "Environmental Stewardship" },
    { name: "ISO 45001:2018", description: "Occupational Health & Safety" },
    { name: "Defence Production Approvals", description: "Strategic supply lines" }
  ];

  const clients = [
    "Defense Research & Development Organisation (DRDO)",
    "Indian Space Research Organisation (ISRO)",
    "Bhabha Atomic Research Centre (BARC)",
    "Premier private and public sector engineering firms",
    "Specialised OEM's in India and overseas"
  ];

  return (
    <div className="flex flex-col">
      <HeroSection 
        title="Our Foundation" 
        subtitle="A Heritage of Precision, A Future of Progress" 
        backgroundImage="/lovable-uploads/142fd561-dbb6-43e6-b4ca-fdc12e70122b.png"
        className="min-h-[50vh]"
      />

      {/* Legacy Section */}
      <section id="our-history" className="section scroll-mt-24">
        <div className="container">
          <SectionHeading 
            title="A Heritage of Precision, A Future of Progress" 
            subtitle="Founded in the early 1980s, the Maheshwari name has become synonymous with trust and metallurgical excellence." 
          />
          
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div className="mb-8 md:mb-0">
              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/83a90580-258d-48c7-9cc5-3677eef7f48f.png" 
                  alt="Maheshwari Legacy"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Founded in the early 1980s, the Maheshwari name has become synonymous with trust and metallurgical excellence. What began as a modest initiative has grown into a multi-generational enterprise serving India's most critical sectors — from defense to deep science.
              </p>
              <p className="text-gray-600 mb-6">
                Over 40 years later, our legacy is not just in the wires we produce, but in the industries we empower.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Foundation Section */}
      <section id="mission-vision" className="section bg-gray-50 scroll-mt-24">
        <div className="container">
          <SectionHeading 
            title="Where It All Began" 
            subtitle="Our journey began with Maheshwari Industrial Corporation in 1982" 
          />
          
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Our journey began with Maheshwari Industrial Corporation in 1982 — a pioneering step into the world of non-ferrous metal solutions. It was a time when precision manufacturing in India was still taking shape.
              </p>
              <p className="text-gray-600 mb-6">
                Through relentless learning, attention to detail, and a commitment to quality, this humble venture laid the bedrock for what Maheshwari Wires would eventually become.
              </p>
              <p className="text-gray-600">
                From copper conductors to custom wires, we listened, adapted, and innovated — always ahead of the curve, always driven by purpose.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/033e88f3-a322-4187-b61b-6eb0bf8c8ea3.png" 
                  alt="Maheshwari Industrial Corporation"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Maheshwari Wires Today */}
      <section id="leadership-team" className="section scroll-mt-24">
        <div className="container">
          <SectionHeading 
            title="From a Vision to a Vertically Integrated Force" 
            subtitle="Combining traditional values with cutting-edge technology" 
          />
          
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              With the formal incorporation of Maheshwari Wires Pvt. Ltd., we transformed our philosophy into a scalable operation — combining traditional values with cutting-edge technology. Over time, our facility in Meerut, India, evolved into a fully integrated manufacturing hub with in-house R&D, testing, and customisation capabilities.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Today, we cater to highly specialised requirements from national research labs, aerospace assemblies, and high-precision industrial users — with wires that meet global standards, yet carry a distinctly Indian soul.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-3xl font-bold text-brand-blue mb-2">30+</h4>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-3xl font-bold text-brand-blue mb-2">1000+</h4>
                <p className="text-gray-600">Satisfied Clients</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-3xl font-bold text-brand-blue mb-2">40+</h4>
                <p className="text-gray-600">Years of Excellence</p>
              </div>
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="text-3xl font-bold text-brand-blue mb-2">50+</h4>
                <p className="text-gray-600">Wire Specializations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="company-information" className="section bg-brand-blue text-white scroll-mt-24">
        <div className="container">
          <SectionHeading 
            title="Crafting Performance at Scale" 
            subtitle="At Maheshwari Wires, capability isn't just about machines — it's about mindset" 
            className="text-white"
            textColor="text-white"
          />
          
          <div className="max-w-3xl mx-auto mb-10">
            <p className="text-white/90 mb-6">
              At Maheshwari Wires, capability isn't just about machines — it's about mindset. Our facility is equipped to deliver everything from micron-level EDM wires to custom-coated welding solutions, while our metallurgical expertise enables us to co-create wire compositions for niche applications.
            </p>
            <p className="text-white/90 mb-8">
              From drawing and annealing to surface coating and tensile calibration — every step is optimized in-house.
            </p>
          </div>
          
          <div className="text-center">
            <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue font-semibold">
              <Link to="/infrastructure">Explore Our Infrastructure</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Clientele Section */}
      <section id="quality-policy" className="section scroll-mt-24">
        <div className="container">
          <SectionHeading 
            title="Trusted by the Nation's Finest" 
            subtitle="Our wires are used where failure is not an option" 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto">
            {clients.map((client, index) => (
              <div key={index} className="flex items-start">
                <ShieldCheck className="h-6 w-6 mr-3 text-brand-blue shrink-0 mt-1" />
                <span className="text-gray-700">{client}</span>
              </div>
            ))}
          </div>
          
          <p className="text-center text-gray-600 mt-10 max-w-3xl mx-auto">
            What binds our clients to us is not just what we deliver — but how we deliver it: with consistency, clarity, and care.
          </p>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="section bg-gray-50 scroll-mt-24">
        <div className="container">
          <SectionHeading 
            title="Compliance You Can Trust" 
            subtitle="We believe that process integrity drives product integrity" 
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center">
                <div className="h-16 w-16 mx-auto mb-4 flex items-center justify-center bg-brand-blue/10 rounded-full">
                  <span className="text-brand-blue font-bold">{cert.name.split(' ')[0]}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-10 bg-white p-6 rounded-lg">
            <p className="text-center text-gray-600">
              Our systems are certified for quality, environmental, and safety benchmarks, ensuring that every product we deliver meets the highest standards of excellence and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* Make in India Movement */}
      <section id="make-in-india" className="section bg-brand-blue scroll-mt-24">
        <div className="container">
          <div className="md:grid md:grid-cols-2 items-center gap-12">
            <div className="mb-8 md:mb-0">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img 
                  src="/lovable-uploads/19c6f558-7312-4632-ba04-cd22fc7609c3.png" 
                  alt="Make in India"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Proudly Made in India. Built for the World.</h2>
              <p className="text-white/90 mb-6">
                We are active contributors to India's self-reliance journey — committed to indigenous production, skill-building, and innovation. Our products carry the strength of Indian manufacturing with global vision, and proudly align with the Make in India initiative.
              </p>
              <p className="text-white/90 mb-8">
                For us, it's not just about business — it's about nation-building, one wire at a time.
              </p>
              <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue font-semibold">
                <Link to="/products">Explore Our Product Range</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Foundation;
