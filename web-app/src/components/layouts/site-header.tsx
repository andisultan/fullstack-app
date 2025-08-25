import Link from "next/link";
import { Input } from "../ui/input";

export default function SiteHeader() {
  return (
    <header className="py-4 border-b border-solid">
      <nav className="container m-auto grid grid-cols-3">
        <Link href="/">Store</Link>
        <div className="flex justify-between">
          <Input type="search" name="search" placeholder="Search product..." />
        </div>
        <ul className="list-none flex justify-end gap-4 items-center">
          <li>
            <Link href="/smartphone">Smartphone</Link>
          </li>
          <li>
            <Link href="/electronic">Electronic</Link>
          </li>
          <li>
            <Link href="/furniture">Furniture</Link>
          </li>
          <li>
            <Link href="/fashion">Fashion</Link>
          </li>
          <li className="ml-6">
            <Link href="/furniture">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
