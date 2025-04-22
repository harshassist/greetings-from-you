
import { useState } from 'react';
import { Category } from '@/types/categories';
import CategoryItem from './CategoryItem';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

interface CategoryNavProps {
  categories: Category[];
}

export const CategoryNav = ({ categories }: CategoryNavProps) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div className="w-full bg-white border-b">
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex space-x-4 px-4 py-2">
          {categories.map((category) => (
            <CategoryItem
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onActivate={() => setActiveCategory(category.id)}
              onDeactivate={() => setActiveCategory(null)}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default CategoryNav;
