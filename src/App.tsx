import { QueryClient, QueryClientProvider } from "@tanstack/react-query"

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router";
import { ThemeProvider } from "./app/contexts/ThemeContext";

export function App() {
    const queryClient = new QueryClient();

    return (
        <BrowserRouter>
            <ThemeProvider>
                <QueryClientProvider client={queryClient}>
                    <Router />
                </QueryClientProvider>
            </ThemeProvider>
        </BrowserRouter>
    )
}

