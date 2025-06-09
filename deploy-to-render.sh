#!/bin/bash

# Qitchen Application - Render.com Deployment Setup Script

echo "🚀 Qitchen Application - Render.com Deployment"
echo "=============================================="
echo ""

echo "📋 Repository: https://github.com/JakubStankiewicz1/Qitchen.git"
echo "🗄️  Database: Already configured on Render.com"
echo ""

echo "📝 Required Environment Variables for Render Services:"
echo ""

echo "🔧 BACKEND SERVICE (Web Service):"
echo "DATABASE_URL=postgresql://qitchen_user:aGaiRu2otTjSzjqs8jYyLz69zONYJORE@dpg-d13h8bm3jp1c73bsc3rg-a.oregon-postgres.render.com/qitchen"
echo "SPRING_PROFILES_ACTIVE=production"
echo "EMAIL_USERNAME=your-gmail@gmail.com"
echo "EMAIL_PASSWORD=your-app-password"
echo "FRONTEND_URL=https://qitchen-frontend.onrender.com"
echo "BACKEND_URL=https://qitchen-backend.onrender.com"
echo "ADMIN_URL=https://qitchen-admin.onrender.com"
echo "PORT=8080"
echo ""

echo "🌐 FRONTEND SERVICE (Static Site):"
echo "VITE_API_URL=https://qitchen-backend.onrender.com"
echo ""

echo "👑 ADMIN SERVICE (Static Site):"
echo "VITE_API_URL=https://qitchen-backend.onrender.com"
echo ""

echo "📋 Deployment Steps:"
echo "1. Go to https://render.com and sign in"
echo "2. Create New Web Service (for backend)"
echo "3. Connect GitHub repository: JakubStankiewicz1/Qitchen"
echo "4. Configure backend service with Dockerfile in /backend"
echo "5. Set all backend environment variables"
echo "6. Create New Static Site (for frontend)"
echo "7. Set root directory to 'frontend' and build command 'npm install && npm run build'"
echo "8. Create New Static Site (for admin)"
echo "9. Set root directory to 'admin' and build command 'npm install && npm run build'"
echo "10. Update URLs in environment variables once services are deployed"
echo ""

echo "✅ Status: Code is ready for deployment!"
echo "🔗 GitHub: https://github.com/JakubStankiewicz1/Qitchen.git"
