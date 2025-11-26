import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

import ThunderIcon from "@/components/icons/ThunderIcon";
import React from "react";

export default function PublicLayout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
