import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import CateorySelect from "../categorySelect";
import { FieldType, ScrapeFormI, resource } from "./interface";
import ScrapeResoursesComponent from "../ScrapeResoursesComponent";
import { ScrapeEmails } from "../../api/quieries";
import { AxiosResponse } from "axios";
import { EmailScrapPostData } from "../../api/interface";
import {
  ErrorNotifictionHandler,
  SuccsessNotifictionHandler,
} from "../../utils/NotifictionHandlers";

const EmailScrapingService: React.FC<ScrapeFormI> = ({
  scrapeResources,
  setCategory,
}) => {
  const [scrapingWebsite, setScrapingWebsite] = useState<any>("");
  const [parametr, setParametr] = useState<string>("");
  const { Title } = Typography;

  const handleScrapeProcess = async () => {
    const url = new URL(scrapingWebsite.link);
    const searchParams = url.searchParams;
    searchParams.set(scrapingWebsite.parameterName, parametr);
    await ScrapeEmails(url).then(
      (res: AxiosResponse<EmailScrapPostData> | undefined) => {
        console.log(res);
        if (res?.status === 200)
          SuccsessNotifictionHandler("Emials scrapeing process is complete ");
        else ErrorNotifictionHandler("There is an Error process failed ");
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
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Title level={3}>Email Scrape Service</Title>
      </Form.Item>
      <Form.Item<FieldType> label="category">
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
          disabled={scrapingWebsite === "" || parametr.length < 3}
          onClick={handleScrapeProcess}
        >
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmailScrapingService;
