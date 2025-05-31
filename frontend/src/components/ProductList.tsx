import React, { useEffect } from 'react';
import { useProducts } from '../hooks/useProducts';
import { commonStyles } from '../styles/common';
import { colors, spacing } from '../styles/theme';

const styles = {
  productList: {
    ...commonStyles.card,
    marginTop: spacing.lg,
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: spacing.md,
  },
  table: {
    ...commonStyles.table,
  },
  actions: {
    display: 'flex',
    gap: spacing.sm,
  },
  deleteButton: {
    ...commonStyles.button.base,
    ...commonStyles.button.danger,
    padding: `${spacing.xs} ${spacing.sm}`,
  },
  noProducts: {
    textAlign: 'center' as const,
    padding: spacing.lg,
    color: colors.text.secondary,
  },
  loading: {
    textAlign: 'center' as const,
    padding: spacing.lg,
    color: colors.text.secondary,
  },
  error: {
    textAlign: 'center' as const,
    padding: spacing.lg,
    color: colors.error,
  },
};

export const ProductList: React.FC = () => {
  const { products, loading, error, fetchProducts, deleteProduct } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  if (loading) {
    return <div style={styles.loading}>Loading products...</div>;
  }

  if (error) {
    return <div style={styles.error}>{error}</div>;
  }

  if (!products.length) {
    return <div style={styles.noProducts}>No products found</div>;
  }

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      try {
        await deleteProduct(id);
      } catch (err) {
        // Error is handled by the hook
      }
    }
  };

  return (
    <div style={styles.productList}>
      <div style={styles.header}>
        <h2>Products</h2>
      </div>
      <table style={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              <td>
                <div style={styles.actions}>
                  <button
                    style={styles.deleteButton}
                    onClick={() => handleDelete(product.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}; 