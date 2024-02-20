import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PdfPage from "../pages/PdfPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pdf",
    element: <PdfPage />,
  },
]);

export default router;
