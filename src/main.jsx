import { StrictMode } from "react";
import "./index.css";
import { routes } from "./App.jsx";
import { ViteReactSSG } from "vite-react-ssg";

export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL },
  ({ router, isClient }) => {
    // optional: any one-time client-side setup goes here
  }
);