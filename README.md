# Products Panel

A full-stack TypeScript application with React frontend and Express REST API backend.

## Project Structure

```
products-panel/
├── frontend/                 # React TypeScript frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   ├── context/        # React context providers
│   │   ├── hooks/          # Custom React hooks
│   │   └── types/          # TypeScript type definitions
│   ├── Dockerfile          # Frontend Docker configuration
│   └── package.json
├── backend/                 # Node.js/Express backend application
│   ├── src/
│   │   ├── controllers/    # Route controllers
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Express middleware
│   ├── Dockerfile          # Backend Docker configuration
│   └── package.json
├── docker-compose.yml      # Docker compose configuration
└── README.md              # Project documentation
```

## Features

### Backend
- RESTful API with Express
- TypeScript for type safety
- Clean architecture with controllers
- Error handling
- CORS enabled
- Helmet for security

### Frontend
- React with TypeScript
- Custom hooks for state management
- Type-safe API integration
- Tailwind CSS for modern UI
- Responsive design
- Error handling
- Loading states
- Form validation

## Quick Start with Docker

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd products-panel
   ```

2. Build and run the containers:
   ```bash
   docker-compose up --build
   ```

3. Access the application:
   - Frontend: http://localhost
   - Backend API: http://localhost:3000

## Development Setup

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

The server will start on http://localhost:3000

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

The application will be available at http://localhost:5173

## API Endpoints

- `GET /api/products` - Get all products
- `POST /api/products` - Create a new product
- `DELETE /api/products/:id` - Delete a product by ID

## Docker Commands

- Build and start services:
  ```bash
  docker-compose up --build
  ```

- Start in detached mode:
  ```bash
  docker-compose up -d
  ```

- View logs:
  ```bash
  docker-compose logs -f
  ```

- Stop services:
  ```bash
  docker-compose down
  ```

## Technologies Used

- Backend:
  - Node.js with Express
  - TypeScript
  - Express Validator

- Frontend:
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS
  - React Context 