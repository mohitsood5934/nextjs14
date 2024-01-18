import Link from "next/link";

export default function Header() {
  return (
    <div className="w-full absolute text-white z-10">
      <nav className="container relative flex flex-wrap items-centre justify-between mx-auto">
        <div className="space-x-4 text-xl">
          <Link href="/" className="font-bond text-3xl">
            Home
          </Link>
          <Link href="/performance">Performance</Link>
          <Link href="/reliability">Reliability</Link>
          <Link href="/scale">Scale</Link>
        </div>
      </nav>
    </div>
  );
}
