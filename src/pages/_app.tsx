import Navbar from "@/components/navigation/Navbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import AuthState from "@/context/auth/AuthState"
import Footer from "@/components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "@/redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <Provider store={store}>
        <SessionProvider session={pageProps.session}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </SessionProvider>
      </Provider>
    </AuthState>
  );
}
