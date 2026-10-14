# Viraj Dhas — AI & GenAI Portfolio

A responsive personal portfolio presenting my work in RAG, conversational voice bots, Agent Assist, Python backend engineering, data, and cloud automation.

## Features

- 33 descriptive pages with 15 reviewed public GitHub repositories and three professional Orvera.ai case studies.
- Bright and dark themes with persistent preferences.
- Futuristic personal branding and a circular gradient portrait alongside my personal information.
- Mobile navigation dock, responsive layouts, accessible dialogs, and reduced-motion support.
- Detailed experience, 69 technology descriptions, education, and contact information.
- Source-linked portfolio assistant with an optional free browser-local MiniLM embedding model.
- Interactive voice-response latency explorer.
- Contact brief that prepares an email draft; visitors send it from their own email app.

The engineering journal currently contains clearly labeled editorial drafts for review.

## Technology

HTML5, CSS3, JavaScript, Canvas 2D, Transformers.js 3.8.1, and Xenova/all-MiniLM-L6-v2. There is no server build step and no paid AI API.

## Run locally

```powershell
python -m http.server 5173
```

Open http://localhost:5173. HTTP serving is required for local JSON loading and browser workers.

## Publish free with GitHub Pages

1. Create a **public** repository named `viraj-portfolio` under `Viraj1711`.
2. Upload the contents of this folder to the repository root. `index.html` must be directly in the root, not inside another folder. Include `.nojekyll`.
3. Commit the files to `main`.
4. Open **Settings → Pages**.
5. Set **Source** to **GitHub Actions**. The included `.github/workflows/pages.yml` publishes the static assets automatically on pushes to `main`.
6. Wait for the Pages deployment to succeed. The expected project URL is **https://viraj1711.github.io/viraj-portfolio/**; it is not live until deployment succeeds.

Use GitHub's supplied address to avoid domain-registration costs. This package contains static assets only and does not need a paid hosting plan, server, or custom domain.

## Update the website

Replace the changed source files and commit to `main`. GitHub Pages will publish the updated version.

## Model behavior

The optional semantic model downloads its assets from Hugging Face and jsDelivr, then performs inference in the visitor's browser. Questions are not sent to an inference provider. Without model assets, keyword retrieval remains available. Model download and runtime compatibility depend on the visitor's browser and connectivity.

## Contact

- Email: dhasviraj0707@gmail.com
- GitHub: https://github.com/Viraj1711
- LinkedIn: https://www.linkedin.com/in/viraj-dhas

## Hosting references

- [GitHub Pages and free public repositories](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages)
- [Configure a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
