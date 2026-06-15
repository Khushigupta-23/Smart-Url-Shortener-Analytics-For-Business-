# Smart-Url-Shortener-Analytics
Smart URL Shortener &amp; Analytics Platform is a full-stack **MERN SaaS application** that allows users to shorten long URLs, create custom aliases, generate QR codes, and track detailed analytics such as clicks, devices, browsers, operating systems, and location insights.

---

## 📌 Features

* 🔗 URL Shortening with random code generator
* ✏️ Custom alias support
* ⏳ Expiry date for links
* 📊 Advanced analytics dashboard
* 👤 User authentication (JWT + bcrypt)
* 📱 QR code generation & download
* 🔍 Search, filter, and sort URLs
* 📈 Click tracking (total + unique clicks)
* 🧠 Device, browser, OS tracking
* 🌍 Location-based analytics
* ⚡ Responsive UI (Mobile / Tablet / Desktop)

---

## 🛠️ Tech Stack

**Frontend:**

* React.js
* Tailwind CSS
* React Router
* Axios

**Backend:**

* Node.js
* Express.js

**Database:**

* MongoDB
* Mongoose

**Authentication:**

* JWT
* bcrypt

**Tools:**

* Git & GitHub
* Postman
* VS Code

---

## 🏗️ Project Architecture

* Frontend (React) → UI + API calls
* Backend (Express) → REST APIs + business logic
* Database (MongoDB) → Stores users, URLs, analytics
* JWT Middleware → Secures protected routes
* Analytics Engine → Tracks clicks & user behavior

---

## 🔐 Authentication Flow

1. User registers / logs in
2. Password is hashed using bcrypt
3. JWT token is generated
4. Token stored in frontend (localStorage)
5. Protected routes validated using middleware

---

## 🔁 URL Redirection Flow

1. User opens short URL
2. Backend finds original URL
3. Click data is recorded
4. Device/browser/OS info captured
5. User redirected to original link

---

## 📊 Analytics Flow

* Every click is logged
* Unique + total clicks tracked
* Device, browser, OS detected
* Timestamp stored
* Data used for dashboard charts

---

## 📁 Folder Structure

* `/frontend` → React application
* `/backend` → Express server
* `/models` → MongoDB schemas
* `/routes` → API endpoints
* `/controllers` → Business logic
* `/middleware` → Auth & validation
* `/utils` → Helper functions

---

## 🚀 Future Improvements

* Role-based access (Admin/User)
* Email verification system
* Advanced graph analytics
* Rate limiting & security layers
* Custom domain support

---

## 👨‍💻 Author

Built as a **MERN Stack Portfolio Project** to demonstrate real-world SaaS development skills.

---

## ⭐ Purpose

This project is designed for:

* Interview preparation
* Full-stack portfolio showcase
* Understanding production-level MERN architecture

---
