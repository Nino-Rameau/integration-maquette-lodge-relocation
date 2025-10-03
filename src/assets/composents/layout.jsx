import Header from "./header";
import Footer from "./footer";
import '../style/style.css'

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-100vh">
      <Header />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;