import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { CategoryT } from "./interfaces";
import { storedScrapeResources } from "./utils/consts";
import EmailScrapingService from "./components/emailScrapingService";
import "react-toastify/dist/ReactToastify.css";
import EmailSendService from "./components/emailSendService";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Services from "./components/servicesComponent";
import Layout from "./components/Layout";
import { Typography } from "antd";

const App: React.FC = () => {
  const [category, setCategory] = useState<CategoryT>("");
  const [scrapeResources, setScrapeResourses] = useState([]);
  const { Title } = Typography;
  useEffect(() => {
    setScrapeResourses(storedScrapeResources[category]);
  }, [category]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Services />} />
            <Route path="service/">
              <Route
                path="emailscraping/"
                element={
                  <EmailScrapingService
                    setCategory={setCategory}
                    scrapeResources={scrapeResources}
                  />
                }
              />
              <Route path="emailsend/" element={<EmailSendService />} />
            </Route>
            <Route
              path="features"
              element={<Title level={3}>Page In development mode </Title>}
            />
            <Route
              path="pricing"
              element={<Title level={3}>Page In development mode </Title>}
            />
            <Route
              path="faq"
              element={<Title level={3}>Page In development mode </Title>}
            />
            <Route
              path="*"
              element={<Title level={3}>Page In Not Found </Title>}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* >
    
      
      </div> */}
      <ToastContainer />
    </>
  );
};

export default App;
