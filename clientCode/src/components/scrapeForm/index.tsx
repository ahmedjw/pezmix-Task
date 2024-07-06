import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import CateorySelect from "../categorySelect";
import { FieldType, ScrapeFormI, resource } from "./interface";
import ScrapeResoursesComponent from "../ScrapeResoursesComponent";
import { ScrapeEmails } from "../../api/quieries";
import { toast } from "react-toastify";
import { AxiosResponse } from "axios";
import { EmailScrapPostData } from "../../api/interface";

const ScrapeForm: React.FC<ScrapeFormI> = ({
  scrapeResources,
  setCategory,
}) => {
  const [scrapingWebsite, setScrapingWebsite] = useState<any>("");
  const [parametr, setParametr] = useState<string>("");
  const handleSubmit = async () => {
    const url = new URL(scrapingWebsite.link);
    const searchParams = url.searchParams;
    searchParams.set(scrapingWebsite.parameterName, parametr);
    await ScrapeEmails(url).then(
      (res: AxiosResponse<EmailScrapPostData> | undefined) => {
        if (res?.status === 200) {
          toast.info("Emials scrapeing process is complete ", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      }
    );
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item<FieldType> label="category" name="category">
        <CateorySelect setCategory={setCategory} />
      </Form.Item>
      {scrapeResources?.length > 0 && (
        <Form.Item label="Scrap Resources">
          {scrapeResources?.map((resource: resource) => (
            <ScrapeResoursesComponent
              {...resource}
              setScrapingWebsite={setScrapingWebsite}
            />
          ))}
        </Form.Item>
      )}
      <Form.Item<FieldType> label="parameter" name="parameter">
        <Input onChange={(e) => setParametr(e.target.value)} />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          disabled={scrapeResources?.length === 0}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ScrapeForm;
