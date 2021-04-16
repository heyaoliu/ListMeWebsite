import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <div className="flex flex-col min-h-screen justify-between">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
