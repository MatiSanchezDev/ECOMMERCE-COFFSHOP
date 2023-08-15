import { Navbar } from "./ecommers/components/Navbar";
import { AppRouter } from "./router/AppRouter";

export const App = () => {
  return (
    <main className="w-screen text-black font-ecommers">
      <Navbar />
      <AppRouter />
    </main>
  );
};
