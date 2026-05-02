/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta MIRF official
        gold: {
          DEFAULT: "#C9A15F",
          light: "#E5C98B",
          dark: "#A88346",
        },
        black: {
          DEFAULT: "#0B0B0C",
          card: "#1A1A1D",
          soft: "#2B2B2F",
        },
        light: {
          DEFAULT: "#F5F3EF",
        },
        // Variables de shadcn (mantenidas por compatibilidad)
        border: "hsl(0 0% 20%)",
        input: "hsl(0 0% 20%)",
        ring: "hsl(40 45% 58%)",
        background: "hsl(0 0% 4%)",
        foreground: "hsl(40 30% 96%)",
        primary: {
          DEFAULT: "hsl(40 45% 58%)",
          foreground: "hsl(0 0% 4%)",
        },
        secondary: {
          DEFAULT: "hsl(0 0% 15%)",
          foreground: "hsl(40 30% 96%)",
        },
        destructive: {
          DEFAULT: "hsl(0 84% 60%)",
          foreground: "hsl(40 30% 96%)",
        },
        muted: {
          DEFAULT: "hsl(0 0% 15%)",
          foreground: "hsl(40 20% 70%)",
        },
        accent: {
          DEFAULT: "hsl(40 45% 58%)",
          foreground: "hsl(0 0% 4%)",
        },
        popover: {
          DEFAULT: "hsl(0 0% 10%)",
          foreground: "hsl(40 30% 96%)",
        },
        card: {
          DEFAULT: "hsl(0 0% 10%)",
          foreground: "hsl(40 30% 96%)",
        },
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Poppins', 'sans-serif'],
        accent: ['Cormorant Garamond', 'serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        gold: "0 0 40px rgba(201, 161, 95, 0.2)",
        "gold-lg": "0 0 60px rgba(201, 161, 95, 0.15)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "flip-in": {
          from: {
            opacity: "0",
            transform: "rotateX(90deg) translateY(-100px)",
          },
          to: {
            opacity: "1",
            transform: "rotateX(0) translateY(0)",
          },
        },
        "slide-up": {
          from: {
            opacity: "0",
            transform: "translateY(60px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        float: "float 6s ease-in-out infinite",
        "flip-in": "flip-in 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "slide-up": "slide-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
      },
      transitionTimingFunction: {
        "custom-expo": "cubic-bezier(0.16, 1, 0.3, 1)",
        "elastic-snap": "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
      },
    },
  },
  plugins: [],
};