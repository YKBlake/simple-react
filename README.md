
# 💳 spring-react: Full-Stack ATM App (React + Spring Boot)

## 📦 Project Summary

This is a full-stack ATM simulator demonstrating the integration of a modern React + Vite frontend with a Kotlin Spring Boot backend. Users can perform basic ATM functions through a responsive web interface.

## ✨ Features

- 🔐 User login and authority system
- 💳 View account balance
- ➕ Deposit money
- ➖ Withdraw money
- ⚙️ Spring Boot + Kotlin backend with REST API
- ⚡ React 19 + Vite frontend with TypeScript

## 🛠️ Tech Stack

| Layer    | Technology                     |
|----------|--------------------------------|
| Frontend | React 19, TypeScript, Vite     |
| Backend  | Spring Boot, Kotlin            |
| Build    | Maven, Vite                    |
| Tools    | ESLint, Type-safe DTOs         |

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YKBlake/spring-react.git
cd spring-react
```

### 2. Run the Backend

Ensure Java 17+ and Maven are installed.

```bash
./mvnw spring-boot:run
```

Backend will start at: `http://localhost:8080`

### 3. Run the Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at: `http://localhost:5173`

## 🔗 API Endpoints

| Method | Endpoint         | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/account`   | Get account info        |
| POST   | `/api/deposit`   | Deposit money           |
| POST   | `/api/withdraw`  | Withdraw money          |
| POST   | `/api/login`     | Authenticate user       |

## 📁 Project Structure

```
spring-react
├── frontend/              → React UI
│   ├── index.html
│   ├── vite.config.ts     → Builds to backend static
│   └── src/
│       └── App.tsx        → ATM UI logic
│
├── src/main/kotlin/
│   ├── com.ykb.app.react
│       ├── data/
│       │   ├── model/      → Account, Role, etc.
│       │   ├── dao/        → DAO pattern interfaces
│       │   └── repo/       → Spring JPA Repositories
│       ├── services/       → Business logic
│       └── Application.kt  → Spring Boot entrypoint
```

## 📜 License

MIT License.
