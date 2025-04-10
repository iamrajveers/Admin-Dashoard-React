import { useParams, Link } from "react-router-dom";
import Header from "../../components/common/Header";

const ProductDetailsPage = () => {
  const { id } = useParams();

  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title={`Product Details - ID: ${id}`} />

      <main className="max-w-3xl mx-auto py-6 px-4 lg:px-8">
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 text-white">
          <h2 className="text-xl font-semibold mb-4">Product #{id}</h2>
          <p className="mb-2">Name: Sample Product {id}</p>
          <p className="mb-2">Price: $99.99</p>
          <p className="mb-2">Stock: 25 units</p>
          <p className="mb-4">Category: Electronics</p>

          <Link to="/products" className="text-indigo-400 hover:underline">
            ← Back to Products
          </Link>
        </div>
      </main>
    </div>
  );
};

export default ProductDetailsPage;
