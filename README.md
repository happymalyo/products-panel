# Products Panel

A full-stack TypeScript application with React frontend and Express backend.

## Project Structure

```
products-panel/
├── backend/                 # Express backend application
│   ├── src/
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/        # Data models
│   │   ├── routes/        # API routes
│   │   ├── services/      # Business logic
│   │   └── types/         # TypeScript type definitions
│   ├── package.json
│   └── tsconfig.json
├── frontend/               # React frontend application
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── ProductList.tsx
│   │   │   └── CreateProduct.tsx
│   │   ├── hooks/        # Custom React hooks
│   │   │   └── useProducts.ts
│   │   ├── services/     # API services
│   │   │   └── api.ts
│   │   ├── styles/       # JSS styles
│   │   │   ├── theme.ts
│   │   │   └── common.ts
│   │   ├── types/        # TypeScript type definitions
│   │   │   └── product.ts
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
└── README.md

## Features

### Backend
- RESTful API with Express
- TypeScript for type safety
- Clean architecture with services and controllers
- Request validation
- Error handling
- Morgan for request logging
- CORS enabled
- Helmet for security

### Frontend
- React with TypeScript
- Custom hooks for state management
- Type-safe API integration
- JSS for styling
- Responsive design
- Error handling
- Loading states
- Form validation

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Git

## Setup Instructions

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The server will start on http://localhost:3001

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at http://localhost:3000

## API Endpoints

- `GET /products` - Get all products
- `POST /products` - Create a new product
- `DELETE /products/:id` - Delete a product by ID

## Styling Approach

The application uses JSS (JavaScript Style Sheets) for styling, providing:
- Type-safe styles
- Theme consistency
- Reusable style components
- No CSS-in-JS runtime overhead
- Easy style composition

Key style features:
- Consistent color palette
- Responsive layout
- Interactive elements
- Loading states
- Error states
- Clean typography

## Technologies Used

- Backend:
  - Node.js
  - Express
  - TypeScript
  - Express Validator (for request validation)

- Frontend:
  - React
  - TypeScript
  - Axios
  - React Query
  - Tailwind CSS 