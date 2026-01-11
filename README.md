# Pita Test - Sculptique Clone

A Next.js project developed to clone the [Sculptique Lymph-CC Select](https://trysculptique.com/products/lymph-cc-select) product page for practice and frontend skill assessment.

## 🔗 Project Links

- **GitHub Repository:** [https://github.com/TN1608/pita-test](https://github.com/TN1608/pita-test)
- **Live Preview (Vercel):** [https://pita-test.vercel.app/](https://pita-test.vercel.app/)
- **Original Reference:** [Sculptique Product Page](https://trysculptique.com/products/lymph-cc-select)

## 🚀 Tech Stack

This project leverages modern technologies in the React/Next.js ecosystem:

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation:** 
  - [GSAP](https://gsap.com/) (GreenSock Animation Platform) for complex and scroll-based animations.
  - [Motion](https://motion.dev/) (framer-motion) for smooth micro-interactions.
- **UI Components:** [Radix UI](https://www.radix-ui.com/) (Accordion, Dialog, Radio Group, etc.)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Utility:** `clsx`, `tailwind-merge`

## 📂 Directory Structure

```text
src/
├── app/             # Routing and Page components (App Router)
├── components/      # Shared UI components
│   ├── pages/       # Specific components for each page (Product page)
│   └── ui/          # Base components from RadixUI/Shadcn
├── constants/       # Static data, website content configuration
├── context/         # React Context (Theme, State management)
├── hooks/           # Custom React Hooks
├── lib/             # Utility functions (utils, configuration)
└── styles/          # Global and component-specific CSS (using Tailwind v4)
```

## 🛠️ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/TN1608/pita-test.git
cd pita-test
```

### 2. Install dependencies
The project uses `npm` or `pnpm`:
```bash
npm install
# or
pnpm install
```

### 3. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 4. Build for Production
```bash
npm run build
npm run start
```

## 📝 Development Notes

- The project focus is on accurately mimicking the interface and User Experience (UX) of the original page.
- Utilizes **Lora** and **Geist** fonts for optimized typography.
- The entire design is fully Responsive (Mobile-first).

---
*Project by [TN1608](https://github.com/TN1608)*
