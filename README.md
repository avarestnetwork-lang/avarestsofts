# AvarestSoft - AI SaaS Starter Kit

A complete, ready-to-deploy SaaS platform featuring AI tools, client dashboard, and agency management features.

## 🚀 Quick Start

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Environment Setup**
   Copy `.env.example` to `.env` and fill in your API keys:
   - `GEMINI_API_KEY`: Get from [Google AI Studio](https://aistudio.google.com/)
   - `STRIPE_SECRET_KEY`: Get from [Stripe Dashboard](https://dashboard.stripe.com/)
   - `AUTH0_DOMAIN`: Get from [Auth0 Dashboard](https://manage.auth0.com/)

3. **Run Development Server**
   ```bash
   npm run dev
   ```

## 🏗️ Architecture

- **Frontend**: React + Vite + Tailwind CSS + Framer Motion
- **Backend**: Node.js + Express
- **AI**: Google Gemini (Direct frontend integration)
- **Database**: PostgreSQL (Supabase recommended)
- **Payments**: Stripe Checkout
- **Auth**: Auth0

## 📂 Folder Structure

- `server.ts`: Express server with Vite middleware
- `src/App.tsx`: Main frontend application with routing
- `src/services/gemini.ts`: AI integration service
- `src/components/`: Reusable UI components
- `src/pages/`: Application views (Dashboard, AI Tools, etc.)

## 🛠️ Deployment

### Frontend (Vercel)
Connect your GitHub repo to Vercel. It will automatically detect the Vite project.

### Backend (Railway/Render)
Deploy the same repo to Railway or Render. Ensure the `start` script is set to `node server.ts`.

### Database (Supabase)
Create a new PostgreSQL project on Supabase and paste the `DATABASE_URL` into your environment variables.

## 📄 License
MIT
