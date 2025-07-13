<h1>Overview</h1>

TODO

<h2>Setup</h2>
1. Create a Spring Starter Project and set up a web app with a view controller.
2. Open up the terminal in your IDE with the root level. Enter these commands in order:
```
npm create vite@latest frontend -- --template react
cd frontend
npm install
```

3. Add **outDir** configuration to build of **vite.config.js**. It should look like this:
```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
      outDir: "../src/main/resources/static"
  }
})
```
4. Add **watch script** to **package.json** folder:
```
{
    "scripts": {
        "watch": "vite build --watch --emptyOutDir",
        ...
    },
    ...
}
```

5. After making changes, run this command while you're in the **frontend folder**. It will save the changes by exporting under **static folder**:
```
npm run watch
```