import React, { useState } from "react";
import CountUp from "react-countup";
import "./Counter.scss";

const stats = [
  { id: 1, number: 238, label: "Active Clients" },
  { id: 2, number: 706, label: "Projects Completed" },
  { id: 3, number: 5, label: "Glorious Years" },
  { id: 4, number: 36, label: "Professional Team" },
];

export default function StatsSection() {
  const [key, setKey] = useState(0);

  return (
    <section className="stats-section">
      <div className="stats-grid">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.id}>
            <h2 className="stat-number">
              <CountUp
                key={key + stat.id}   // reset animation
                start={0}
                end={stat.number}
                duration={3}
                onEnd={() => setKey((prev) => prev + 1)} // restart loop
              />
              +
            </h2>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}