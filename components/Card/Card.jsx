import Image from "next/image";

export default function Card({ card }) {
  return (
    <div style={{
      border: "2px solid #ccc",
      borderRadius: "12px",
      width: "300px",
      padding: "16px",
      textAlign: "center",
      backgroundColor: "#fff",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{card.name}</h3>
      <p><em>{card.category}</em></p>
      <Image
        src={card.image}
        alt={card.name}
        width={200}
        height={300}
        style={{ borderRadius: "8px" }}
      />
      <p style={{ marginTop: "12px" }}>{card.description}</p>
      <p style={{ fontSize: "0.8em", color: "#666" }}>
        Mots-clés: {card.keywords.join(", ")}
      </p>
    </div>
  );
}
