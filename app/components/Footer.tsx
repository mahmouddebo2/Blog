import { Mail } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#608197] py-5 mt-2 dark:bg-cyan-800">
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between   max-w-2xl mx-auto px-4 mt-3">
        <Link href="/" className="font-bold text-3xl mb-2 md:mb-0">
          Mahmoud<span className="text-primary">Blog</span>
        </Link>
        <Link
          href={"https://mail.google.com/mail/u/0/#inbox"}
          className="flex items-center gap-2"
        >
          <Mail className="text-primary" />
          <p>mahmoudderbala27@gmail.com</p>
        </Link>
      </div>
    </div>
  );
}
