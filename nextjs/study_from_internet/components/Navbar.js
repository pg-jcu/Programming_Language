import Link from "next/link";

export default function Navbar({ pathname }) {
  return (
      <nav>
        <img src="/vercel.svg" alt="image" />
        <div>
          <Link href="/" legacyBehavior>
            <a className={pathname === "/" ? "active" : ""}>Home</a>
          </Link>
          <Link href="/about" legacyBehavior>
            <a className={pathname === "/about" ? "active" : ""}>About</a>  
          </Link>
        </div>
        <style jsx>{`
          nav {
            display: flex;
            gap: 10px;
            flex-direction: column;
            align-items: center;
            padding-top: 20px;
            padding-bottom: 10px;
            box-shadow: 0px 50px 100px -20px rgba(50, 50, 93, 0.25),
              0px 30px 60px -30px rgba(0, 0, 0, 0.3);
          }
          nav div {
            display: flex;
            gap: 10px;
          }
          nav a {
            font-weight: 600;
            font-size: 18px;
          }
          img {
            max-width: 100px;
            margin-bottom: 5px;
          }
          .active {
            color: red;
          }
        `}</style>
      </nav>
  );
}