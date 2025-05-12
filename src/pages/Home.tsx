import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import SectionHeading from "@/components/SectionHeading";
import ProductCard from "@/components/ProductCard";
import { Award, Factory, ShieldCheck, Star, Users, ChevronRight, TrendingUp } from "lucide-react";
const Home = () => {
  const products = [{
    title: "EDM Wires",
    image: "/lovable-uploads/033e88f3-a322-4187-b61b-6eb0bf8c8ea3.png",
    description: "For precision-cutting needs"
  }, {
    title: "Brazing & Welding Wires",
    image: "/lovable-uploads/76e9f5c2-bfdd-41fd-8447-48981ed09178.png",
    description: "Superior bond strength and thermal control"
  }, {
    title: "Copper & Aluminium Wires",
    image: "/lovable-uploads/e1e5c479-b03d-4b95-94b0-d5925c024345.png",
    description: "Pure, alloyed, and customizable"
  }, {
    title: "Coated Wires",
    image: "/lovable-uploads/2c299fa8-edd5-4d18-9333-f32ecdd5c9d9.png",
    description: "Zinc, brass, and diffused layers for specialized applications"
  }, {
    title: "Zari & Molly Wires",
    image: "/lovable-uploads/4e574527-b0ae-47a4-b06f-2f0a522be5a2.png",
    description: "Blending tradition with durability"
  }, {
    title: "Consumables",
    image: "/lovable-uploads/a05ed1e3-8bb7-43c2-a3f3-e3e33bd8ab6d.png",
    description: "Filters, rings, resins & beyond"
  }];
  const achievements = [{
    title: "Presidential Recognition",
    icon: <Award className="h-6 w-6 text-brand-gold" />
  }, {
    title: "40+ Years of Manufacturing Legacy",
    icon: <Factory className="h-6 w-6 text-brand-gold" />
  }, {
    title: "Approved Suppliers to DRDO, BARC, and ISRO",
    icon: <ShieldCheck className="h-6 w-6 text-brand-gold" />
  }, {
    title: "Make in India Pioneer",
    icon: <Star className="h-6 w-6 text-brand-gold" />
  }];
  const industries = [{
    title: "Defense & Aerospace",
    description: "For mission-critical assemblies",
    icon: <ShieldCheck className="h-8 w-8 text-brand-blue" />
  }, {
    title: "Research Institutions",
    description: "ISRO, BARC, DRDO",
    icon: <Factory className="h-8 w-8 text-brand-blue" />
  }, {
    title: "Electronics & Power",
    description: "Where conductivity meets reliability",
    icon: <TrendingUp className="h-8 w-8 text-brand-blue" />
  }, {
    title: "Automotive & EV",
    description: "Lightweight, high-performance alloy wires",
    icon: <ChevronRight className="h-8 w-8 text-brand-blue" />
  }, {
    title: "Fabrication & Manufacturing",
    description: "Welding and brazing wires built to last",
    icon: <Factory className="h-8 w-8 text-brand-blue" />
  }];
  return <div className="flex flex-col">
      {/* Hero Section with updated title */}
      <HeroSection title="Leading the Wire Evolution" subtitle="Where innovation meets metallurgy — crafting wires that empower industries, elevate performance, and define reliability." backgroundImage="/lovable-uploads/6ee12984-0671-4f3c-aa77-3720b1bbe079.png" buttonText="Explore Our Product Range" buttonLink="/products" />

      <section className="section">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-8 text-center">
              From high-precision EDM wires to customized alloy solutions, Maheshwari Wires Pvt. Ltd. has been at the forefront of India's industrial evolution for decades. 
              As trusted partners to defense agencies, premier research labs, and global OEMs, our product range is engineered for sectors where precision isn't a choice — it's a standard.
            </p>
          </div>
        </div>
      </section>

      {/* Engineered Solutions Section */}
      <section className="section relative">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{
        backgroundImage: "url('/lovable-uploads/5788123d-4c84-4f97-a97a-a3148ce33d7f.png')"
      }}></div>
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto">
            <SectionHeading title="Solutions, Not Just Supplies" />
            
            <div className="text-center">
              <p className="text-lg mb-8">
                Every wire we make solves a problem — higher conductivity, better weld strength, longer tool life, or exacting tolerances. Our in-house expertise, metallurgical insight, and ability to customize grades and coatings ensure you receive more than material — you receive measurable performance.
              </p>
              <p className="text-lg mb-8">
                Whether you're building aerospace components or powering critical infrastructure, we engineer wires that meet your challenge head-on.
              </p>
              <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue font-semibold">
                <Link to="/infrastructure">Learn About Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Range Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <SectionHeading title="A Glimpse of Our Wire Expertise" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, index) => <ProductCard key={index} title={product.title} image={product.image} description={product.description} />)}
          </div>

          <p className="text-center text-gray-600 mt-8 mb-4">Built to perform. Designed to last.</p>

          <div className="mt-8 text-center">
            <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
              <Link to="/products">View All Products</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="section bg-white">
        <div className="container">
          <SectionHeading title="Milestones That Define Us" subtitle="From our roots in 1984 to serving India's top defence and space research institutions, our journey is one of consistency, trust, and continuous upgrade." />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {achievements.map((achievement, index) => <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <div className="w-16 h-16 bg-brand-blue rounded-full flex items-center justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="font-bold text-lg text-brand-blue">{achievement.title}</h3>
              </div>)}
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-lg text-center">
            <blockquote className="text-2xl font-medium text-brand-blue italic bg-gray-300">
              "Performance starts at the core — we engineer every wire from the inside out."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section text-white bg-zinc-100">
        <div className="container">
          <SectionHeading title="Voices of Trust" subtitle="Our clients speak not only of product quality, but of professionalism, technical understanding, and delivery confidence." className="text-white" />
          
          {/* Placeholder for testimonial slider - implement actual testimonials */}
          <div className="p-8 rounded-lg my-8 bg-brand-blue">
            <p className="italic mb-4">
              "Maheshwari Wires has consistently delivered high-quality products that meet our exacting standards for aerospace applications. Their technical expertise and commitment to quality make them a valuable partner."
            </p>
            <div className="flex items-center">
              
              <div>
                <p className="font-semibold">Technical Director</p>
                <p className="text-sm text-white/80">Leading Aerospace Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve Section */}
      <section className="section">
        <div className="container">
          <SectionHeading title="Industries That Rely on Us" subtitle="We power the sectors that power nations — where precision wires are not just components, but commitments to safety, innovation, and endurance." />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12">
            {industries.map((industry, index) => <div key={index} className="flex flex-col p-6 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                <div className="mb-4 text-brand-blue">
                  {industry.icon}
                </div>
                <h3 className="font-bold text-xl text-brand-blue mb-2">{industry.title}</h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>)}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild className="bg-brand-blue hover:bg-brand-blue/90">
              <Link to="/products">Discover Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Home;