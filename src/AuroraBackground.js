import React from "react";

const AuroraBackground = ({ children }) => {
  return (
    <main style={{ position: "relative", height: "100vh", background: "#f0f0f0" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(45deg, #6b6b6b, #000000)",
          filter: "blur(10px)"
        }}
      ></div>
      <div style={{ position: "relative", zIndex: 1 }}>
        {children}
      </div>
    </main>
  );
};

export default AuroraBackground;
