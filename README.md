🌞 SunCart – Summer Product Store

SunCart is a modern summer-themed e-commerce web app where users can explore seasonal products, view details, and manage their profile with authentication.

🔗 Live Site: https://sun-cart-six.vercel.app/

🎯 Purpose

The goal of this project is to build a full-featured frontend application using Next.js App Router with authentication, protected routes, and a clean UI.

It focuses on:
- User authentication
- Dynamic product display
- Route protection
- Smooth UI experience

🚀 Key Features

🧭 Layout & Navigation

- Persistent Navbar & Footer across all pages
- Navbar shows:
   - Logo & navigation links (Home, Products, My Profile)
   - User avatar & logout (if logged in)
   - Login/Register buttons (if logged out)

- Footer includes:
   - Contact info
   - Social links
   - Privacy policy
 
🏠 Home Page

🌅 Hero section with summer sale highlights

🔥 Popular products section (3 featured items)

🌿 Extra sections:
- Summer Care Tips
- Top Brands

🔒 Protected Product Details

Product details page is protected
- Users must log in to access it
- After login → redirected back to the intended page

🔐 Authentication (BetterAuth)

- Email & Password login
- Google social login
- Registration system with:
   - Name
   - Email
   - Photo URL
   - Password
   - Error handling with messages/toasts
 
✏️ Update Profile Feature
Update user:
- Name
- Profile image
- Implemented using BetterAuth user update system

🎨 Animations
- Smooth UI animations using Animate.css

🛠️ Tech Stack

⚛️ Next.js (App Router)
🎨 Tailwind CSS
🧩 DaisyUI / HeroUI
🔐 BetterAuth
🎞️ Animate.css

📦 NPM Packages Used

better-auth – Authentication system
animate.css – UI animations
react-icons – Icons
