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

## Setup Options

You can run this application in two ways:
1. Using Docker (recommended for production-like environment)
2. Local development setup (recommended for development)

### Option 1: Docker Setup

#### Prerequisites
1. Install Docker:
   ```bash
   # Ubuntu/Debian
   sudo apt-get update
   sudo apt-get install docker.io

   # macOS (using Homebrew)
   brew install docker

   # Windows
   # Download Docker Desktop from https://www.docker.com/products/docker-desktop
   ```

2. Install Docker Compose:
   ```bash
   # Ubuntu/Debian
   sudo apt-get install docker-compose

   # macOS (using Homebrew)
   brew install docker-compose

   # Windows
   # Docker Compose comes with Docker Desktop
   ```

#### Running with Docker

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
   - Frontend: http://localhost:4001
   - Backend API: http://localhost:4000

#### Useful Docker Commands
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

- Remove all containers and volumes:
  ```bash
  docker-compose down -v
  ```

### Option 2: Local Development Setup

#### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

#### Backend Setup

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

#### Frontend Setup

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

## Environment Variables

### Local Development
Create `frontend/.env`:
```env
VITE_NODE_ENV=development
VITE_API_DEV_URL=http://localhost:3001
VITE_API_PROD_URL=http://localhost:4000
```

### Docker Development
Environment variables are handled through docker-compose.yml

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
  
   ``` 