# 🩺 MediCare — Modern Healthcare for Everyone

MediCare is a full-stack healthcare appointment platform that connects patients with doctors for seamless booking, management, and payment — built with a patient-facing web app, a doctor/admin dashboard, and a secure Node.js backend.


## ✨ Features

- 🔐 **Secure Authentication** — Patient and doctor sign-in/sign-up powered by Clerk
- 📅 **Appointment Booking** — Search doctors by specialization, pick a slot, and book instantly
- 💳 **Online & Cash Payments** — Integrated payment gateway for secure online transactions, with cash-on-visit support
- 🧑‍⚕️ **Doctor Management** — Doctors can manage their profile, availability, and appointments
- 🛠️ **Admin Dashboard** — Full control panel to manage doctors, patients, appointments, and view platform stats
- 📊 **Real-Time Stats** — Revenue, appointment counts, and recent activity at a glance
- 🔄 **Reschedule & Cancel** — Patients and admins can update or cancel bookings with status tracking
- 📱 **Responsive UI** — Works smoothly across desktop and mobile devices

---

## 🏗️ Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- Axios

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- Clerk (Authentication)
- Payment Gateway Integration (Stripe)

**Admin Panel**
- React-based dashboard for doctor & appointment management

---

## 📁 Project Structure

```
medicare-healthcare-system/
├── frontend/     # Patient-facing React application
├── admin/        # Admin & doctor dashboard
├── backend/      # Express REST API, database models, controllers
└── .gitignore
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Clerk account (for authentication keys)
- Payment gateway account (Stripe or Razorpay) for online payments

### 1. Clone the repository
```bash
git clone https://github.com/ashishranjan0711/medicare-healthcare-system.git
cd medicare-healthcare-system
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file inside `backend/` (never commit this file — it's already git-ignored):
```env
MONGODB_URI=your_mongodb_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
FRONTEND_URL=http://localhost:5173
PORT=4000
```

Run the backend:
```bash
npm run server
```

### 3. Frontend Setup
```bash
cd ../frontend
npm install
npm run dev
```

### 4. Admin Panel Setup
```bash
cd ../admin
npm install
npm run dev
```

By default the app runs at:
- Frontend: `http://localhost:5173`
- Admin Panel: `http://localhost:5174`
- Backend API: `http://localhost:4000`

---

## 🔑 Environment Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB connection string |
| `CLERK_SECRET_KEY` | Clerk backend secret key |
| `CLERK_PUBLISHABLE_KEY` | Clerk frontend publishable key |
| `STRIPE_SECRET_KEY` | Payment gateway secret key |
| `FRONTEND_URL` | Base URL of the frontend (used for payment redirects) |
| `PORT` | Backend server port |

> ⚠️ Never commit your `.env` file. Use `.env.example` as a template for required variables.

---

## 📸 Screenshots

_Add screenshots or a demo GIF here once your UI is ready — this section makes the repo far more engaging for visitors._

---

## 🗺️ Roadmap

- [ ] Email/SMS appointment reminders
- [ ] Doctor video consultation
- [ ] Multi-language support
- [ ] Patient medical history & prescriptions

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 👤 Author

**Ashish Ranjan**
[GitHub](https://github.com/ashishranjan0711)

---

<p align="center">Made with ❤️ for accessible, modern healthcare</p>
