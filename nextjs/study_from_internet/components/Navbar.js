import Link from "next/link";

export default function Navbar({ pathname }) {
  return (
      <nav>
        <Link href="/" legacyBehavior>
          <a className={pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={pathname === "/about" ? "active" : ""}>About</a>  
        </Link>
        <style jsx>{`
          nav {
            display: inline-block;
          }

          a {
            background: green;
            color: yellow;
            margin-right: 5px;
          }

          .active {
            color: red;
          }
        `}</style>
      </nav>
  );
}