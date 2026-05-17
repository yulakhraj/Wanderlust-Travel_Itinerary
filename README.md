# Wanderlust - Premium Travel Itinerary Platform

A beautifully crafted, highly responsive web application that helps users discover and plan their next adventure across India. Recently revamped with a stunning dark mode aesthetic, smooth glassmorphism UI, and high-performance image carousels.

## Features

- **Immersive Dark Theme**: A visually striking slate-blue design that makes high-resolution destination images pop.
- **Glassmorphism UI**: Dynamic frosted glass (`backdrop-blur`) navigation bars and itinerary containers.
- **Interactive Carousel**: Horizontal snapping carousel featuring top curated destinations with hover-zoom effects.
- **13 Detailed Itineraries**: Comprehensive day-by-day travel guides for top locations (Ladakh, Sikkim, Goa, etc.).
- **Dynamic Routing**: Extensible layout wrapper (`LocationLayout`) injecting dynamic Unsplash imagery for every inside page.
- **Responsive Design**: Flawless experience from mobile screens to ultrawide desktop monitors.

## Tech Stack

- **React.js** (v18+)
- **React Router v6** for seamless single-page navigation
- **Tailwind CSS** for rapid, responsive UI styling
- **Lucide React** for modern, crisp SVG iconography

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/yulakhraj/Wanderlust-Travel_Itinerary.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Project Structure

```
wanderlust/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Footer.js
│   │   ├── LocationLayout.js   # New dynamic layout wrapper
│   │   ├── LocationPage.js
│   │   └── Location/           # 13 Individual itinerary components
│   ├── data/
│   │   └── locations.js        # Centralized data with verified image URLs
│   ├── styles/
│   │   └── main.css            # Custom CSS utilities (hide-scrollbar)
│   └── App.js                  # Main landing page
```

## Contributing

Feel free to submit issues and enhancement requests. The UI is designed to be easily extensible. If adding new locations, simply update `locations.js` and drop a new component inside `src/components/Location/`.