import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
interface HeroSectionProps {
  title: string;
  subtitle?: string;
  backgroundImage: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}
const HeroSection = ({
  title,
  subtitle,
  backgroundImage,
  buttonText = "Explore More",
  buttonLink = "/products",
  className
}: HeroSectionProps) => {
  return <section style={{
    backgroundImage: `linear-gradient(to right, rgba(10,29,80,0.85), rgba(10,29,80,0.65)), url(${backgroundImage})`
  }} className="py-[150px] bg-blue-950">
      <div className="container mx-auto px-4 py-0 rounded-md bg-transparent">
        <div className="max-w-3xl animate-fade-in bg-transparent">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-orbitron lg:text-5xl">
            {title}
          </h1>
          {subtitle && <p className="text-xl text-white/90 mb-8 max-w-2xl font-montserrat md:text-xl">
              {subtitle}
            </p>}
          {buttonText && buttonLink && <Button asChild className="bg-brand-gold hover:bg-brand-gold/90 text-brand-blue px-8 py-6 text-base font-semibold">
              <Link to={buttonLink}>{buttonText}</Link>
            </Button>}
        </div>
      </div>
    </section>;
};
export default HeroSection;