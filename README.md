<p align="center">
  <img src="./public/logo.svg" alt="EasyTip Logo" width="120" height="120" />
</p>

# EasyTip

A modern, responsive tip calculator and bill splitter for web. Instantly calculate tips, split bills, and share payment details with a beautiful UI. Built with React and Tailwind CSS.

---

## 🚀 Live Demo

[https://easy-tip-pi.vercel.app/](https://easy-tip-pi.vercel.app/)

---

## 📸 Screenshots

### Mobile
<img src="https://github.com/user-attachments/assets/086bf90b-1750-48c8-92c1-ea6038b55d86?raw=true" alt="Mobile screenshot" width="400" style="max-width:100%;height:auto" />

### Tablet
<img src="https://github.com/user-attachments/assets/18eb9799-89eb-469d-b4cd-6dbe1e844085?raw=true" alt="Tablet screenshot" width="700" style="max-width:100%;height:auto" />

### Desktop
<img src="https://github.com/user-attachments/assets/9c6cdfb3-ece0-492b-81ca-955e3ecc7534?raw=true" alt="Desktop screenshot" width="1000" style="max-width:100%;height:auto" />
---

## ✨ Features

- Modern, mobile-first UI
- Preset & custom tip percentages
- Currency selection (USD, INR, EUR)
- Profile-based tip presets (Dinner, Office Lunch, NightOut)
- Rounding options (none, nearest 0.50, nearest 1.00)
- Real-time calculation per person
- Share split summary to clipboard
- Demo QR cards for each person (future payment integration)
- Local storage for preferences
- SPA routing support for Vercel
- No service worker caching issues

---

## Profiles — explained (use these as references)

This app supports profiles (pre-configured tip presets) so you can quickly choose a context and get sensible defaults. Below each profile is explained with recommended settings and when to use it.

- Dinner
  - Typical tip: 15%–20%
  - When to use: Full-service restaurants, dinner with waiter service, sit-down meals.
  - Typical settings: Use a preset of 18% as a balanced default; rounding to nearest 0.50 if you prefer simpler numbers.
  - Example: $120 bill, 18% tip → Tip = $21.60; total = $141.60.

- Office Lunch
  - Typical tip: 10%–15% or no tip (depends on workplace culture)
  - When to use: Quick lunches, catered office meals, or when splitting with colleagues who usually tip less.
  - Typical settings: 10% preset, rounding none or nearest 0.50.
  - Example: $60 bill split between 3, 10% tip → Total per person = (($60 + $6) / 3) = $22.00.

- NightOut
  - Typical tip: 20%–25% (bars, cocktails, group nights)
  - When to use: Bars, parties, or nights out where service and order complexity justify a higher tip.
  - Typical settings: 20% or 25% preset, rounding to nearest 1.00 for simple cash exchange.
  - Example: $250 bill, 20% tip split 5 ways → Per person = (($250 + $50) / 5) = $60.00.

How to pick a profile:
- Ask yourself: was the service formal or casual? How many people? Will people want exact cents or round numbers?
- Choose the profile whose description matches the occasion, then tweak the preset tip or rounding if needed.

---

## Tip calculation & rounding — quick guide

- Tip percentage: Choose from presets (e.g., 10, 15, 18, 20, 25) or enter a custom percentage.
- Rounding options:
  - None — exact cents are shown (e.g., $14.23).
  - Nearest 0.50 — rounds to the nearest $0.50 (e.g., $14.23 → $14.50).
  - Nearest 1.00 — rounds to the nearest whole dollar (e.g., $14.23 → $14.00 or $14.50 depending on midpoint rules).
- Per-person calculation: (Bill + Tip) / People. Rounding can be applied to per-person totals or the final split depending on the app setting.
- Currency: Displays and formats totals according to the selected currency (USD, INR, EUR). Make sure to set the correct currency for formatting and clarity.

Example (full flow):
- Bill: $88.75
- Profile: Dinner (18%)
- Tip: 18% → Tip = $15.975 → $15.98 (if rounding to cents)
- Total: $104.73
- Split among 4: $26.18 per person (then apply rounding option if chosen)

---

## 🧭 How to use (step-by-step)

1. Open the app (Live demo or local).
2. Enter the bill amount.
3. Select number of people to split the bill.
4. Choose a profile (Dinner, Office Lunch, NightOut) to pre-fill tip presets — or pick a tip preset manually.
5. Optionally enter a custom tip percentage.
6. Select rounding preference (none, nearest 0.50, nearest 1.00).
7. Choose currency if you need alternate formatting.
8. View calculated totals and per-person amounts in real-time.
9. Use "Share" to copy the split summary to clipboard or generate demo QR cards for each person (future payment workflow).

Accessibility tips:
- The UI is mobile-first and designed to be readable at small sizes.
- Inputs are large and touch-friendly. Keyboard navigation and screen-reader support are recommended improvements if needed.

---

## 📦 Built With
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- Flexbox & CSS Grid
- Mobile-first workflow

---

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- npm

### Local Setup
```bash
git clone https://github.com/Anilkumarputta/Easy-Tip.git
cd Easy-Tip
npm install
npm start
```
The app will open at [http://localhost:3000](http://localhost:3000) (or another port if in use).

### Deployment
- **Vercel:** Push to `main` branch and Vercel will auto-deploy to [https://easy-tip-pi.vercel.app/](https://easy-tip-pi.vercel.app/)
- **Other hosts:** Build with `npm run build` and serve the `build/` folder with any static server.

---

## 📚 Configuration & Preferences (notes)

- Local storage: The app saves preferences like last-used profile, currency, and tip presets to local storage so your settings persist between sessions.
- SPA routing: Configured to work smoothly on Vercel (single-page app routing).
- Service workers: No aggressive caching by default to avoid stale builds — recommended for development and initial deployment.

---

## 🙌 Contributing

Contributions are welcome! If you'd like to:
- Open an issue for bugs or feature requests
- Fork and make a pull request with improvements
- Suggest UI/UX or accessibility enhancements

Please follow standard GitHub flow: fork → branch → PR. Add clear descriptions and, where applicable, screenshots or GIFs.

---

## 👤 Author

- **Anil Kumar**  
  [LinkedIn](http://linkedin.com/in/anil-putta)  
  [GitHub](https://github.com/Anilkumarputta)

---

## 📄 License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
