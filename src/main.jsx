import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/router.jsx";
import AuthProvider from "./providers/AuthProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeProvider from "./providers/ThemeProvider";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <React.StrictMode>
        <QueryClientProvider client={queryClient}>
          <div className="max-w-[2000px] mx-auto">
            <RouterProvider router={router} />
          </div>
        </QueryClientProvider>
      </React.StrictMode>
    </AuthProvider>
  </ThemeProvider>
);
