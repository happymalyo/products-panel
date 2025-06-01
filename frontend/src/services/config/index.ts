export const API_URL = (import.meta.env.VITE_NODE_ENV || 'production') === 'development' 
? import.meta.env.VITE_API_DEV_URL || 'http://localhost:3001'  // Local development
  :import.meta.env.VITE_API_PROD_URL || 'http://localhost:4000'  // Docker