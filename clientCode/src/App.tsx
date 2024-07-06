// @ts-nocheck
import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import ScrapeForm from "./components/scrapeForm";
import { CategoryT } from "./interfaces";
import { storedScrapeResources } from "./utils/consts";
import NavBar from "./components/navBar";
import { contentStyle } from "./components/navBar/Style";
import "react-toastify/dist/ReactToastify.css";

const App: React.FC = () => {
  const [category, setCategory] = useState<CategoryT>("");
  const [scrapeResources, setScrapeResourses] = useState("");
  useEffect(() => {
    setScrapeResourses(storedScrapeResources[category]);
  }, [category]);

  return (
    <>
      <NavBar />
      <div style={contentStyle}>
        <ScrapeForm
          setCategory={setCategory}
          scrapeResources={scrapeResources}
        />
      </div>
      <ToastContainer />
    </>
  );
};

export default App;
