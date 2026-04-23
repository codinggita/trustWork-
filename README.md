# EscrowFlow

![Frontend](https://img.shields.io/badge/Frontend-React-blue)
![Styling](https://img.shields.io/badge/Styling-TailwindCSS-38B2AC)
![UI](https://img.shields.io/badge/UI-MaterialUI-007FFF)
![State](https://img.shields.io/badge/State-ReduxToolkit-purple)
![Design](https://img.shields.io/badge/Design-Figma-black)

A SaaS-based freelance platform that ensures secure payments and a structured workflow between clients and freelancers using an escrow system.

---

## Figma Prototype

View full UI flow here:

https://www.figma.com/proto/7BwnU9bfaneGRB0np7fZWy/Abdul-Haque-s-team-library?node-id=3354-453&p=f&viewport=154%2C236%2C0.22&t=PGDWcmQ4FwmPUERs-1&scaling=contain&content-scaling=fixed&starting-point-node-id=3350%3A2&page-id=3339%3A2

---

## Problem Analysis

Freelancing platforms suffer from multiple interconnected issues that impact trust, workflow, and delivery.

### Detailed Problem Breakdown

| Main Problem          | Root Issues             | Secondary Problems           | Impact           |
| --------------------- | ----------------------- | ---------------------------- | ---------------- |
| Payment Insecurity    | No escrow, no guarantee | Delayed payments, fraud risk | Loss of trust    |
| Lack of Transparency  | No tracking system      | Miscommunication             | Project delays   |
| Ghosting              | No accountability       | Abandoned work               | Time loss        |
| Unstructured Workflow | No defined system       | Chat-based work              | Confusion        |
| Weak Disputes         | No proof system         | No resolution                | Conflicts remain |

---

## Solution

EscrowFlow introduces a structured, system-driven workflow to solve these problems.

### Problem → Solution Mapping

| Problem              | Solution              | Implementation           |
| -------------------- | --------------------- | ------------------------ |
| Payment Insecurity   | Escrow System         | Funds locked before work |
| Lack of Transparency | Progress Tracking     | Status & deadlines       |
| Ghosting             | Accountability System | Milestone tracking       |
| Workflow Issues      | Milestone System      | Structured execution     |
| Disputes             | Evidence System       | Timeline + proof         |

---

## System Workflow

```plaintext id="7r4m2x"
Create Project → Lock Funds → Work → Submit → Approve → Release Payment
```

---

## Feature Breakdown
* Escrow-based secure payments
* Milestone-based workflow
* Project workspace
* Status tracking
* Deadline management
* Dispute-ready system

---


## Frontend Folder Structure (Detailed Explanation)

```bash id="fullstruct1"
src/
├── assets/                      # Static resources
│   ├── images/                 # Images used across UI
│   ├── icons/                  # SVG icons
│   └── fonts/                  # Custom fonts
│
├── components/                  # Reusable UI components
│   ├── common/                  # Basic reusable components
│   │   ├── Button.jsx          # Reusable button (primary/secondary)
│   │   ├── Input.jsx           # Form input field
│   │   ├── Modal.jsx           # Popup / dialog box
│   │   └── Loader.jsx          # Loading spinner
│   │
│   ├── layout/                  # Layout structure
│   │   ├── Sidebar.jsx         # Left navigation menu
│   │   ├── Navbar.jsx          # Top navigation bar
│   │   └── Layout.jsx          # Wraps pages (sidebar + navbar)
│   │
│   └── ui/                      # UI building blocks
│       ├── Card.jsx            # Card container
│       ├── Table.jsx           # Data table layout
│       ├── Badge.jsx           # Status labels (Active, Pending, Completed)
│       ├── Tabs.jsx            # Tab navigation
│       └── ProgressBar.jsx     # Progress indicator
│
├── pages/                       # Main pages (route level)
│   ├── Login.jsx               # User login page
│   ├── Dashboard.jsx           # Overview dashboard (summary data)
│   ├── Projects.jsx            # All projects list
│   ├── CreateProject.jsx       # Project creation form
│   ├── Workspace.jsx           # Main working area (core feature)
│   ├── Payments.jsx            # Payment tracking page
│   ├── Disputes.jsx            # Dispute management page
│   └── Settings.jsx            # User settings page
│
├── routes/                      # Routing system
│   ├── AppRoutes.jsx           # All route definitions
│   ├── ProtectedRoute.jsx      # Private routes (auth required)
│   └── PublicRoute.jsx         # Public routes (login)
│
├── store/                       # Global state management (Redux)
│   ├── store.js                # Redux store setup
│   └── slices/
│       ├── authSlice.js        # Authentication state
│       ├── projectSlice.js     # Project-related state
│       └── uiSlice.js          # UI state (loading, theme, etc.)
│
├── services/                    # API layer
│   ├── axios.js                # Axios configuration
│   └── endpoints.js            # API endpoints
│
├── hooks/                       # Custom hooks
│   ├── useAuth.js              # Authentication logic
│   └── useDebounce.js          # Debounce optimization
│
├── utils/                       # Helper utilities
│   ├── helpers.js              # Common helper functions
│   ├── constants.js            # Static values/constants
│   └── storage.js              # Local storage handling
│
├── styles/                      # Global styles
│   └── globals.css             # Global CSS styles
│
├── App.jsx                      # Root component (layout + routes)
└── main.jsx                     # Application entry point
```

---

## Design System

### Colors

| Type           | Color   | Usage               |
| -------------- | ------- | ------------------- |
| Primary        | #6C5CE7 | Buttons, highlights |
| Background     | #F8F9FC | Page background     |
| Card           | #FFFFFF | Cards               |
| Text Primary   | #1A1A1A | Main text           |
| Text Secondary | #6B7280 | Sub text            |
| Success        | #22C55E | Completed status    |
| Warning        | #F59E0B | Pending status      |
| Danger         | #EF4444 | Overdue / error     |

---

### Typography

| Element    | Font  | Size    | Weight  |
| ---------- | ----- | ------- | ------- |
| Heading    | Inter | 24–28px | Bold    |
| Subheading | Inter | 18–20px | Medium  |
| Body       | Inter | 14–16px | Regular |
| Small Text | Inter | 12px    | Light   |

---

### UI Styling Rules

* Buttons: Rounded, primary gradient color
* Cards: White background, soft shadow, 12px radius
* Inputs: Light gray background, rounded edges
* Tables: Clean rows with hover effect
* Badges: Color-based status (green, orange, red)

---

## Design Principles

* Consistent spacing and alignment
* Clean and minimal UI
* Focus on readability and usability
* Clear visual hierarchy
* Responsive layout (mobile-first)



## Technical Skills Used

* React (Hooks, components)
* Redux Toolkit (State management)
* React Router (Routing)
* Axios (API handling)
* Tailwind CSS (Styling)
* Material UI (UI components)
* Responsive Design
* Modular Architecture
* System Design (Escrow logic)

---

## How to Run

```bash id="k92l1p"
git clone <repo-url>
cd EscrowFlow
npm install
npm run dev
```

Open: http://localhost:5173

---

## Architecture Highlights

* Modular component design
* Scalable structure
* Clean separation of concerns
* Maintainable codebase

---

## Frontend Folder Structure

(keep your existing structure here)

---

## Final Outcome

* Secure payments
* Structured workflow
* Reduced risk
* Better collaboration

---

## Summary

EscrowFlow converts freelancing into a structured and secure system with escrow-based payments.
