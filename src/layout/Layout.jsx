import Navbar from "./Navbar";

/** The shared layout for all pages of the app */
export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
