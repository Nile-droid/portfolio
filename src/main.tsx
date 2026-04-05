import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("SYSTEM: Initializing React Mount...");
const rootElement = document.getElementById('root');
console.log("SYSTEM: Root Element found:", rootElement);

if (rootElement) {
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
  console.log("SYSTEM: Load sequence initiated.");
} else {
  console.error("SYSTEM ERROR: UNABLE TO FIND MOUNT POINT #root");
}
