import React, { useState } from "react";
import { Button, Form, Input, Typography } from "antd";
import TextArea from "antd/es/input/TextArea";
import { SendEmail } from "../../api/quieries";
import { AxiosResponse } from "axios";
import {
  ErrorNotifictionHandler,
  SuccsessNotifictionHandler,
} from "../../utils/NotifictionHandlers";

const EmailSendService: React.FC = () => {
  const [emailReciver, setEmailReciver] = useState<string>("");
  const [emailObject, setEmailObject] = useState<string>("");
  const [emailBody, setEmailBody] = useState<string>("");
  const { Title } = Typography;

  const handleSendEmailProcess = async () => {
    await SendEmail({
      to: emailReciver,
      object: emailObject,
      body: emailBody,
    }).then((res: AxiosResponse | undefined) => {
      if (res?.status === 200)
        SuccsessNotifictionHandler("Emials Send process is complete ");
      else ErrorNotifictionHandler("There is an Error process failed ");
    });
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
    >
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Title level={3}>Email Send Service</Title>
      </Form.Item>
      <Form.Item required name="to" label="Send To">
        <Input type="email" onChange={(e) => setEmailReciver(e.target.value)} />
      </Form.Item>
      <Form.Item required label="Email title" name="object">
        <Input onChange={(e) => setEmailObject(e.target.value)} />
      </Form.Item>
      <Form.Item required label="Messege" name="body">
        <TextArea onChange={(e) => setEmailBody(e.target.value)} />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button
          type="primary"
          htmlType="submit"
          onClick={handleSendEmailProcess}
        >
          Send Email
        </Button>
      </Form.Item>
    </Form>
  );
};

export default EmailSendService;
