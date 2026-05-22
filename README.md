# 🐾 PawNest - Pet Adoption & Care Platform

PawNest is a modern, full-stack pet adoption platform designed to connect passionate animal lovers with pets in need of a forever home. The platform streamlines the adoption process, allows users to list pets for adoption, and manage their requests through a personalized dashboard.

## 🔗 Live URL
🌐 **Live Site:** [https://pawnest-project.vercel.app](https://pawnest-project.vercel.app) *

---

## 🎯 Purpose
The primary purpose of PawNest is to bridge the gap between pet shelters/owners and potential adopters. Finding a pet and tracking adoption statuses is often unorganized. PawNest provides a centralized, user-friendly, and secure environment to browse pets based on advanced filtering, submit adoption applications, and securely manage adoption requests, making pet adoption transparent and accessible to everyone.

---

## ✨ Features

- **Advanced Search & Multi-Criteria Filtering:** Users can effortlessly search for pets by name, filter dynamically by species (Dog, Cat, Bird, Rabbit), and sort listings based on adoption fees (High to Low / Low to High) in real-time.
- **Robust Authentication via Better-Auth:** Integrated with `Better-Auth` to support seamless and secure client-side and server-side user authentication, ensuring a customized profile experience.
- **Dynamic Pet Details & Quick Adoption Form:** Each pet has a dedicated dynamic details page displaying critical metrics like health, vaccination status, age, and location, combined with an instant adoption application form.
- **Personalized Light-Themed Dashboard:** A dedicated, clutter-free dashboard customized with a professional light gray design (`bg-gray-100`) where users can monitor total, pending, approved, or rejected adoption requests without layout gaps.
- **Secure Custom REST API Backend:** Powered by Express.js and MongoDB to safely query data using robust features like regex searching, MongoDB ObjectId translation fallback, and safe state management.

---

## 📦 NPM Packages Used

### Frontend (Next.js)
- `next` - React framework for production-grade server-side rendering and routing.
- `react` & `react-dom` - Core user interface rendering engine.
- `better-auth` - Next-generation authentication management client.
- `lucide-react` - Minimalist, beautiful, and consistent icon packs.
- `react-icons` - Flexible icon repository wrapping popular design frameworks.
- `@heroui/react` - Specialized, accessible UI components for fast interface scaffolding.
- `tailwindcss` - Utility-first CSS framework for custom professional styling.

### Backend (Express.js)
- `express` - Minimalist and flexible Node.js web application framework.
- `mongodb` - Official MongoDB driver for robust database operations and aggregation.
- `dotenv` - Environment variable management for API keys and database URIs.
- `cors` - Middleware to enable Cross-Origin Resource Sharing safely across development localhosts.

---

## 🛠️ Technologies Stacked

- **Frontend:** HTML5, CSS3, JavaScript (ES6+), React.js, Next.js (App Router)
- **Styling:** Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Better-Auth, JSON Web Tokens (JWT)

---

## 🚀 Getting Started

### Prerequisites
Make sure you have **Node.js** and **MongoDB** installed on your local machine.

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/nayem0087/pawnest-project]