
import { cn } from '@/lib/utils';

interface ProductCardProps {
  title: string;
  image: string;
  description?: string;
  className?: string;
}

const ProductCard = ({ 
  title, 
  image, 
  description,
  className 
}: ProductCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-lg bg-white group", 
        className
      )}
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-bold text-lg text-brand-blue mb-2">{title}</h3>
        {description && (
          <p className="text-sm text-gray-600 flex-1">{description}</p>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
