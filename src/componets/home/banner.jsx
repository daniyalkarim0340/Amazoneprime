import Cards from "../cards";
import Footer from "../footer";
import { FaCheck } from "react-icons/fa";
import NButton from "../button/index";
import Heading from "../heading/index";
import Paragraph from "../para/index";

const Baner = () => {
  const highlights = [
    'Unlimited movies, TV shows, and more',
    'Download and watch offline',
    'New releases and exclusive originals',
  ];

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-20%-500 bg-[#0F171E]">

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

            <div>
              <Heading className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white">
                Amazon Prime
              </Heading>

              <Paragraph className="mt-4 text-slate-600 max-w-xl">
                Stream movies, TV shows, and exclusive originals with Amazon Prime. Enjoy a
                seamless experience across devices with downloads, recommendations, and more.
              </Paragraph>

              <ul className="mt-6 space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-indigo-600 text-white text-xs">
                      <FaCheck />
                    </span>
                    <Paragraph className="text-slate-200">{highlight}</Paragraph>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-3">
                <NButton className="bg-indigo-600 text-white hover:bg-indigo-500 px-5 py-3 text-sm font-semibold shadow-sm">
                  Start Free Trial
                </NButton>
                <a href="#cards" className="text-sm text-indigo-400 hover:underline">
                  Browse titles
                </a>
              </div>
            </div>

            <div className="order-first lg:order-last">
              <div className="w-full rounded-lg bg-slate-100 p-4 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1505685296765-3a2736de412f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3&s=0d0a7b3b7f6cc1e5f0a9d4f5c3b4b2a8"
                  alt="Streaming"
                  className="w-full h-56 object-cover rounded-md sm:h-72 lg:h-80"
                />
              </div>
            </div>

          </div>
        </section>

     
        <section id="cards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <Heading className="text-2xl font-bold text-amber-50 mb-6">Popular on Prime</Heading>
          <Cards />

          <div className="mt-10">
            <Heading className="text-2xl font-bold text-amber-50 mb-6">Most watched TV</Heading>
            <Cards />
          </div>
        </section>

      </main>

      
      <Footer />
    </>
  );
};

export default Baner;
