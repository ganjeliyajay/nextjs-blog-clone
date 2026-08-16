# Next.js Blog Clone

A responsive blog website built with **Next.js** and **Tailwind CSS**, recreated as a learning project based on the **Vercel Next.js Blog Starter**.

The main goal of this project is to understand how a modern blog can be built using Next.js, including **App Router, reusable components, dynamic routing, slug-based URLs, static blog data, responsive UI, and Next.js image handling**.

---

## 🚀 Project Overview

This project is a recreation of the [Next.js Blog Starter](https://next-blog-starter.vercel.app/) website.

The original Vercel example demonstrates a statically generated blog using Next.js and Markdown. This project recreates the main blog experience while implementing the UI and blog data using a custom component structure and a JSON data source.

The project contains:

* Blog homepage
* Blog listing
* Blog cards
* Blog detail pages
* Dynamic slug-based routing
* Static blog data
* Author information
* Blog dates
* Blog cover images
* Responsive design
* Reusable React components

---

## 🌐 Live Demo

Add your deployed Vercel URL here:

```text
https://your-project.vercel.app
```

---

## 🔗 Repository

GitHub:

```text
https://github.com/ganjeliyajay/nextjs-blog-clone
```

---

## 📚 Original Reference

This project was created for learning and practice based on the official Vercel Next.js Blog Starter.

### Original Demo

```text
https://next-blog-starter.vercel.app/
```

### Original Repository

```text
https://github.com/vercel/next.js/tree/canary/examples/blog-starter
```

> This is a personal learning/recreation project and is not an official Vercel project.

---

# ✨ Features

## 🏠 Blog Homepage

The homepage displays the main blog content and available blog posts.

The page is structured using reusable components instead of putting the complete UI inside a single page component.

---

## 📝 Blog Listing

Blog information is stored in a JSON file:

```text
blog-data.json
```

Each blog contains information such as:

```text
blogLink
blogSrc
blogTitle
date
description1
descriptionTitle
description2
authorImg
authorName
```

This allows the same blog card component to display multiple posts.

---

## 🧩 Reusable Components

The project uses separate components for different sections of the UI.

Current component structure:

```text
components/
├── BlogCard.jsx
├── BlogInfo.jsx
├── Footer.jsx
├── Header.jsx
└── MainContent.jsx
```

### Header

Responsible for the website header/navigation.

### BlogInfo

Responsible for displaying blog information and connecting the blog data with the UI.

### BlogCard

Reusable component used to display individual blog posts.

### MainContent

Handles the main content section of the blog layout.

### Footer

Displays the footer section of the website.

---

# 🔀 Dynamic Routing

One of the main Next.js concepts practiced in this project is **Dynamic Routing**.

The project contains:

```text
app/
└── posts/
    └── [slug]/
        └── page.jsx
```

The `[slug]` folder creates a dynamic route.

For example:

```text
/posts/dynamic-routing
/posts/hello-world
/posts/preview
```

All of these URLs can use the same dynamic page:

```text
app/posts/[slug]/page.jsx
```

---

## 🔗 Slug Flow

The blog data contains a URL for each post.

Example:

```json
{
  "blogLink": "/posts/dynamic-routing",
  "blogTitle": "Dynamic Routing and Static Generation"
}
```

When the user selects the blog, the application navigates to:

```text
/posts/dynamic-routing
```

Next.js matches:

```text
/posts/[slug]
```

and receives:

```text
slug = dynamic-routing
```

The slug can then be used to identify the correct blog.

---

# 📊 Blog Data

The project currently uses a JSON file as the data source:

```text
blog-data.json
```

The data contains three blog posts.

### Current Posts

1. Dynamic Routing and Static Generation
2. Learn How to Pre-render Pages Using Static Generation with Next.js
3. Preview Mode for Static Generation

Each post contains:

* Blog URL
* Cover image
* Title
* Date
* Description
* Author image
* Author name

---

# 🗂️ Project Structure

The current project structure is approximately:

```text
nextjs-blog-clone/
│
├── app/
│   │
│   ├── posts/
│   │   └── [slug]/
│   │       └── page.jsx
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.js
│   └── page.js
│
├── components/
│   ├── BlogCard.jsx
│   ├── BlogInfo.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   └── MainContent.jsx
│
├── public/
│   └── Images/
│       ├── author/
│       └── content-image/
│
├── blog-data.json
│
├── .gitignore
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── package-lock.json
└── postcss.config.mjs
```

---

# 🛠️ Technologies Used

| Technology         | Purpose                       |
| ------------------ | ----------------------------- |
| Next.js            | React framework               |
| React              | User interface                |
| JavaScript         | Programming language          |
| Tailwind CSS       | Styling and responsive design |
| JSON               | Static blog data              |
| Next.js App Router | File-based routing            |
| Dynamic Routes     | Blog slug pages               |
| Git                | Version control               |
| GitHub             | Source code management        |
| Vercel             | Deployment                    |

The current repository uses **Next.js 16.3.1**, **React 19.2.8**, and **Tailwind CSS 4**.

---

# 🎨 Styling

The project uses **Tailwind CSS** for styling.

Responsive Tailwind classes are used to make the blog work across different screen sizes.

Example:

```jsx
<h1 className="text-6xl md:text-7xl lg:text-8xl">
  Dynamic Routing and Static Generation
</h1>
```

This allows the typography to change according to the screen size.

---

# 📱 Responsive Design

The website is designed to work on:

* 📱 Mobile
* 📱 Tablet
* 💻 Laptop
* 🖥️ Desktop

Responsive Tailwind utilities are used throughout the UI.

---

# 🖼️ Images

Blog images and author images are stored inside:

```text
public/Images/
```

Current image structure:

```text
public/
└── Images/
    ├── author/
    │   ├── jj.jpeg
    │   ├── tim.jpeg
    │   └── joe.jpeg
    │
    └── content-image/
        ├── cover.jpg
        ├── cover1.jpg
        └── cover2.jpg
```

Images inside the `public` directory can be referenced directly using paths such as:

```text
/Images/content-image/cover.jpg
```

---

# 🧠 Next.js Concepts Practiced

This project was created to practice several important Next.js concepts.

## 1. App Router

The project uses the Next.js App Router:

```text
app/
```

Pages are created using the file-system based routing system.

---

## 2. Layout

The application contains:

```text
app/layout.js
```

The root layout is used for the overall application structure.

---

## 3. Page

The homepage is:

```text
app/page.js
```

This page renders the main blog content.

---

## 4. Dynamic Routing

The project uses:

```text
app/posts/[slug]/page.jsx
```

to create dynamic blog routes.

---

## 5. Reusable Components

Instead of creating the entire website in one file, the UI is divided into reusable components:

```text
Header
BlogInfo
BlogCard
MainContent
Footer
```

This makes the project easier to maintain and understand.

---

## 6. Static Data

Instead of using a database or external API, blog data is currently stored in:

```text
blog-data.json
```

This keeps the project simple and focuses on understanding Next.js fundamentals.

---

# 🔄 Application Flow

The overall blog flow is:

```text
blog-data.json
      ↓
BlogInfo
      ↓
BlogCard
      ↓
User clicks blog
      ↓
/posts/[slug]
      ↓
Dynamic slug
      ↓
Blog detail page
```

Example:

```text
Dynamic Routing and Static Generation
              ↓
        dynamic-routing
              ↓
/posts/dynamic-routing
              ↓
app/posts/[slug]/page.jsx
```

---

# ⚙️ Installation

## 1. Clone the Repository

```bash
git clone https://github.com/ganjeliyajay/nextjs-blog-clone.git
```

---

## 2. Open the Project

```bash
cd nextjs-blog-clone
```

---

## 3. Install Dependencies

```bash
npm install
```

---

## 4. Start Development Server

```bash
npm run dev
```

---

## 5. Open in Browser

```text
http://localhost:3000
```

---

# 📦 Available Scripts

## Development

```bash
npm run dev
```

Starts the Next.js development server.

---

## Production Build

```bash
npm run build
```

Creates an optimized production build.

---

## Production Server

```bash
npm run start
```

Starts the production server after creating a production build.

---

## Lint

```bash
npm run lint
```

Runs ESLint to check the project for code-quality issues.

---

# 🚀 Deployment

The project can be deployed using Vercel.

Deployment flow:

```text
GitHub Repository
       ↓
Connect Repository to Vercel
       ↓
Vercel detects Next.js
       ↓
Build Project
       ↓
Deploy
       ↓
Live Website
```

After deployment, update the **Live Demo** section of this README with your actual Vercel URL.

---

# 📖 What I Learned

While building this project, I practiced:

* Next.js fundamentals
* App Router
* File-based routing
* Dynamic Routes
* Slug-based URLs
* React components
* Component reusability
* Props
* Array mapping
* JSON data handling
* Responsive Tailwind CSS
* Next.js layouts
* Static content
* Image handling
* Git
* GitHub
* Vercel deployment

---

# 🔮 Future Improvements

The current project uses JSON for blog content.

Possible future improvements include:

* [ ] Convert JSON blog data to Markdown
* [ ] Add Front Matter
* [ ] Use `gray-matter`
* [ ] Use `remark`
* [ ] Add more blog posts
* [ ] Add search functionality
* [ ] Add categories
* [ ] Add tags
* [ ] Add pagination
* [ ] Add dark mode
* [ ] Add related posts
* [ ] Add reading time
* [ ] Add SEO metadata
* [ ] Add Open Graph metadata
* [ ] Add sitemap
* [ ] Add RSS feed
* [ ] Connect a CMS
* [ ] Add database support
* [ ] Add an admin dashboard

---

# 🎯 Learning Purpose

This project was created as a **Next.js learning and practice project**.

The main purpose was to understand how to recreate a real-world blog interface and practice:

```text
Next.js
   ↓
App Router
   ↓
Components
   ↓
Static Data
   ↓
Dynamic Routing
   ↓
Slug
   ↓
Blog Details
```

---

# 🙏 Credits

This project is based on the design and concepts of the official **Vercel Next.js Blog Starter**.

### Original Demo

```text
https://next-blog-starter.vercel.app/
```

### Original Source

```text
https://github.com/vercel/next.js/tree/canary/examples/blog-starter
```

The official example demonstrates a statically generated blog using Next.js and Markdown. The original starter stores posts as Markdown files and uses tools such as `remark`, `remark-html`, and `gray-matter` for processing content and metadata.

> This repository is a personal learning/recreation project and is not affiliated with or maintained by Vercel.

---

# 👨‍💻 Author

## Ganjeliya Jay

GitHub:

```text
https://github.com/ganjeliyajay
```

Project Repository:

```text
https://github.com/ganjeliyajay/nextjs-blog-clone
```

---

# ⭐ Support

If you find this project useful for learning Next.js, you can:

* ⭐ Star the repository
* 🍴 Fork the repository
* 📚 Explore the source code
* 🚀 Build your own version

---

# 📄 License & Attribution

This repository is a personal learning/recreation project based on the publicly available Vercel Next.js Blog Starter example.

The original project and source code remain subject to their original licensing terms.

For the original source and license information, refer to:

```text
https://github.com/vercel/next.js/tree/canary/examples/blog-starter
```

---

## 🔗 Project Links

| Resource                   | Link                                                                |
| -------------------------- | ------------------------------------------------------------------- |
| My GitHub Repository       | https://github.com/ganjeliyajay/nextjs-blog-clone                   |
| Original Demo              | https://next-blog-starter.vercel.app/                               |
| Original Vercel Repository | https://github.com/vercel/next.js/tree/canary/examples/blog-starter |

---

## 💡 Project Status

**Status:** Completed — Learning Project

**Stack:** Next.js + React + Tailwind CSS

**Data Source:** Static JSON

**Routing:** Next.js App Router + Dynamic Slug Routing
