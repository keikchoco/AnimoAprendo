import React from "react";

type RatingProps = {
  rating: number; // can be 0–5 with decimals
  size?: number;  // px size for stars
};

const RatingGFX: React.FC<RatingProps> = ({ rating, size = 40 }) => {
  const percentage = Math.max(0, Math.min(100, (rating / 5) * 100));

  return (
    <div style={{ position: "relative", display: "inline-block" }} className="select-none">
      {/* Background gray stars */}
      <div style={{ color: "#ccc", fontSize: size, letterSpacing: 2 }}>
        ★★★★★
      </div>

      {/* Foreground yellow stars clipped */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: `${percentage}%`,
          overflow: "hidden",
          whiteSpace: "nowrap",
          fontSize: size,
          letterSpacing: 2,
        }}
        className="text-green-700"
      >
        ★★★★★
      </div>
    </div>
  );
};

export default RatingGFX;
