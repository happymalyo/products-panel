import React, { useState } from 'react';
import { useProducts } from '../hooks/useProducts';
import { commonStyles } from '../styles/common';
import { spacing } from '../styles/theme';
import type { CreateProductDto } from '../types/product';

const styles = {
  form: {
    ...commonStyles.card,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.md,
  },
  field: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: spacing.xs,
  },
  label: {
    fontSize: '14px',
    fontWeight: 500,
  },
  input: {
    ...commonStyles.input,
  },
  button: {
    ...commonStyles.button.base,
    ...commonStyles.button.primary,
    alignSelf: 'flex-start',
  },
  error: {
    color: 'red',
    fontSize: '14px',
  },
};

const initialFormData: CreateProductDto = {
  name: '',
  description: '',
  price: 0,
};

export const CreateProduct: React.FC = () => {
  const { createProduct, fetchProducts } = useProducts();
  const [formData, setFormData] = useState<CreateProductDto>(initialFormData);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      await createProduct(formData);
      setFormData(initialFormData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to create product');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'price' ? parseFloat(value) || 0 : value,
    }));
  };

  return (
    <form style={styles.form} onSubmit={handleSubmit}>
      <h2>Create New Product</h2>
      
      <div style={styles.field}>
        <label style={styles.label} htmlFor="name">Name</label>
        <input
          style={styles.input}
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="description">Description</label>
        <input
          style={styles.input}
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      <div style={styles.field}>
        <label style={styles.label} htmlFor="price">Price</label>
        <input
          style={styles.input}
          type="number"
          id="price"
          name="price"
          value={formData.price || ''}
          onChange={handleChange}
          step="0.01"
          min="0"
          required
        />
      </div>

      {error && <div style={styles.error}>{error}</div>}

      <button type="submit" style={styles.button}>
        Create Product
      </button>
    </form>
  );
}; 