import { usePathname } from "next/navigation";

const pathname = usePathname();

export default function Navber() {
  const pathname = usePathname();

  const isHome = pathname === "/";
  return <div></div>;
}
