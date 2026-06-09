import ClinicBanner from "./components/ClinicBanner";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LeadForm from "./components/LeadForm";
import WhyWhistle from "./components/WhyWhistle";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LeadForm />
      <ClinicBanner />
      <WhyWhistle />
      <FAQ />
      <Footer />
    </>
  );
}

export default App;