# 🍽️ Qitchen - Restaurant Management System

A modern, full-stack restaurant management system built with React, Spring Boot, and PostgreSQL. Features a beautiful frontend for customers to make reservations and a comprehensive admin panel for restaurant management.

## 🌟 Features

### Customer Frontend
- **Elegant Restaurant Website** - Modern, responsive design with beautiful UI
- **Online Reservation System** - Easy-to-use booking interface
- **Menu Display** - Interactive menu with detailed product information
- **Blog Section** - Restaurant news and updates
- **Contact Information** - Multiple ways to reach the restaurant
- **Real-time Availability** - Check table availability instantly

### Admin Panel
- **Secure Authentication** - JWT-based admin login system
- **Reservation Management** - View, edit, and delete reservations
- **Table Management** - Configure available tables and seating
- **Dashboard Analytics** - Overview of restaurant operations
- **Real-time Updates** - Live data synchronization

### Backend API
- **RESTful API** - Comprehensive endpoints for all operations
- **Database Management** - PostgreSQL with JPA/Hibernate
- **Email Notifications** - Automated confirmation emails
- **Security** - JWT authentication and CORS configuration
- **Production Ready** - Deployed on Render.com with automatic scaling

## 🚀 Live Demo

- **Frontend**: [https://qitchen-frontend.onrender.com](https://qitchen-frontend.onrender.com)
- **Admin Panel**: [https://qitchen-admin.onrender.com](https://qitchen-admin.onrender.com)
- **Backend API**: [https://qitchen-backend-5kql.onrender.com](https://qitchen-backend-5kql.onrender.com)

### Admin Access
- **Username**: `admin`
- **Password**: `admin`

## 🛠️ Technology Stack

### Frontend
- **React 19** - Modern UI framework
- **React Router** - Client-side routing
- **Axios** - HTTP client for API communication
- **React Toastify** - User notifications
- **CSS3** - Custom styling with responsive design
- **Vite** - Fast build tool and development server

### Admin Panel
- **React 19** - Admin interface
- **React Router** - Navigation and routing
- **Axios** - API integration
- **React Icons** - Icon library
- **React Calendar** - Date/time selection
- **Custom CSS** - Professional admin styling

### Backend
- **Spring Boot 3.4.4** - Java framework
- **Spring Security** - Authentication and authorization
- **Spring Data JPA** - Database operations
- **PostgreSQL** - Production database
- **JWT** - Token-based authentication
- **JavaMail** - Email notifications
- **Maven** - Dependency management

### DevOps & Deployment
- **Render.com** - Cloud hosting platform
- **GitHub Actions** - Automated workflows
- **Docker** - Containerization
- **Nginx** - Web server configuration

## 📁 Project Structure

```
Qitchen/
├── frontend/                 # Customer-facing React app
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── config/         # API configuration
│   │   └── assets/         # Images and static files
│   └── public/             # Static assets
├── admin/                   # Admin panel React app
│   ├── src/
│   │   ├── components/     # Admin UI components
│   │   ├── pages/         # Admin pages
│   │   └── config/        # API configuration
│   └── public/            # Static assets
├── backend/                # Spring Boot API
│   ├── src/main/java/
│   │   ├── controller/    # REST API endpoints
│   │   ├── service/       # Business logic
│   │   ├── entity/        # Database models
│   │   ├── repository/    # Data access layer
│   │   └── config/        # Configuration classes
│   └── src/main/resources/ # Application properties
└── .github/workflows/     # CI/CD automation
```

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18 or higher)
- **Java 21** (JDK)
- **Maven** (v3.6 or higher)
- **PostgreSQL** (for local development)

### Local Development Setup

#### 1. Clone the Repository
```bash
git clone https://github.com/JakubStankiewicz1/Qitchen
cd qitchen
```

#### 2. Backend Setup
```bash
cd backend

# Install dependencies
mvn clean install

# Configure database in application.properties
# Update DATABASE_URL, EMAIL_USERNAME, EMAIL_PASSWORD

# Run the application
mvn spring-boot:run
```

#### 3. Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:8081" > .env

# Start development server
npm run dev
```

#### 4. Admin Panel Setup
```bash
cd admin

# Install dependencies
npm install

# Create .env file
echo "VITE_API_URL=http://localhost:8081" > .env

# Start development server
npm run dev
```

### Environment Variables

#### Backend (.env or application.properties)
```properties
# Database
DATABASE_URL=postgresql://username:password@localhost:5432/qitchen

# Email Configuration
EMAIL_USERNAME=your-email@gmail.com
EMAIL_PASSWORD=your-app-password

# Application URLs
FRONTEND_URL=http://localhost:5173
ADMIN_URL=http://localhost:5273
BACKEND_URL=http://localhost:8081
```

#### Frontend (.env)
```env
VITE_API_URL=http://localhost:8081
```

#### Admin (.env)
```env
VITE_API_URL=http://localhost:8081
```

## 🔧 API Endpoints

### Public Endpoints
- `GET /api/reservations` - Get all reservations
- `POST /api/reservations` - Create new reservation
- `GET /api/table-types` - Get available table types
- `GET /api/restaurant` - Get restaurant information
- `POST /api/auth/login` - Admin authentication

### Protected Endpoints (Admin)
- `PUT /api/reservations/{id}` - Update reservation
- `DELETE /api/reservations/{id}` - Delete reservation
- `PUT /api/table-types/{id}` - Update table configuration
- `GET /api/reservations/stats` - Get reservation statistics

## 🎨 Key Features Implementation

### Reservation System
- **Real-time Availability Check** - Algorithm to determine optimal table combinations
- **Email Confirmations** - Automated reservation confirmations
- **Admin Management** - Full CRUD operations for reservations

### Security
- **JWT Authentication** - Secure admin panel access
- **CORS Configuration** - Cross-origin resource sharing
- **Password Hashing** - BCrypt encryption for admin passwords

### Database Design
- **Reservation Entity** - Stores booking information with confirmation tokens
- **TableType Entity** - Manages available tables and seating
- **Restaurant Entity** - Restaurant information and settings

## 🚀 Deployment

### Render.com Deployment
The application is deployed on Render.com with the following services:

1. **Backend Service** - Spring Boot API
2. **Frontend Service** - Customer website
3. **Admin Service** - Admin panel
4. **PostgreSQL Database** - Production database

### GitHub Actions
Automated workflows for keeping the backend active:
- **ping-backend.yml** - Basic server ping (every 5 minutes)
- **backend-health-check.yml** - Comprehensive health checks (every 8 minutes)
- **keep-backend-alive.yml** - API endpoint testing (every 10 minutes)
- **user-simulation.yml** - Real user activity simulation (every 12 minutes)

## 📊 Performance & Monitoring

- **Automatic Scaling** - Render.com handles traffic spikes
- **Health Checks** - Continuous monitoring of API endpoints
- **Error Handling** - Comprehensive error management
- **Loading States** - User-friendly loading indicators
- **Responsive Design** - Works on all device sizes

## 🔒 Security Features

- **JWT Token Authentication** - Secure admin access
- **CORS Protection** - Configured for specific origins
- **Input Validation** - Server-side validation for all inputs
- **SQL Injection Prevention** - JPA/Hibernate ORM protection
- **XSS Protection** - React's built-in XSS protection

## 🎯 Business Logic

### Reservation Algorithm
The system intelligently calculates optimal table combinations:
- **2-person tables** - For couples and small groups
- **4-person tables** - Standard dining groups
- **6-person tables** - Larger parties
- **10-person tables** - Special events and large groups

### Email System
- **Confirmation Emails** - Sent to customers upon booking
- **Reservation Details** - Complete booking information
- **SMTP Configuration** - Gmail SMTP for reliable delivery

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Jakub Stankiewicz**
- **GitHub**: [@JakubStankiewicz1](https://github.com/JakubStankiewicz1)
- **Email**: stankiewicz.kuba152@gmail.com

## 🙏 Acknowledgments

- **Render.com** - For reliable cloud hosting
- **Spring Boot** - For robust backend framework
- **React** - For modern frontend development
- **PostgreSQL** - For reliable database management

---

⭐ **Star this repository if you find it helpful!**

🍽️ **Qitchen** - Where technology meets culinary excellence. 