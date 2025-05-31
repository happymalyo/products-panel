import React from 'react';
import { ProductList } from './components/ProductList';
import { CreateProduct } from './components/CreateProduct';
import { ProductProvider } from './context/ProductContext';
import { commonStyles } from './styles/common';
import { spacing, colors } from './styles/theme';

const styles = {
  container: {
    ...commonStyles.container,
    color: colors.text.primary,
    backgroundColor: colors.background,
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gap: spacing.xl,
    alignItems: 'start',
  },
  title: {
    color: colors.text.primary,
    marginBottom: spacing.lg,
  }
};

const App: React.FC = () => {
  return (
    <ProductProvider>
      <div style={styles.container}>
        <h1 style={styles.title}>Product Management</h1>
        <div style={styles.content}>
          <CreateProduct />
          <ProductList />
        </div>
      </div>
    </ProductProvider>
  );
};

export default App;
