import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/Header/NavBar";
import Services from "./components/Services/Services";
import Works from "./components/Works/Works";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <NavBar /> */}
      {/* <News /> */}
      {/* <Services /> */}
      <Works />
      <Footer />
    </>
  );
}

export default App;
