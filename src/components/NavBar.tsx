import Link from "next/link";

const links = [
  {
    href: "/auctions",
    label: "Auctions",
  },
  {
    href: "/bids",
    label: "Buy bids",
  },
  // {
  //   href: "/",
  //   label: "Profile",
  // },
];

export default function NavBar() {
  return (
    <div className="border-b">
      <nav className="flex justify-between items-center gap-20 max-w py-5">
        <Link href="/" className="font-bold text-2xl">
          LOGO
        </Link>

        <div className="flex items-center gap-5">
          {links.map((link) => (
            <Link
              key={link.label.replaceAll(" ", "-")}
              href={link.href}
              className="capitalize"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
