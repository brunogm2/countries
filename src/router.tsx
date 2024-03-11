import { Route, Routes } from "react-router-dom";
import { Countries } from "./view/Pages/Countries";

import DefaultLayout from "./view/layouts/DefaultLayout";
import { Historic } from "./view/Pages/Historic";

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path="/" element={<Countries />} />
                <Route path="/historic" element={<Historic />} />
            </Route>
        </Routes>
    )
}
