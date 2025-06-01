import React, { useEffect, useState } from 'react';
import { useProducts } from '../../context/ProductContext';
import { ProductModal } from './ProductModal';
import { MiniDialog } from '../common/MiniDialog';

export const ProductTable: React.FC = () => {
  const { products, loading, error, deleteProduct, fetchProducts } = useProducts();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [deleteDialog, setDeleteDialog] = useState<{ isOpen: boolean; productId: string | null }>({
    isOpen: false,
    productId: null,
  });

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const handleDeleteClick = (productId: string) => {
    setDeleteDialog({ isOpen: true, productId });
  };

  const handleDeleteConfirm = async () => {
    if (deleteDialog.productId) {
      await deleteProduct(deleteDialog.productId);
      setDeleteDialog({ isOpen: false, productId: null });
    }
  };

  if (loading) {
    return <div className="text-center py-4 text-gray-600">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-4 text-red-600">{error}</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-white rounded-lg shadow-lg border border-gray-100">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-primary-700">Products List</h2>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors duration-200 flex items-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
              Créer un nouveau Produit
            </button>
          </div>

          <div className="overflow-x-auto">
            {!products.length ? (
              <div className="text-center py-8 text-gray-500">No products found</div>
            ) : (
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-primary-50">
                  <tr>
                    <th className="px-6 py-3 text-center text-xs font-medium text-primary-700 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-primary-700 uppercase tracking-wider">Description</th>
                    <th className="px-6 py-3 text-center text-xs font-medium text-primary-700 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-primary-700 uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100">
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-primary-50 transition-colors duration-150">
                      <td className="px-6 py-4 text-center whitespace-nowrap text-gray-900">{product.name}</td>
                      <td className="px-6 py-4 text-center text-gray-700">{product.description}</td>
                      <td className="px-6 py-4 text-right whitespace-nowrap text-gray-900">${product.price.toFixed(2)}</td>
                      <td className="px-6 py-4 text-right">
                        <button
                          onClick={() => handleDeleteClick(product.id)}
                          className="text-red-600 hover:text-red-900 font-medium transition-colors duration-200"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      <ProductModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      
      <MiniDialog
        isOpen={deleteDialog.isOpen}
        onClose={() => setDeleteDialog({ isOpen: false, productId: null })}
        onConfirm={handleDeleteConfirm}
        title="Confirmer la suppression"
        message="Êtes-vous sûr de vouloir supprimer ce produit ? Cette action est irréversible."
        confirmText="Supprimer"
        cancelText="Annuler"
      />
    </div>
  );
}; 