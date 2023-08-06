import { Routes, Route } from "react-router-dom";

import { BookingPage } from "./pages/BookingPage";
import { TourDetailPage } from "./pages/TourDetailPage";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { NotFoundPage } from "./pages/NotFoundPage";


export function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/booking" element={<BookingPage />} />
                <Route path="/booking/:id" element={<TourDetailPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/admin/orders" element={<OrdersPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
    )
}
