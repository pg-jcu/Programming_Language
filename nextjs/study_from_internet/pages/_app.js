import Navbar from "../components/Navbar";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component { ...pageProps } />
      <style jsx global>{`
        a:hover {
          color: red;
        }
      `}</style>
    </>
  );
}