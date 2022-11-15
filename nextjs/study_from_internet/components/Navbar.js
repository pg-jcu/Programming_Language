import Link from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  return (
      <nav>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>  
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