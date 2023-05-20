import React from "react";
import ReactDOM from "react-dom/client";
import Dashboad from "./Dashboard";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";
import { QueryClient, QueryClientProvider } from "react-query";
import Auth from "./auth";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { SnackbarProvider } from "notistack";
import { AppRouter } from "./Approuter";
const queryCient  = new QueryClient()

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryCient}>
        <SnackbarProvider
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center"
        }} 
        maxSnack={3}>
          <AppRouter></AppRouter>
      </SnackbarProvider>
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
