import { BrowserRouter, Routes, Route } from "react-router-dom";

// The routes declaration module

import { FC } from "react";
import { SearchResults } from "./pages/search-results";
import { Page404 } from "./pages/p-404";

export const Pages: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Page404 />} />

                {/* Search results page */}
                <Route path="/" element={<SearchResults />} />
            </Routes>
        </BrowserRouter>
    );
};
