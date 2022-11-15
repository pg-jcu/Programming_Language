import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Title from "./Title";

export default function Layout({ children }) {
  const router = useRouter();
  const titleList = {'/': 'Home', '/about': 'About'};
  return (
    <>
      <Title title={titleList[router.pathname]} />
      <Navbar pathname={router.pathname}/>
      <div>{children}</div>
      <style jsx global>{`
        a:hover {
          color: orange;
        }
      `}</style>
    </>
  );
}