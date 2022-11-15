import Link from "next/link";

export default function Navbar() {
  return (
      <nav>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a>About</a>  
        </Link>
        <style jsx>{`
          nav {
            display: inline-block;
            background: green;
          }

          a {
            color: yellow;
            text-decoration: none;
            padding-right: 5px;
          }
        `}</style>
      </nav>
  );
}