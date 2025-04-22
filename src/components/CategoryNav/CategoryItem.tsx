
import { useState, useRef, useEffect } from 'react';
import { Category } from '@/types/categories';
import { NavLink } from 'react-router-dom';
import { useClickAway } from '@/hooks/use-click-away';

interface CategoryItemProps {
  category: Category;
  isActive: boolean;
  onActivate: () => void;
  onDeactivate: () => void;
}

const CategoryItem = ({ category, isActive, onActivate, onDeactivate }: CategoryItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useClickAway(containerRef, () => {
    setIsHovered(false);
    onDeactivate();
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
    onActivate();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onDeactivate();
  };

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-colors
          ${isActive ? 'text-orange-500 border-b-2 border-orange-500' : 'text-gray-600 hover:text-gray-900'}`}
      >
        <span className="text-2xl">{category.icon}</span>
        <span className="font-medium whitespace-nowrap">{category.name}</span>
      </button>

      {isHovered && (
        <div className="absolute left-0 top-full z-50 w-screen max-w-4xl bg-white shadow-lg rounded-b-lg p-6 mt-1">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.subcategories.map((subcategory, index) => (
              <NavLink
                key={index}
                to={`/jobs/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={`https://source.unsplash.com/random/400x300?education,${index}`}
                  alt={subcategory}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/20 group-hover:from-black/80 group-hover:to-black/30 transition-colors" />
                <h3 className="absolute bottom-0 left-0 right-0 p-4 text-white font-medium text-sm">
                  {subcategory}
                </h3>
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryItem;
