import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#608197] py-5 mt-2 dark:bg-cyan-800">
    <div className="flex justify-between max-w-2xl mx-auto px-4 mt-3 ">
      <Link href="/" className="font-bold text-3xl">
        Mahmoud<span className="text-primary">Blog</span>
      </Link>
      <Link href={"https://mail.google.com/mail/u/0/#inbox"} className="flex gap-2 ">
      <Mail className="text-primary"/>
      <p>mahmoudderbala27@gmail.com</p>
      </Link>
    </div>
    </div>
  );
}
