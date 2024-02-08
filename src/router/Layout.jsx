import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer, Header } from "../components";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ScrollRestoration getKey={(location) => location.key} />
    </div>
  );
};

export default Layout;
