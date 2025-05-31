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
│   │   ├── services/      # API services
│   │   ├── types/        # TypeScript type definitions
│   │   └── App.tsx
│   ├── package.json
│   └── tsconfig.json
└── README.md

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