import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import { ReactNode } from "react";


export default function PublicLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
