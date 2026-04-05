<div align="center">

  <a href="https://github.com/your-username/DocuChat-AI">
    <img src="https://readme-typing-svg.demolab.com?font=Plus+Jakarta+Sans&weight=800&size=45&pause=1000&color=0EA5E9&center=true&vCenter=true&width=800&height=100&lines=DocuChat+AI;Chat+With+Your+Documents;Secure.+Serverless.+Smart." alt="Typing SVG" />
  </a>

  <p align="center">
    <strong>Unlock the insights hidden in your PDFs through the power of conversational AI.</strong>
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript" />
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Google%20Gemini-8E75B2?style=for-the-badge&logo=googlebard&logoColor=white" alt="Gemini" />
  </p>

  <br />
</div>

---

## ✨ Features

* **🤖 Context-Aware AI Chat:** Ask questions, summarize sections, or extract data directly from your uploaded PDF.
* **🔒 Secure Serverless Architecture:** API keys are safely tucked away in backend environment variables, keeping them completely invisible to the frontend.
* **📱 Luxurious Responsive UI:** A glassmorphism design with dynamic animations that looks stunning on desktops, tablets, and mobile devices.
* **⚡ Client-Side Parsing:** PDFs are parsed instantly in the browser using `pdf.js` for blazing-fast text extraction.
* **💾 Exportable Conversations:** Save your AI chat logs to a `.txt` file with a single click for future reference.

---

## 🏗️ Architecture

DocuChat employs a modern Serverless Proxy pattern to ensure enterprise-grade security for API keys while maintaining a lightweight frontend.

1.  **Frontend (`index.html`):** Handles UI, user interactions, and parses the PDF text locally.
2.  **Backend (`api/chat.js`):** A serverless Node.js function hosted on Vercel that securely holds the Gemini API key and handles the communication with Google's servers.

---

## 🚀 Quick Start & Deployment

This project is perfectly tailored to be deployed on **Vercel** for free.

### Prerequisites
* A free [Google Gemini API Key](https://aistudio.google.com/app/apikey)
* A free [Vercel Account](https://vercel.com/)
* A GitHub account

### Deployment Steps

1.  **Fork or Clone** this repository to your local machine.
2.  **Push** the code to your own GitHub repository.
3.  Log in to **Vercel** and click **Add New Project**.
4.  Import your newly created `DocuChat-AI` repository.
5.  Before hitting deploy, expand the **Environment Variables** section and add:
    * **Name:** `GEMINI_API_KEY`
    * **Value:** `your_actual_api_key_here`
6.  Click **Deploy**! 🚀

Vercel will automatically route the frontend and spin up the secure serverless backend.

---

## 💻 Local Development

If you want to run this locally, you will need a local server environment that supports serverless functions (like Vercel CLI).

```bash
# 1. Install the Vercel CLI
npm i -g vercel

# 2. Link your project
vercel link

# 3. Pull your environment variables (so your local machine has the API key)
vercel env pull .env.development.local

# 4. Start the local development server
vercel dev
<div align="center">
<img src="https://www.google.com/search?q=https://capsule-render.vercel.app/api%3Ftype%3Dwaving%26color%3D0EA5E9%26height%3D150%26section%3Dfooter%26text%3DBuilt%2520with%2520Passion%26fontSize%3D20%26fontAlignY%3D70%26fontColor%3Dffffff" width="100%"/>
</div>


### Customization Note:

In the very first line of the code block, there is a URL that generates the animated typing text. If you change your repository name from `DocuChat-AI` to something else, you can edit the text right there in the URL where it says `lines=DocuChat+AI;...`.
