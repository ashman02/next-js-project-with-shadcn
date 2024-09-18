# Next.js Project with ShadCN UI

## Overview

This is a simple Next.js application that includes basic authentication using ShadCN UI for styling. It uses Zustand for state management.

## Features

- **Login Page**: Accessible at `/login`. You can log in with the following credentials:
  - **Username**: `user`
  - **Password**: `password`
  
- **Protected Page**: The `/example` page is protected and can only be accessed when logged in. If you're not logged in, you'll be redirected to `/login`.

## How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/chobar02/next-js-project-with-shadcn.git
2. Install dependencies:
   ```bash
   npm install
3. Start the development server:
   ```bash
   npm run dev
4. Visit http://localhost:3000 in your browser

## Tech Stack

- Next.js
- ShadCN UI
- Zustand
- Typescript
