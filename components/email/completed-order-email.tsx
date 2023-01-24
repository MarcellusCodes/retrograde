import React from "react";
import { CompletedOrderTemplate } from "@/components/email/template/completed-order-template";

const CompletedOrderEmail = ({ input }: { input: string }) => {
  return <CompletedOrderTemplate input={input} />;
};

export default CompletedOrderEmail;
