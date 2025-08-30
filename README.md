# 🎬 Movie Explorer (React + Watchmode API)

A responsive movie search application built with **React**, **TailwindCSS**, and **Flowbite-React**.  
Search for movies, explore details, and manage your favorite list — all in a clean, modern UI.  

---

## 🚀 Features
- 🔎 **Search movies/TV shows** using the [Watchmode API](https://api.watchmode.com/)  
- ❤️ **Add / Remove favorites** with persistent state  
- 🌓 **Dark mode ready** UI with Flowbite + Tailwind  
- 🎨 Interactive movie cards with hover effects  
- 📱 Fully responsive layout  

---

## 🛠️ Technologies Used
- **React 18**  
- **TailwindCSS**  
- **Flowbite-React** (UI Components)  
- **Context API** (global state for movies & favorites)  
- **Watchmode API** (autocomplete search)  

---

## 📂 Project Structure
src/
│── components/
│ ├── card.jsx # Single movie card
│ ├── FavoriteList.jsx # List of favorite movies
│ ├── Movielist.jsx # Grid of search results
│ ├── hero.jsx # Hero banner with search
│ ├── inputsearch.jsx # Search bar
│ ├── navbar.jsx # Navigation bar
│ ├── footer.jsx # Footer
│── movie-api.jsx # Context provider & API logic
│── App.jsx # Main app entry
│── index.css # Global styles
│── seeds.js # Example seed movies

---

## ⚡ Setup & Usage
To run this project locally:

```bash
# Clone repository
git clone https://github.com/mt4030/movie-app.git

# Navigate to project folder
cd movie-app

# Install dependencies
npm install

# Start development server
npm run dev
🔑 Environment Variables

📝 License

This project is open-source and available under the MIT License
.

 Built with  by Mohsen
