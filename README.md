# Fullstack App

This project is intended to practice and maintain my programming skills by building a full-stack application using modern technologies and best practices.

## Overview

This repository contains a full-stack application built to explore:

- Scalable architecture
- Modern frontend and backend development patterns
- Clean code practices
- CI/CD and testing strategies

## Features

Responsive UI using modern frontend frameworks

- RESTful API integration
- Authentication & Authorization
- Modular folder structure
- ESLint and Prettier for code consistency
- Unit testing for reliability

## Tech Stack

- Frontend: React, Zustand, React Query, React Hook Form, Joi, TailwindCSS
- Backend: Node.js, Express, Joi, Jsonwebtoken, Bcrypt
- Database: PostgreSQL
- Testing: Jest, React Testing Library and Cypress
- Build Tools: Vite / Turbopack
- Version Control: Git & GitHub

## Getting Started
### Prerequisites
- Node.js (>= 18)
- npm or pnpm or yarn
- PostgreSQL

### Installation
```
# Clone the repository
git clone https://github.com/yourusername/fullstack-app.git

# Navigate to the project folder
cd backend-app
// or
cd web-app

# Install dependencies
npm install
```

### Run the App
```
# Start development server
npm run dev

# Run backend server
npm run start
```


### Folder Structure
```
fullstack-app/
├── backend-app/                    # Backend (Express.js) source code
│   ├── features/                   # Feature-based modules (e.g., auth, products, cart)
│   │   ├── auth/                   # Authentication feature (controller, routes, repository)
│   │   ├── products/               # Product feature (CRUD, listing)
│   │   ├── orders/                 # Order feature (checkout, order history)
│   │   └── users/                  # User profile, roles
│   ├── config/                     # Configuration files
│   │   ├── db.js                   # Database connection (MongoDB / PostgreSQL)
│   │   ├── env.js                  # Environment variables loader
│   │   └── constants.js            # App constants (status codes, messages)
│   ├── middleware/                 # Middlewares for Express
│   │   ├── auth.middleware.js      # JWT validation
│   │   ├── error.middleware.js     # Error handling
│   │   └── cors.middleware.js      # CORS setup
│   ├── utils/                      # Utility/helper functions
│   │   ├── handle-response.js      # Standard API response formatter
│   │   ├── toSlug.js               # Convert string to slug
│   │   └── logger.js               # Logger (winston or custom)
│   ├── routes.js                   # Main route entry point
│   └── app.js                      # Express app initialization
│
├── web-app/                        # Frontend (Next.js) source code
│   ├── src/
│   │   ├── app/                    # App Router (Next.js 13+)
│   │   │   ├── layout.tsx          # Main layout
│   │   │   ├── page.tsx            # Home page
│   │   │   └── [feature]/          # Feature-based routes (e.g., /products, /cart)
│   │   ├── components/             # Reusable UI components (Button, Navbar, etc.)
│   │   ├── config/                 # App configuration
│   │   │   ├── api.ts              # API base URL setup
│   │   │   └── constants.ts        # UI constants
│   │   ├── hooks/                  # Custom React hooks
│   │   │   ├── useAuth.ts          # Authentication hook
│   │   │   ├── useCart.ts          # Cart management hook
│   │   │   └── useFetch.ts         # Data fetching helper
│   │   ├── services/               # API services
│   │   │   ├── product.service.ts  # Fetch products API
│   │   │   ├── auth.service.ts     # Login, register API
│   │   │   └── order.service.ts    # Checkout API
│   │   ├── store/                  # Global state management
│   │   │   ├── cart.store.ts       # Zustand/Redux for cart
│   │   │   └── user.store.ts       # User session
│   │   ├── types/                  # TypeScript types/interfaces
│   │   │   ├── product.ts          # Product type
│   │   │   ├── user.ts             # User type
│   │   │   └── order.ts            # Order type
│   │   ├── utils/                  # Utility/helper functions
│   │   │   ├── formatCurrency.ts   # Format price
│   │   │   └── dateHelper.ts       # Date formatter
│   │   └── styles/                 # Global and modular styles
│   │       └── globals.css         # Global CSS
│   └── next.config.js              # Next.js configuration
│
└── README.md                       # Project documentation
```

## 🔥 Why use this structure?

- Feature-based approach → Scalable for large applications.
- Configurable → Easy to switch between environments (dev, staging, prod).
- Reusable → Modular components and hooks.
- Strong typing (TypeScript) → Safer for API and UI.

## Commit Guide

We follow [Conventional Commits](https://www.conventionalcommits.org/) for clarity and automation.

- feat: Introduce a new feature
- fix: Resolve a bug
- docs: Update or add documentation
- style: Code formatting, semicolons, etc; no functional changes
- refactor: Improve existing code without changing functionality
- test: Add or update tests; no production code changes
- chore: Update build tasks, configs, etc; no production code changes

Example:
```
feat(auth): add JWT authentication
```

## Roadmap
- [ ] Set up the frontend with Next.js
- [ ] Set up the backend with Express
- [ ] Implement REST API for core features
- [ ] Add authentication (JWT)
- [ ] Add unit tests and CI/CD pipeline
- [ ] Deploy to production environment

## License

This project is for personal learning purposes and does not carry a specific license.