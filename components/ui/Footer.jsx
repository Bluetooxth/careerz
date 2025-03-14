import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="flex justify-center items-center w-full bg-sky-500/10 backgrop-blur-3xl py-3">
      <p>
        Developed by{" "}
        <Link href={"https://priyanxhu.me"} className="underline">
          {" "}
          Priyanshu
        </Link>
      </p>
    </footer>
  );
}
