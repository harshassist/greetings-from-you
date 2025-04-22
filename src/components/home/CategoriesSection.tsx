
import { Link } from "react-router-dom";
import { categories } from "@/types/categories";
import { CategoryNav } from "@/components/CategoryNav/CategoryNav";

const CategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Browse by Category</h2>
        <p className="text-gray-500 text-center mb-10">Find opportunities in your specialized education field</p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {categories.map((category, index) => (
            <Link key={index} to={`/jobs?category=${category.name}`} className="group">
              <div className="bg-white rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-all border border-gray-100">
                <div className="text-3xl mb-3">{category.icon}</div>
                <p className="text-sm text-gray-700 font-medium group-hover:text-blue-600">{category.name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
