import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    federation({
      name:"remote_app",
      filename:"remoteEntry.js",
      exposes:{
        "./App":"./src/App"
      },
      shared:["react", "react-dom"]
    }),
  ],
  base:'/page1/',
  build:{
    modulePreload:false,
    target:"esnext",
    minify:false,
    cssCodeSplit:false
  },
  server: { 
    cors: { 
    origin: 'http://3.83.250.40',  
    methods: ['GET', 'POST', 'OPTIONS'], 
    allowedHeaders: ['Origin', 'Content-Type', 'Accept', 'Authorization'] 
    }
    }

})
