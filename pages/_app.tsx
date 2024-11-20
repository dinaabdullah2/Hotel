import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AuthProvider } from "../auth/AuthProvider";
import { MantineProvider } from "@mantine/core";
import Footer from "./component/template/Footer";
import Navbar from "./component/template/Navbar";


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: { refetchOnWindowFocus: false },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <MantineProvider>
            <Navbar />
            <Component {...pageProps} />
            <ToastContainer />
            <Footer />
          </MantineProvider>
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
}
