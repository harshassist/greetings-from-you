
import { Link } from "react-router-dom";
import { categories } from "@/types/categories";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { useState } from "react";

const CategoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <section className="py-16 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Browse by Category</h2>
        <p className="text-gray-500 text-center mb-10">Find opportunities in your specialized education field</p>
        
        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {categories.map((category, index) => (
                <CarouselItem key={category.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/4 lg:basis-1/5">
                  <div 
                    className="relative"
                    onMouseEnter={() => setActiveCategory(category.id)}
                    onMouseLeave={() => setActiveCategory(null)}
                  >
                    <div className={cn(
                      "bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all border border-gray-100",
                      activeCategory === category.id && "border-orange-500"
                    )}>
                      <div className="text-3xl mb-3">{category.icon}</div>
                      <p className="text-sm text-gray-700 font-medium group-hover:text-blue-600">{category.name}</p>
                    </div>

                    {/* Simple Subcategories Dropdown */}
                    {activeCategory === category.id && (
                      <div className="absolute left-0 z-50 w-64 md:w-[600px] bg-white shadow-lg rounded-lg p-4 mt-1"
                           style={{ top: "calc(100% + 5px)" }}>
                        <div className="grid grid-cols-2 gap-2">
                          {category.subcategories.map((subcategory, subIndex) => (
                            <Link
                              key={subIndex}
                              to={`/jobs/${subcategory.toLowerCase().replace(/\s+/g, '-')}`}
                              className="p-3 hover:bg-gray-50 rounded-md transition-colors text-gray-700 hover:text-gray-900"
                            >
                              {subcategory}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute -left-12 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute -right-12 top-1/2 -translate-y-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
