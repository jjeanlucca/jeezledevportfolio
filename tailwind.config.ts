import type { Config } from 'tailwindcss'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base do sistema
        background: "#F8FAFC",
        surface: "#FFFFFF",
        border: "#E2E8F0",

        // Marca Jeezle (Azul Profissional)
        primary: {
          DEFAULT: "#0B3A92",
          foreground: "#FFFFFF", // 👈 Adicionado aqui para garantir o texto branco
          soft: "#2A5BBA",
          dark: "#072459",
        },

        // Texto
        text: {
          main: "#0F172A",
          muted: "#64748B",
          invert: "#FFFFFF",
        },

        // Estados
        success: "#10B981",
        warning: "#F59E0B",
        danger: "#EF4444",

        // Accent
        accent: "#3B82F6",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px rgba(11, 58, 146, 0.05)",
        hover: "0 15px 40px rgba(11, 58, 146, 0.1)",
      },
      spacing: {
        section: "6rem",
      },
    },
  },
  plugins: [],
} satisfies Config