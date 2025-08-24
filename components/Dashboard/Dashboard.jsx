'use client';

import { useState } from "react";
import Image from "next/image";
import { cards } from '@/cards';
import styles from './dashboard.module.css'

export default function Dashboard() {
  const [selectedCategory, setSelectedCategory] = useState("Toutes");

  // Récupérer toutes les catégories uniques
  const categories = ["Toutes", ...new Set(cards.map(card => card.category))];

  // Filtrer les cartes selon la catégorie
  const filteredCards = selectedCategory === "Toutes" 
    ? cards 
    : cards.filter(card => card.category === selectedCategory);

  return (
    <div style={{ padding: "20px" }}>
      {/* Filtre catégorie */}
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <label htmlFor="category">Filtrer par catégorie : </label>
        <select
          id="category"
          value={selectedCategory}
          onChange={e => setSelectedCategory(e.target.value)}
          style={{ padding: "6px 12px", borderRadius: "6px" }}
        >
          {categories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      {/* Grille de cartes */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>
        {filteredCards.map((card, index) => (
          <div key={index} style={{
            border: "2px solid #ccc",
            borderRadius: "12px",
            padding: "16px",
            textAlign: "center",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "transform 0.3s",
          }}
          className="card-item"
          >
            <h3 className={styles.h3}>{card.name}</h3>
            <p className={styles.category}><em>{card.category}</em></p>
            <Image
              src={card.image}
              alt={card.name}
              width={200}
              height={300}
              style={{ borderRadius: "8px" }}
            />
            <p style={{ marginTop: "12px", color: "#b67b20" }}>{card.description}</p>
            <p style={{ fontSize: "0.8em", color: "#0c0c0cff" }}>
              Mots-clés: {card.keywords.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
