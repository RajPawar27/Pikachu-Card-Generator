# Pikachu Card Generator

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Pikachu Card Generator** is a dynamic web application that fetches and displays a random Pokémon “card” on each refresh. It combines a React + Vite + TypeScript frontend with an Express + TypeScript backend that wraps the PokéAPI via the `pokedex-promise-v2` client. Every reload (or button click) surfaces a fresh card complete with official artwork, stats, and type-specific theming.

---

## 📋 Table of Contents

1. [Features](#-features)  
2. [Tech Stack](#-tech-stack)  
3. [Screenshots](#-screenshots)  
4. [Getting Started](#-getting-started)  
5. [Environment Variables](#-environment-variables)  
6. [Available Scripts](#-available-scripts)  
7. [Deployment](#-deployment)  
8. [Contributing](#-contributing)  
9. [License](#-license)  

---

## 🚀 Features

- 🔄 **Random Card on Refresh**: Instantly fetch a new Pokémon by ID and display its artwork, types, and stats.  
- 🎨 **Pikachu-Themed UI**: Branded gradient animations, pulsing logo halo, floating sparkles, and 3D‐flip cards.  
- ⚙️ **Promise-Based API**: Backend adapter uses `pokedex-promise-v2` for parallelizable, cache-friendly PokéAPI calls.  
- 🌐 **Type-Driven Themes**: Card backgrounds adapt to the Pokémon’s primary type.  

---

## 🛠 Tech Stack

| Frontend                        | Backend                       | Styling & Animations           |
|---------------------------------|-------------------------------|--------------------------------|
| React 18 + Vite + TypeScript    | Node 18 + Express + TypeScript| Tailwind CSS, Framer Motion    |
| React Router DOM                | pokedex-promise-v2            | Custom keyframes & utilities   |

---

## 📸 Screenshots

> Replace the placeholder images in `client/public/screenshots/` with your own captures.

| Landing Page                                      | Random Card View                                  |
|:--------------------------------------------------:|:-------------------------------------------------:|
| ![Landing Page](client/public/screenshots/landing.png) | ![Random Card](client/public/screenshots/card.png) |

---

## 🔧 Getting Started

### Prerequisites

- Node.js v18+  
- npm v8+  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/RajPawar27/Pikachu-Card-Generator.git
cd Pikachu-Card-Generator

# 2. Install dependencies
# -- root (if any), then:
cd client && npm install
cd ../server && npm install
