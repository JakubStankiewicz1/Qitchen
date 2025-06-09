# 🚀 Qitchen Application - Render.com Deployment Checklist

## ✅ Preparation Complete
- [x] **Java Version:** Fixed Java 23 → 21 for Docker compatibility
- [x] **Database Config:** Custom config handles Render PostgreSQL URL format
- [x] **Repository Methods:** Fixed method names (dateTime → reservationTime)  
- [x] **Environment Variables:** All hardcoded URLs replaced with env vars
- [x] **Docker Build:** Backend builds successfully
- [x] **Database Connection:** Verified connection to Render PostgreSQL
- [x] **Git Repository:** Code pushed to GitHub
- [x] **Production Config:** Environment files updated

## 📋 Deployment Steps for Render.com

### Step 1: Backend Service (Web Service)
1. Go to [Render.com](https://render.com) → Create → Web Service
2. Connect GitHub: `https://github.com/JakubStankiewicz1/Qitchen`
3. Configure:
   - **Name:** `qitchen-backend`
   - **Region:** Oregon (US West)
   - **Branch:** `main`
   - **Root Directory:** `backend`
   - **Runtime:** Docker
   - **Docker Command:** Leave empty (uses Dockerfile)
4. **Environment Variables:**
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
5. Click **Create Web Service**

### Step 2: Frontend Service (Static Site)
1. Render.com → Create → Static Site
2. Connect GitHub: `https://github.com/JakubStankiewicz1/Qitchen`
3. Configure:
   - **Name:** `qitchen-frontend`
   - **Branch:** `main`
   - **Root Directory:** `frontend`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. **Environment Variables:**
   ```
   VITE_API_URL=https://qitchen-backend.onrender.com
   ```
5. Click **Create Static Site**

### Step 3: Admin Service (Static Site)
1. Render.com → Create → Static Site
2. Connect GitHub: `https://github.com/JakubStankiewicz1/Qitchen`
3. Configure:
   - **Name:** `qitchen-admin`
   - **Branch:** `main`
   - **Root Directory:** `admin`
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
4. **Environment Variables:**
   ```
   VITE_API_URL=https://qitchen-backend.onrender.com
   ```
5. Click **Create Static Site**

## 🔧 Post-Deployment Configuration

### Update URLs (if different from defaults)
If your actual Render URLs differ from the defaults, update these environment variables:

**Backend Service:**
- `FRONTEND_URL` → actual frontend URL
- `BACKEND_URL` → actual backend URL  
- `ADMIN_URL` → actual admin URL

**Frontend & Admin Services:**
- `VITE_API_URL` → actual backend URL

### Email Configuration
Replace placeholders in backend environment variables:
- `EMAIL_USERNAME`: Your Gmail address
- `EMAIL_PASSWORD`: Gmail app password (not regular password)

## 🧪 Testing Checklist
- [ ] Backend API responds at `/api/reservations`
- [ ] Frontend loads and connects to backend
- [ ] Admin panel loads and connects to backend
- [ ] Reservation creation works end-to-end
- [ ] Email notifications are sent
- [ ] CORS allows frontend domains

## 📞 Support
- **GitHub:** https://github.com/JakubStankiewicz1/Qitchen
- **Database:** PostgreSQL on Render (already configured)
- **Issues:** Check deployment logs in Render dashboard

## 🎉 Expected Results
- **Backend:** `https://qitchen-backend.onrender.com`
- **Frontend:** `https://qitchen-frontend.onrender.com`  
- **Admin:** `https://qitchen-admin.onrender.com`

All services should be live and functional after following these steps!
