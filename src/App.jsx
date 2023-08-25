import { Announcer } from "./ecommers/components/Announcer";
import { Footer } from "./ecommers/components/Footer";
import { Navbar } from "./ecommers/components/Navbar";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <main className="w-full text-black font-ecommers">
      <Announcer />
      <Navbar />
      <section className="flex flex-col justify-center items-center">
        <AppRouter />
      </section>
      <Footer />
    </main>
  );
};
