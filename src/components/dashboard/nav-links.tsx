import Link from "next/link";

const links = [
  { name: "Settle Up", href: "/home/settle-up" },
  { name: "Shopping List", href: "/home/shopping-list" },
  { name: "Todo", href: "/home/to-do" },
  { name: "Wishlist", href: "/home/wishlist" },
  { name: "Transaction Tracker", href: "/home/transaction-tracker" },
];

export default function NavLinks() {
  return links.map((link) => {
    return (
      <Link
        key={link.name}
        href={link.href}
        className="flex h-8 grow items-center justify-center gap-2 rounded-md bg-gray-50 text-black p-3 text-sm font-medium  md:flex-none md:justify-start md:p-2 md:px-3"
      >
        <div>{link.name}</div>
      </Link>
    );
  });
}
