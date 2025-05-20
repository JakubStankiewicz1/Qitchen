import React, { useState } from "react";
import './home.css';
// Możesz podmienić na prawdziwe logo
import logo from '../../assets/logo.png';
// Jeśli nie masz logo, zakomentuj powyższą linię i użyj <h1>Qitchen</h1>

// Przykładowe dane (mock)
const mockStats = {
  today: 8,
  week: 42,
  month: 180,
  freeTables: 5,
  newUsers: 3,
  cancelled: 2,
  nextReservation: {
    name: "Jan Kowalski",
    time: "2024-06-12T18:30",
    guests: 4
  }
};
const mockReservations = [
  { id: 1, name: "Jan Kowalski", time: "2024-06-12T18:30", guests: 4 },
  { id: 2, name: "Anna Nowak", time: "2024-06-12T19:00", guests: 2 },
  { id: 3, name: "Piotr Zielinski", time: "2024-06-12T20:00", guests: 6 },
];
const mockCancellations = [
  { id: 4, name: "Marek Toaj", time: "2024-06-11T17:00" },
];
const mockLogins = [
  { id: 1, admin: "admin@qitchen.com", time: "2024-06-12T09:00" },
  { id: 2, admin: "manager@qitchen.com", time: "2024-06-11T21:00" },
];
const mockAlerts = [
  { type: "info", msg: "Najbliższa rezerwacja za 2 godziny: Jan Kowalski (4 os.)" },
  { type: "warning", msg: "Zbliżasz się do limitu rezerwacji na dziś!" },
];
const mockFaq = [
  { q: "Jak dodać rezerwację?", a: "Przejdź do zakładki Reservations i kliknij Add Reservation." },
  { q: "Jak zmienić hasło?", a: "Kliknij na swój profil w prawym górnym rogu i wybierz 'Zmień hasło'." },
];

const Home = () => {
  // Możesz dodać tu logikę pobierania danych z backendu
  return (
    <div className="dashboard-root">
      {/* Branding & Welcome */}
      <div className="dashboard-header">
        {/* <img src={logo} alt="Qitchen Logo" className="dashboard-logo" /> */}
        <h1 className="dashboard-title">Qitchen Admin Dashboard</h1>
        <p className="dashboard-welcome">Witaj w panelu zarządzania restauracją!<br/>"Najlepszy smak to ten, który dzielisz z innymi."</p>
      </div>

      {/* Summary Cards */}
      <div className="dashboard-summary">
        <div className="dashboard-card">
          <span className="dashboard-card-label">Rezerwacje dziś</span>
          <span className="dashboard-card-value">{mockStats.today}</span>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-label">Rezerwacje w tygodniu</span>
          <span className="dashboard-card-value">{mockStats.week}</span>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-label">Rezerwacje w miesiącu</span>
          <span className="dashboard-card-value">{mockStats.month}</span>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-label">Wolne stoliki</span>
          <span className="dashboard-card-value">{mockStats.freeTables}</span>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-label">Nowi użytkownicy</span>
          <span className="dashboard-card-value">{mockStats.newUsers}</span>
        </div>
        <div className="dashboard-card">
          <span className="dashboard-card-label">Anulowane</span>
          <span className="dashboard-card-value">{mockStats.cancelled}</span>
        </div>
        <div className="dashboard-card dashboard-card-next">
          <span className="dashboard-card-label">Najbliższa rezerwacja</span>
          <span className="dashboard-card-value">{mockStats.nextReservation.name} ({mockStats.nextReservation.guests} os.)<br/>{new Date(mockStats.nextReservation.time).toLocaleString()}</span>
        </div>
      </div>

      {/* Charts & Trends (placeholder, można podpiąć np. recharts) */}
      <div className="dashboard-charts">
        <div className="dashboard-chart-card">
          <h3>Rezerwacje (ostatnie 7 dni)</h3>
          <div className="dashboard-chart-placeholder">[Wykres słupkowy]</div>
        </div>
        <div className="dashboard-chart-card">
          <h3>Godziny szczytu</h3>
          <div className="dashboard-chart-placeholder">[Wykres liniowy]</div>
        </div>
        <div className="dashboard-chart-card">
          <h3>Popularność stolików</h3>
          <div className="dashboard-chart-placeholder">[Wykres kołowy]</div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="dashboard-activity">
        <div className="dashboard-activity-card">
          <h3>Ostatnie rezerwacje</h3>
          <ul>
            {mockReservations.map(r => (
              <li key={r.id}>{r.name} – {new Date(r.time).toLocaleString()} ({r.guests} os.)</li>
            ))}
          </ul>
        </div>
        <div className="dashboard-activity-card">
          <h3>Ostatnie anulacje</h3>
          <ul>
            {mockCancellations.map(c => (
              <li key={c.id}>{c.name} – {new Date(c.time).toLocaleString()}</li>
            ))}
          </ul>
        </div>
        <div className="dashboard-activity-card">
          <h3>Ostatnie logowania adminów</h3>
          <ul>
            {mockLogins.map(l => (
              <li key={l.id}>{l.admin} – {new Date(l.time).toLocaleString()}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Alerts */}
      <div className="dashboard-alerts">
        {mockAlerts.map((a, i) => (
          <div key={i} className={`dashboard-alert dashboard-alert-${a.type}`}>{a.msg}</div>
        ))}
      </div>

      {/* Calendar (placeholder) */}
      <div className="dashboard-calendar">
        <h3>Kalendarz rezerwacji</h3>
        <div className="dashboard-calendar-placeholder">[Mini kalendarz z rezerwacjami]</div>
      </div>

      {/* FAQ / Help */}
      <div className="dashboard-faq">
        <h3>FAQ / Pomoc</h3>
        <ul>
          {mockFaq.map((f, i) => (
            <li key={i}><strong>{f.q}</strong><br/>{f.a}</li>
          ))}
        </ul>
        <div className="dashboard-help-contact">
          Kontakt do wsparcia: <a href="mailto:support@qitchen.com">support@qitchen.com</a>
        </div>
      </div>
    </div>
  );
};

export default Home;