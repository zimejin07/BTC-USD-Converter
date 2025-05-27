module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#0d0f14",
        accent: "#c084fc",
        softGlass: "rgba(255, 255, 255, 0.05)",
      },
      boxShadow: {
        glow: "0 0 1rem #c084fc",
        card: "0 10px 25px rgba(0,0,0,0.2)",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: 0, transform: "translateY(20px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
        spinSwap: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.6 },
          "50%": { opacity: 1 },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 0.5rem #c084fc" },
          "50%": { boxShadow: "0 0 1.5rem #c084fc" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out",
        spinSwap: "spinSwap 0.8s ease",
        pulseSoft: "pulseSoft 2s infinite",
        glowPulse: "glowPulse 2s infinite",
      },
      dropShadow: {
        glow: "0 0 0.5rem #c084fc",
        neon: "0 0 0.8rem #8b5cf6",
      },
      boxShadow: {
        glass: "0 10px 25px rgba(255,255,255,0.1)",
      },
    },
  },
  plugins: [],
};
