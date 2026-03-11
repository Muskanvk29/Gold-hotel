# 🏨 Gold Hotel — React.js Website

A modern hotel website built using **React.js**.



## 🛠️ Tech Used

* React.js
* CSS
* Vite
* Unsplash (for images)



## 📁 Project Structure


src/
├── components/
│   ├── Navbar.jsx
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Rooms.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── App.jsx
├── App.css
└── main.jsx




## ⚙️ How to Run This Project

### Step 1 — Clone the repository


git clone https://github.com/Muskanvk29/gold-hotel.git


### Step 2 — Go into the project folder


cd gold-hotel

### Step 3 — Install dependencies


npm install


### Step 4 — Start the app


npm run dev


### Step 5 — Open in browser


http://localhost:5173




## 📌 Features

* Sticky Navbar with smooth scroll
* Hero section with sliding background images
* About section with auto sliding images and stats
* Rooms section with cards and sliding images
* Contact form with success message using `useState`
* 4 column Footer with newsletter
* Fully responsive for mobile



## ⚛️ React Concepts Used

| Concept          | Where Used                  |
| ---------------- | --------------------------- |
| Components       | All files                   |
| JSX              | All files                   |
| useState         | Home, About, Rooms, Contact |
| useEffect        | Home, About                 |
| Array + `.map()` | Rooms, Footer, Navbar       |
| key prop         | All `.map()` loops          |
| Form Handling    | Contact.jsx                 |
| Import / Export  | All files                   |
