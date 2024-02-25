import "./App.css"
import { Footer } from "./pages/footer";

import { Perfil } from "./pages/perfil/perfil";

export const App = () => {
  return (
    <>
      <div className="App body">
        <Perfil />
      </div>
      <Footer />
    </>
  );
}
