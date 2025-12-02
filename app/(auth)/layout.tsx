import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";

export default function PublicLayout({ children }: { children: any }) {
  return (
    <>
      <Navbar />
      <div className="py-25 mt-25">{children}</div>
      <Footer />
    </>
  );
}
