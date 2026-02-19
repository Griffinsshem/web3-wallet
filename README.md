# 🚀 CryptoDash – Web3 Wallet Dashboard

> A modern Web3 wallet dashboard built with Next.js 16, Wagmi v3, Viem, and Tailwind CSS.

🌍 **Live Demo:**  
https://cryptodash-taupe.vercel.app/

---

## ✨ Overview

CryptoDash is a clean, production-ready Web3 wallet dashboard that allows users to:

- Connect their Ethereum wallet (MetaMask / injected provider)
- View account details
- Detect active network
- Display wallet balance
- Switch between light and dark mode
- Copy wallet address to clipboard
- Interact with a modern responsive UI

Built using the latest Next.js App Router architecture with Wagmi v3 and React 19.

---

## 🛠 Tech Stack

| Technology | Purpose |
|------------|----------|
| **Next.js 16** | React framework (App Router) |
| **React 19** | UI Library |
| **TypeScript** | Type safety |
| **Wagmi v3** | Web3 React hooks |
| **Viem** | Ethereum RPC client |
| **TanStack Query** | Async state management |
| **Tailwind CSS v4** | Styling |
| **Lucide React** | Icon system |
| **React Icons** | Dashboard UI icons |
| **next-themes** | Dark/Light mode |

---

## 🧠 Architecture

```
RootLayout
├── ThemeProvider
└── Web3Provider
└── Application
├── Landing Page
│ └── ConnectWallet
└── DashboardSection
├── AccountCard
├── NetworkCard
└── BalanceCard
```


### Web3 Configuration

- Chain: Ethereum Mainnet
- Connector: Injected (MetaMask)
- Transport: HTTP
- State handled via TanStack Query

---

## 📂 Project Structure

```
src/
├── app/
│ ├── layout.tsx
│ ├── page.tsx
│ └── globals.css
│
├── components/
│ ├── AccountCard.tsx
│ ├── BalanceCard.tsx
│ ├── NetworkCard.tsx
│ ├── DashboardSection.tsx
│ ├── connect-wallet.tsx
│ ├── theme-provider.tsx
│ └── theme-toggle.tsx
│
├── providers/
│ └── web3-provider.tsx
│
├── hooks/
├── lib/
```


---

## 🔌 Wallet Features

### ✅ Connect Wallet
- Uses `wagmi` injected connector
- Auto-detects MetaMask
- Shows loading state while connecting
- Displays shortened wallet address

### ✅ Copy Address
- Clipboard API integration
- Instant feedback UX

### ✅ Disconnect
- Safe session termination
- UI state updates automatically

---

## 🎨 UI Features

- Responsive layout (mobile-first)
- Glassmorphism card design
- Animated hover states
- Gradient backgrounds
- Dark / Light mode toggle
- Clean spacing & modern typography (Jost font)

---

## ⚙️ Installation

### 1️⃣ Clone the repository

```bash
git clone https://github.com/Griffinsshem/web3-wallet
cd web3-wallet-landing
```

### 2️⃣ Install dependencies
```
npm install
```

### 3️⃣ Run locally
```
npm run dev
```

visit
```
http://localhost:3000
```

## 🚀 Deployment
```
Deployed on Vercel.

To deploy your own:
 1.Push project to GitHub
 2.Go to https://vercel.com
 3.Import repository
 4.Select Next.js preset
 5.Deploy

No additional configuration required.
```

## 📦 Available Scripts
```
npm run dev     # Start development server
npm run build   # Build production app
npm run start   # Start production server
npm run lint    # Run ESLint
```

## 🔐 Security
```
 1.Non-custodial wallet connection
 2.No private keys stored
 3.Uses injected provider only
 4.Client-side wallet interactions
```

## 🧪 Current Chain Support
 - Ethereum Mainnet
 - Future upgrade could include:
 - Multi-chain support
 - WalletConnect
 - Custom RPC endpoints

## 🚀 Future Improvements

- Transaction history viewer
- Token portfolio breakdown
- Etherscan integration
- Wallet provider detection UI
- Toast notification system
- Loading skeleton animations
- Chain switcher
- Gas fee display

## 📈 Performance Notes

- App Router architecture
- Optimized font loading
- Minimal client-side hydration
- Wagmi v3 performance improvements
- TanStack Query caching

## 🏁 Final Result

A modern, clean, production-ready Web3 dashboard suitable for:
- Portfolio showcase
- Internship applications
- Web3 frontend demonstration
- Next.js advanced architecture reference

## 👨‍💻 Author

Built by Griffin Shem Ondeyo

If you found this project helpful, consider giving it a ⭐ on GitHub.
