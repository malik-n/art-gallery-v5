import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { ThemeProvider } from "@emotion/react";

// pages
import Artists from "./pages/Artists/Artists.jsx";
import Paintings from "./pages/Paintings/Paintings.jsx";
import Gallery from "./pages/Gallery/Gallery.jsx";
import Tickets from "./pages/Tickets/Tickets.jsx";
import Donate from "./pages/Donate/Donate.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="artists" element={<Artists />} />
      <Route path="paintings" element={<Paintings />} />
      <Route path="gallery" element={<Gallery />} />
      <Route path="tickets" element={<Tickets />} />
      <Route path="donate" element={<Donate />} />
      <Route path="contact" element={<Contact />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
