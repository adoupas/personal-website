# Personal Website - Sakis Doupas

A professional personal website showcasing my experience as a Research Associate at Athena R.C. Built with Astro and featuring a modern, responsive design.

[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)

## 🌐 Live Website

Visit the live website at: [https://adoupas.github.io/personal-website/](https://adoupas.github.io/personal-website/)

## 🚀 Project Structure

Inside of the project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
├── Dockerfile
├── LICENSE
└── package.json
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## 🐳 Docker Support

This project includes Docker support for containerized deployment.

### Building the Docker Image

```bash
docker build -t personal-website .
```

### Running the Container

```bash
docker run -p 8080:80 personal-website
```

The website will be available at http://localhost:8080

## 📝 License

This project is licensed under the GNU General Public License v2.0 - see the [LICENSE](LICENSE) file for details.

## 🔒 Security

Security considerations for this website are documented in the [SECURITY.md](SECURITY.md) file.
