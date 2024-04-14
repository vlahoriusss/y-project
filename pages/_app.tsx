import type { AppProps } from "next/app";
import { Toaster } from "react-hot-toast";
import { SessionProvider } from "next-auth/react";
import Layout from "@/components/Layout";
import LoginModal from "@/components/modals/LoginModal";
import RegisterModal from "@/components/modals/RegisterModal";
import "@/styles/globals.css";
import EditModal from "@/components/modals/EditModal";
import PostModal from "@/components/modals/PostModal";

export default function App({ Component, pageProps }: AppProps) {
  return (
<div>
  <h1 className="text-white text-xl">There's Something Wrong with your Proxima Account. </h1>
</div>
  );
}