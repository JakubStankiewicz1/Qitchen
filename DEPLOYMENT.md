# 🚀 Hosting aplikacji Qitchen na Render.com

## Przygotowanie przed deploymentem

### 1. Stwórz konto na Render.com
- Idź na https://render.com
- Zarejestruj się używając GitHub

### 2. Przygotuj repozytorium GitHub
```bash
# W folderze projektu
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/TWOJA_NAZWA/qitchen.git
git push -u origin main
```

## Deploy Backend (Spring Boot)

### 1. Stwórz Web Service na Render
- W dashboard Render kliknij "New" → "Web Service"
- Połącz z GitHub i wybierz swoje repo
- Konfiguracja:
  - **Name**: `qitchen-backend`
  - **Root Directory**: `backend`
  - **Runtime**: `Docker`
  - **Build Command**: (automatyczne z Dockerfile)
  - **Start Command**: (automatyczne z Dockerfile)

### 2. Dodaj zmienne środowiskowe
W sekcji "Environment Variables":
```
DATABASE_URL = postgresql://username:password@host:port/database
EMAIL_USERNAME = stankiewicz.kuba152@gmail.com
EMAIL_PASSWORD = ckks emfo tpqi ycag
FRONTEND_URL = https://qitchen-frontend.onrender.com
BACKEND_URL = https://qitchen-backend.onrender.com
ADMIN_URL = https://qitchen-admin.onrender.com
SPRING_PROFILES_ACTIVE = production
```

### 3. Dodaj PostgreSQL bazę danych
- Kliknij "New" → "PostgreSQL"
- Name: `qitchen-database`
- Po utworzeniu skopiuj "External Database URL" do `DATABASE_URL` w backend

## Deploy Frontend (React)

### 1. Stwórz Static Site
- Kliknij "New" → "Static Site" 
- Wybierz repo i branch
- Konfiguracja:
  - **Name**: `qitchen-frontend`
  - **Root Directory**: `frontend`
  - **Build Command**: `npm run build`
  - **Publish Directory**: `dist`

### 2. Dodaj zmienne środowiskowe
```
VITE_API_URL = https://qitchen-backend.onrender.com
```

## Deploy Admin Panel

### 1. Stwórz kolejny Static Site
- Konfiguracja:
  - **Name**: `qitchen-admin`
  - **Root Directory**: `admin`
  - **Build Command**: `npm run build`
  - **Publish Directory**: `dist`

### 2. Dodaj zmienne środowiskowe
```
VITE_API_URL = https://qitchen-backend.onrender.com
```

## Konfiguracja automatyczna

Aplikacja jest już skonfigurowana do używania zmiennych środowiskowych. CORS, URLe API i URLe emaili będą automatycznie ustawione na podstawie zmiennych środowiskowych które ustawisz na Render.

## Kosztorys Render.com (Free Tier)

### ✅ Darmowe:
- **PostgreSQL Database**: 1GB storage, 100 connections
- **Static Sites**: Unlimited bandwidth
- **Web Services**: 750 godzin miesięcznie (25 dni)

### ⚠️ Ograniczenia Free Tier:
- Backend śpi po 15 min nieaktywności (cold start ~30s)
- Baza danych ma limit 1GB
- Web service ma limit 750h/miesiąc

### 💰 Płatne plany (opcjonalnie):
- **Starter**: $7/miesiąc - bez sleep, więcej zasobów
- **PostgreSQL**: $7/miesiąc - 10GB storage

## Następne kroki

1. **Bezpieczeństwo**: 
   - Zmień hasła email i bazy danych
   - Dodaj SSL (automatyczne na Render)

2. **Monitoring**:
   - Skonfiguruj logi w Render dashboard
   - Dodaj health checks

3. **Backup**:
   - Regularnie exportuj bazę danych
   - Trzymaj kopię kodu na GitHub

## Alternatywne opcje hostingu

### Oracle Cloud Free Tier (Więcej kontroli)
- 2 VM instances zawsze darmowe
- 20GB storage każdy
- Wymaga konfiguracji Docker/Kubernetes

### Fly.io + PlanetScale
- Fly.io: 3 małe aplikacje darmowo
- PlanetScale: 10GB MySQL darmowo
- Bardziej skalowalne rozwiązanie
