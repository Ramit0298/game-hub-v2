import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import App from "./App";
import theme from "./theme";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retry failed queries thrice (will retry on failure)
      cacheTime: 1000 * 60 * 5, // Cache data for 5 minutes (if no observers, it will be garbage collected)
      staleTime: 1000 * 60, // Data is fresh for 1 minute (after this time, it will be considered stale)
      refetchOnWindowFocus: true, // Refetch data when the window is focused
      refetchOnReconnect: true, // Refetch data when the browser reconnects
      refetchOnMount: true, // Refetch data when the component mounts
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <QueryClientProvider client={queryClient}>
        <App />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
