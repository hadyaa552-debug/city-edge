import Header from "@/components/header";
import Hero from "@/components/hero";
import OfferTimer from "@/components/offer-timer";
import Projects from "@/components/projects";
import AboutDeveloper from "@/components/about-developer";
import ContactForm from "@/components/contact-form";
import Footer from "@/components/footer";
import WhatsAppFloat from "@/components/whatsapp-float";
import MobileBottomBar from "@/components/mobile-bottom-bar";
import OfferPopup from "@/components/offer-popup";

export default function Home() {
  return (
    <>
      <OfferPopup />
      <Header />
      <Hero />
      <OfferTimer />
      <Projects />
      <AboutDeveloper />
      <ContactForm />
      <Footer />
      <WhatsAppFloat />
      <MobileBottomBar />
    </>
  );
}
