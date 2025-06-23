import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Template00 from "./pages/Template00";
import Template03 from "./pages/Template03";
import Template01 from "./pages/Template01";
import Template05 from "./pages/Template05";
import Baddie from "./pages/Baddie";
import Template04 from "./pages/Template04";
import Template2 from "./pages/Template2";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/template03":
        title = "";
        metaDescription = "";
        break;
      case "/sarah":
        title = "";
        metaDescription = "";
        break;
      case "/note":
        title = "";
        metaDescription = "";
        break;
      case "/baddie":
        title = "";
        metaDescription = "";
        break;
      case "/template04":
        title = "";
        metaDescription = "";
        break;
      case "/ready":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Template00 />} />
      <Route path="/template03" element={<Template03 />} />
      <Route path="/sarah" element={<Template01 />} />
      <Route path="/note" element={<Template05 />} />
      <Route path="/baddie" element={<Baddie />} />
      <Route path="/template04" element={<Template04 />} />
      <Route path="/ready" element={<Template2 />} />
    </Routes>
  );
}
export default App;
