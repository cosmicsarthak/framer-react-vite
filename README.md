# 📌 To look out for in the Project while adding `components/` files

- `#framer/local/codeFile/[^/]+/` - Replace with `./`
- `#framer/local/canvasComponent/[^/]+/` - Replace With: `./`
- `#framer/local/css/[^/]+/` - Replace With: `./`
- `#framer/local/css/[^/]+/` - Replace With: `./`

> `./` is becoz these are all inside `components/` folder


---
---

---

# Issues I am facing

## with `Vite`

### `Uncaught TypeError: RefreshRuntime.injectIntoGlobalHook is not a function` at (index):6:16

🔧 Fix 4: Force Vite to Use @vitejs/plugin-react-swc
If nothing else works, try switching to the SWC compiler for better performance:

```
npm install @vitejs/plugin-react-swc --save-dev
```

Then update `vite.config.js`:

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
});

```

Restart Vite:
`npm run dev`



---

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

