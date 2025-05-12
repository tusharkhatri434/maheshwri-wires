
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { toast } from "sonner";
import ProductCard from "@/components/ProductCard";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation();
  const { hash } = location;

  // Scroll to the specific product section when hash changes
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

  const products = [
    {
      id: "wire-products",
      title: "EDM Wire",
      description: "High precision EDM wires for intricate machining processes.",
      image: "/lovable-uploads/033e88f3-a322-4187-b61b-6eb0bf8c8ea3.png",
      features: [
        "Exceptional surface finish",
        "Enhanced cutting speed",
        "Low discharge wear",
        "High tensile strength",
        "Consistent quality"
      ],
      subProducts: [
        {
          name: "Plain Brass Wire",
          description: "Standard brass wire for general EDM applications.",
          specs: ["Tensile Strength: 900-1000 N/mm²", "Available sizes: 0.1 to 0.3mm"]
        },
        {
          name: "Diffused Coated Wire",
          description: "Coated wire for improved cutting performance.",
          specs: ["Tensile Strength: 900-1000 N/mm²", "Available sizes: 0.1 to 0.3mm"]
        },
        {
          name: "Zinc Diffused Coated Wire",
          description: "Zinc diffused coating for superior cutting speed.",
          specs: ["Tensile Strength: 900-1000 N/mm²", "Available sizes: 0.1 to 0.3mm"]
        },
        {
          name: "Zinc Coated Wire",
          description: "Pure zinc coating for excellent surface finish.",
          specs: ["Tensile Strength: 900-1000 N/mm²", "Available sizes: 0.1 to 0.3mm"]
        }
      ]
    },
    {
      id: "special-alloys",
      title: "Brazing Wire",
      description: "Superior joining solutions with reliable metallurgical bonds.",
      image: "/lovable-uploads/76e9f5c2-bfdd-41fd-8447-48981ed09178.png",
      features: [
        "Excellent flow characteristics",
        "Superior joint strength",
        "Low temperature options",
        "Extended shelf life",
        "Multiple alloy compositions"
      ],
      subProducts: [
        {
          name: "Induction Brazing Rings",
          description: "Pre-formed rings for efficient induction brazing processes.",
          specs: ["Available in multiple alloys", "Custom sizes available"]
        }
      ]
    },
    {
      id: "copper-wire",
      title: "Copper Wire",
      description: "Pure conductivity and quality you can trust.",
      image: "/lovable-uploads/e1e5c479-b03d-4b95-94b0-d5925c024345.png",
      features: [
        "99.9% purity options",
        "Excellent conductivity",
        "Customizable dimensions",
        "Oxygen-free options",
        "Flexible application range"
      ],
      subProducts: []
    },
    {
      id: "custom-solutions",
      title: "Welding Wire",
      description: "Consistency and strength for welding across industries.",
      image: "/lovable-uploads/a05ed1e3-8bb7-43c2-a3f3-e3e33bd8ab6d.png",
      features: [
        "Smooth wire feeding",
        "Low spatter performance",
        "Arc stability",
        "High deposition rate",
        "Minimal porosity"
      ],
      subProducts: [
        {
          name: "Copper Alloy",
          description: "Premium copper alloy welding wires for specialized applications.",
          specs: [],
          subTypes: [
            {
              name: "ErCuSiA",
              description: "Silicon bronze alloy for joining dissimilar metals."
            },
            {
              name: "ErCu",
              description: "Pure copper welding wire for high conductivity joints."
            },
            {
              name: "ErCuSnC",
              description: "Copper-tin alloy for enhanced hardness."
            },
            {
              name: "ErCuSnA",
              description: "Low-tin bronze alloy for structural applications."
            },
            {
              name: "CuAlA1",
              description: "Aluminum bronze alloy for corrosion resistance."
            },
            {
              name: "CuAlA2",
              description: "High-strength aluminum bronze for industrial applications."
            }
          ]
        },
        {
          name: "Aluminium",
          description: "High-quality aluminum welding wires for lightweight structures.",
          specs: [],
          subTypes: [
            {
              name: "4043",
              description: "Silicon aluminum alloy for general welding."
            },
            {
              name: "5357",
              description: "Magnesium aluminum alloy for high-strength applications."
            },
            {
              name: "4047",
              description: "High-silicon aluminum alloy for automotive applications."
            }
          ]
        }
      ]
    },
    {
      id: "zari-wire",
      title: "Zari Wire",
      description: "A blend of tradition and technology in decorative wires.",
      image: "/lovable-uploads/4e574527-b0ae-47a4-b06f-2f0a522be5a2.png",
      features: [
        "Tarnish resistant",
        "Consistent plating",
        "Flexible yet strong",
        "True-to-color finishing",
        "Multiple thickness options"
      ],
      subProducts: []
    },
    {
      id: "copper-extrusions",
      title: "Copper Extrusions",
      description: "Precision-engineered copper profiles for industrial applications.",
      image: "/lovable-uploads/2c299fa8-edd5-4d18-9333-f32ecdd5c9d9.png",
      features: [
        "Custom profiles",
        "High conductivity",
        "Tight tolerances",
        "Consistent quality",
        "Various alloy options"
      ],
      subProducts: []
    },
    {
      id: "molly-wire",
      title: "Molly Wire",
      description: "Tough and durable wire solutions for high-demand applications.",
      image: "/lovable-uploads/033e88f3-a322-4187-b61b-6eb0bf8c8ea3.png",
      features: [
        "High temperature resistance",
        "Corrosion resistance",
        "Superior tensile strength",
        "Thermal stability",
        "Exceptional wear resistance"
      ],
      subProducts: []
    },
    {
      id: "consumables",
      title: "Consumables",
      description: "Optimizing your production with premium consumables.",
      image: "/lovable-uploads/5788123d-4c84-4f97-a97a-a3148ce33d7f.png",
      features: [
        "EDM machine filters",
        "Dielectric resins",
        "Pickup electrodes",
        "Specialty minerals",
        "Process enhancers"
      ],
      subProducts: [
        {
          name: "Resin",
          description: "High-quality resins for EDM processes.",
          specs: ["Premium grade", "Long-lasting"]
        },
        {
          name: "Filter",
          description: "Efficient filters for maintaining dielectric fluid quality.",
          specs: ["Multiple micron ratings", "High capacity"]
        },
        {
          name: "Current Pickup",
          description: "Reliable current pickup components for EDM machines.",
          specs: ["High conductivity", "Extended lifespan"]
        },
        {
          name: "Minerals",
          description: "Specialty minerals for enhancing EDM performance.",
          specs: ["Pure grade", "Process optimized"]
        }
      ]
    }
  ];

  const downloadCatalogue = () => {
    toast.success("Thank you for your interest. A link to download the catalogue has been sent to your registered email.");
  };

  return (
    <div className="flex flex-col">
      <HeroSection 
        title="Our Product Range" 
        subtitle="Engineered for performance, crafted with precision" 
        backgroundImage="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png"
        className="min-h-[50vh]"
      />

      <section className="section">
        <div className="container">
          <SectionHeading 
            title="Product Categories" 
            subtitle="At Maheshwari Wires, we offer a comprehensive range of industrial wires and consumables engineered for unmatched performance. Explore our product lines that serve critical industries globally."
          />

          <div className="space-y-32 mt-16">
            {products.map((product, index) => (
              <div key={index} id={product.id} className="scroll-mt-24">
                <div className={`md:grid md:grid-cols-2 md:gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`mb-8 md:mb-0 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                    <div className="aspect-video overflow-hidden rounded-lg shadow-lg">
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                  <div className={index % 2 !== 0 ? 'md:order-1' : ''}>
                    <h3 className="text-2xl md:text-3xl font-bold text-brand-blue mb-4">{product.title}</h3>
                    <p className="text-gray-600 mb-6">{product.description}</p>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-4">Key Features & Benefits:</h4>
                      <ul className="space-y-3">
                        {product.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="inline-block h-5 w-5 rounded-full bg-brand-gold/20 text-brand-gold flex-shrink-0 mr-3 flex items-center justify-center">
                              <span className="block h-2 w-2 rounded-full bg-brand-gold"></span>
                            </span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Sub-products Section */}
                {product.subProducts && product.subProducts.length > 0 && (
                  <div className="mt-12">
                    <h4 className="text-xl font-semibold text-brand-blue mb-6 border-b-2 border-brand-gold/30 pb-2">
                      {product.title} - Types & Variants
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                      {product.subProducts.map((subProduct, subIdx) => (
                        <div key={subIdx} className="bg-white rounded-lg shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow">
                          <h5 className="text-lg font-semibold text-brand-blue mb-3">{subProduct.name}</h5>
                          <p className="text-gray-600 mb-4">{subProduct.description}</p>
                          {subProduct.specs && subProduct.specs.length > 0 && (
                            <div className="mt-4">
                              <h6 className="text-sm font-medium text-gray-700 mb-2">Specifications:</h6>
                              <ul className="text-sm text-gray-600 space-y-1">
                                {subProduct.specs.map((spec, specIdx) => (
                                  <li key={specIdx} className="flex items-center">
                                    <span className="h-1.5 w-1.5 rounded-full bg-brand-gold mr-2"></span>
                                    {spec}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Sub-types for complex products (like welding wire) */}
                          {subProduct.subTypes && subProduct.subTypes.length > 0 && (
                            <div className="mt-6 pt-4 border-t border-gray-100">
                              <h6 className="text-sm font-semibold text-brand-blue mb-3">Available Variants:</h6>
                              <div className="space-y-4">
                                {subProduct.subTypes.map((subType, typeIdx) => (
                                  <div key={typeIdx} className="bg-gray-50 rounded p-3">
                                    <h6 className="text-sm font-medium text-brand-blue">{subType.name}</h6>
                                    <p className="text-xs text-gray-600 mt-1">{subType.description}</p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Divider except for the last item */}
                {index < products.length - 1 && (
                  <div className="border-b border-gray-200 my-16"></div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button 
              onClick={downloadCatalogue}
              className="bg-brand-blue hover:bg-brand-blue/90 inline-flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              <span>Download Product Catalogue</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
