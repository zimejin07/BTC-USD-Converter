import Converter from "./components/Converter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MarketData from "./components/MarketData";
import PortfolioCard from "./components/PortfolioCard";
import SendRequestButtons from "./components/SendRequestButtons";
import Transactions from "./components/transactions/Transactions";
import WalletBalanceCard from "./components/WalletBalanceCard";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="flex flex-col gap-6 px-4 pb-24">
        <WalletBalanceCard />
        <SendRequestButtons />
        <Converter />
        <MarketData />
        <PortfolioCard />
        <Transactions />
      </main>

      <Footer />
    </>
  );
}
