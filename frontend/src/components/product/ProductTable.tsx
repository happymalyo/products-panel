import React, { useEffect } from 'react';
import { useProducts } from '../../context/ProductContext';

export const ProductTable: React.FC = () => {
  const { products, loading, error, deleteProduct, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div className="text-center py-4 text-gray-600">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-600">{error}</div>;
  }

  if (!products.length) {
    return <div className="text-center py-4 text-gray-600">No products found</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Products List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4">{product.description}</td>
                  <td className="px-6 py-4 whitespace-nowrap">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => {
                        if (window.confirm('Are you sure you want to delete this product?')) {
                          deleteProduct(product.id);
                        }
                      }}
                      className="text-red-600 hover:text-red-900 font-medium"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}; 