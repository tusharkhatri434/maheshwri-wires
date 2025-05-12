
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Infrastructure = () => {
  const manufacturingProcessSteps = [
    {
      title: "Raw Material Selection",
      description: "Sourcing high-quality materials from certified vendors."
    },
    {
      title: "In-House Testing",
      description: "Rigorous testing to ensure material meets specifications."
    },
    {
      title: "Melting & Alloying",
      description: "Precision melting and alloying when required."
    },
    {
      title: "Casting/Extruding",
      description: "Formation of initial wire dimensions."
    },
    {
      title: "Drawing (Multi-Stage)",
      description: "Japanese technology for precise dimensional accuracy."
    },
    {
      title: "Annealing",
      description: "Heat treatment for optimal mechanical properties."
    },
    {
      title: "Surface Treatment",
      description: "Application of specialized coatings for enhanced performance."
    },
    {
      title: "Final Calibration",
      description: "Ensuring exact specifications are met."
    },
    {
      title: "QC Inspection",
      description: "100% quality verification."
    },
    {
      title: "Packaging & Dispatch",
      description: "Secure packaging and efficient logistics."
    }
  ];

  const rawMaterialsList = [
    "Oxygen-free high conductivity (OFHC) copper",
    "High-purity aluminium alloys",
    "Specialty metals and modifiers for brazing and welding",
    "Coating-grade zinc and brass",
    "Technical-grade resins, filters, and minerals"
  ];

  const japaneseIntegrationBenefits = [
    "Superior dimensional tolerance",
    "Uniform surface finish",
    "Enhanced conductivity and mechanical strength",
    "Reduced variability batch-to-batch"
  ];

  return (
    <div className="flex flex-col">
      <HeroSection 
        title="State-of-the-Art Wire Manufacturing. Built to Global Standards." 
        subtitle="At Maheshwari Wires Pvt. Ltd., infrastructure is more than machines — it's a complete ecosystem of precision, process control, and people. From sourcing to shipping, every stage reflects our commitment to excellence."
        backgroundImage="/lovable-uploads/142fd561-dbb6-43e6-b4ca-fdc12e70122b.png"
        className="min-h-[50vh]"
      />

      {/* Japanese Technology Integration */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading 
            title="Powered by Precision. Guided by Innovation." 
            subtitle="Japanese Technology Integration"
          />
          
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div className="mb-8 md:mb-0">
              <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png" 
                  alt="Japanese Technology Integration"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                We have adopted key Japanese manufacturing technologies to bring unmatched accuracy and finish 
                to our wire products. From continuous wire drawing systems to multi-stage annealing and 
                micro-plating processes, our setup reflects the finest practices of modern metallurgy.
              </p>
              <p className="text-gray-600 mb-6">
                This integration ensures:
              </p>
              <ul className="space-y-4">
                {japaneseIntegrationBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-blue/20 text-brand-blue flex-shrink-0 mr-3 flex items-center justify-center mt-1">
                      <span className="block h-2 w-2 rounded-full bg-brand-blue"></span>
                    </span>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600 mt-6">
                By blending traditional Indian craftsmanship with world-class machinery, we create wires that deliver 
                reliability across critical applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Raw Materials Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading 
            title="Quality Starts at the Core" 
            subtitle="Raw Materials Excellence"
          />
          
          <div className="md:grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 mb-6">
                Great wires begin with great inputs. We procure high-purity, certified raw materials from globally 
                trusted suppliers. Every batch undergoes chemical and mechanical testing before entering the production 
                line, ensuring consistency, traceability, and compliance with international standards.
              </p>
              <p className="text-gray-600 mb-4">
                We work with:
              </p>
              <ul className="space-y-4 mb-6">
                {rawMaterialsList.map((material, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block h-5 w-5 rounded-full bg-brand-blue/20 text-brand-blue flex-shrink-0 mr-3 flex items-center justify-center mt-1">
                      <span className="block h-2 w-2 rounded-full bg-brand-blue"></span>
                    </span>
                    <span className="text-gray-700">{material}</span>
                  </li>
                ))}
              </ul>
              <p className="text-gray-600">
                Every element is chosen with purpose — to meet your performance needs.
              </p>
            </div>
            <div className="mt-8 md:mt-0">
              <div className="aspect-square overflow-hidden rounded-lg shadow-lg">
                <img 
                  src="/lovable-uploads/033e88f3-a322-4187-b61b-6eb0bf8c8ea3.png" 
                  alt="Raw Materials Quality"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Chart */}
      <section className="section">
        <div className="container">
          <SectionHeading 
            title="From Metal to Mastery – Our Process" 
            subtitle="Manufacturing Excellence"
          />
          
          <p className="text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            We follow a fully in-house, quality-controlled manufacturing process designed to deliver 
            high-performance wires every time. Each stage is optimized for output efficiency, material integrity, 
            and precision control.
          </p>
          
          <div className="relative">
            {/* Process Steps for desktop */}
            <div className="hidden lg:block">
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0"></div>
              <div className="grid grid-cols-5 gap-2">
                {manufacturingProcessSteps.slice(0, 5).map((step, index) => (
                  <div key={index} className="relative z-10 flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                      <span className="text-white font-bold">{index + 1}</span>
                    </div>
                    <h4 className="text-center font-semibold text-brand-blue mb-2">{step.title}</h4>
                    <p className="text-center text-xs text-gray-500">{step.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-16 grid grid-cols-5 gap-2">
                <div className="col-start-1 col-end-6 h-1 bg-gray-200"></div>
              </div>
              <div className="grid grid-cols-5 gap-2">
                {manufacturingProcessSteps.slice(5, 10).map((step, index) => (
                  <div key={index + 5} className="relative z-10 flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-brand-blue flex items-center justify-center mb-4">
                      <span className="text-white font-bold">{index + 6}</span>
                    </div>
                    <h4 className="text-center font-semibold text-brand-blue mb-2">{step.title}</h4>
                    <p className="text-center text-xs text-gray-500">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Process Steps for tablet */}
            <div className="hidden md:block lg:hidden">
              <div className="absolute top-0 bottom-0 left-6 w-1 bg-gray-200 z-0"></div>
              <div className="space-y-8">
                {manufacturingProcessSteps.map((step, index) => (
                  <div key={index} className="relative z-10 flex">
                    <div className="h-10 w-10 rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center mr-4">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-blue mb-1">{step.title}</h4>
                      <p className="text-sm text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Process Steps for mobile */}
            <div className="md:hidden">
              <div className="absolute top-0 bottom-0 left-6 w-1 bg-gray-200 z-0"></div>
              <div className="space-y-8">
                {manufacturingProcessSteps.map((step, index) => (
                  <div key={index} className="relative z-10 flex">
                    <div className="h-8 w-8 rounded-full bg-brand-blue flex-shrink-0 flex items-center justify-center mr-3">
                      <span className="text-white font-bold text-xs">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-brand-blue mb-1 text-sm">{step.title}</h4>
                      <p className="text-xs text-gray-500">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-brand-blue text-white py-16">
        <div className="container text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Want a closer look into our process or a custom production solution?</h2>
          <Button asChild size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue px-8 py-6 text-base font-semibold">
            <Link to="/connect">
              Contact Our Technical Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
