import Link from "next/link";
import { ModeToggle } from "./ModelToggle";

export default function Navbar() {
  return (
    <div className="w-full relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
        <Link href="/" className="font-bold text-3xl">
            Mahmoud<span className="text-primary">Blog</span>
        </Link>
        <ModeToggle/>
    </div>
  )
}
