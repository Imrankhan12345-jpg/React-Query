import React from "react";
import Navigation from "./config/Navigation";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Navigation />
        </QueryClientProvider>
    );
};

export default App;