import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App";
import router from "./components/routes/Route";

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}>
        <App/>
    </RouterProvider>
)