# Qitchen Application - Render.com Deployment Guide

## Overview
This guide covers deploying the Qitchen restaurant reservation application to Render.com with:
- Backend: Spring Boot (Java 21) with PostgreSQL
- Frontend: React customer application
- Admin: React admin panel

## Prerequisites ✅
- [x] Java version downgraded to 21 (compatible with Docker)
- [x] Database configuration updated for Render.com PostgreSQL URL format
- [x] Repository method names fixed (dateTime → reservationTime)
- [x] All hardcoded URLs replaced with environment variables
- [x] Docker builds working successfully
- [x] PostgreSQL database created on Render.com

## Database ✅
**Database URL:** `postgresql://qitchen_user:aGaiRu2otTjSzjqs8jYyLz69zONYJORE@dpg-d13h8bm3jp1c73bsc3rg-a.oregon-postgres.render.com/qitchen`

## Required Environment Variables

### Backend Service
```
DATABASE_URL=postgresql://qitchen_user:aGaiRu2otTjSzjqs8jYyLz69zONYJORE@dpg-d13h8bm3jp1c73bsc3rg-a.oregon-postgres.render.com/qitchen
SPRING_PROFILES_ACTIVE=production
EMAIL_USERNAME=your-gmail@gmail.com
EMAIL_PASSWORD=your-app-password
FRONTEND_URL=https://qitchen-frontend.onrender.com
BACKEND_URL=https://qitchen-backend.onrender.com
ADMIN_URL=https://qitchen-admin.onrender.com
PORT=8080
```

### Frontend Static Site
```
VITE_API_URL=https://qitchen-backend.onrender.com
```

### Admin Static Site
```
VITE_API_URL=https://qitchen-backend.onrender.com
```

## Deployment Steps

### 1. Backend Deployment (Web Service)
1. Create new Web Service on Render.com
2. Connect to GitHub repository
3. Configure:
   - **Build Command:** `./mvnw clean package -DskipTests`
   - **Start Command:** `java -jar target/backend-0.0.1-SNAPSHOT.jar`
   - **Docker:** Use Dockerfile in `/backend` directory
4. Set all environment variables listed above
5. Deploy

### 2. Frontend Deployment (Static Site)
1. Create new Static Site on Render.com
2. Connect to GitHub repository
3. Configure:
   - **Root Directory:** `frontend`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Set environment variables
5. Deploy

### 3. Admin Panel Deployment (Static Site)
1. Create new Static Site on Render.com
2. Connect to GitHub repository
3. Configure:
   - **Root Directory:** `admin`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. Set environment variables
5. Deploy

## Validation Steps
1. ✅ Backend container starts without repository errors
2. ✅ Database connection established
3. ⏳ Backend API endpoints respond correctly
4. ⏳ Frontend loads and can connect to backend
5. ⏳ Admin panel loads and can connect to backend
6. ⏳ Complete reservation flow works end-to-end

## Status
- **Backend:** Ready for deployment ✅
- **Database:** Connected and configured ✅
- **Environment Variables:** Identified and documented ✅
- **Docker Configuration:** Working ✅
- **Frontend/Admin:** Ready for deployment ✅

## Next Steps
1. Push code to GitHub repository
2. Deploy backend service to Render.com
3. Deploy frontend and admin static sites
4. Configure environment variables
5. Test complete application flow
