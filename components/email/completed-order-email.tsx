import React from "react";
import { CompletedOrderTemplate } from "@/components/email/template/completed-order-template";

const CompletedOrderEmail = ({ token }: { token: string }) => {
  return <CompletedOrderTemplate token={token} />;
};

export default CompletedOrderEmail;
