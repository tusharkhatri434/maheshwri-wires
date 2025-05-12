import { cn } from "@/lib/utils";
interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  id?: string;
  textColor?:string // Added id prop for anchor linking
}
const SectionHeading = ({
  title,
  subtitle,
  alignment = "center",
  className,
  textColor="text-zinc-900",
  id // Accept id for anchor purposes
}: SectionHeadingProps) => {
  return <div id={id} // Add the id attribute for anchor linking
  className={cn("mb-8 md:mb-12 px-4 sm:px-0 scroll-mt-24",
  // Added scroll-mt-24 to ensure section is not hidden under navbar
  {
    "text-left": alignment === "left",
    "text-center": alignment === "center",
    "text-right": alignment === "right"
  }, className)}>
      <h2 className={`text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4 py-[15px] md:py-[20px] ${textColor}`}>
        {title}
      </h2>
      {subtitle && <p className="text-sm sm:text-base text-yellow-500 font-semibold md:text-xl">
          {subtitle}
        </p>}
    </div>;
};
export default SectionHeading;