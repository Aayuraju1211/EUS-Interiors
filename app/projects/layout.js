import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppFloat from "../components/WhatsAppFloat";

export default function ProjectsLayout({ children }) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
            <WhatsAppFloat />
        </>
    );
}
