import { render } from "@react-email/render";
import sendgrid from "@sendgrid/mail";
import { CompletedOrderEmail } from "@/components/email/index";

export function comparePieces(scrapedPieces: number) {
  if (scrapedPieces <= 50) {
    return 0;
  } else if (scrapedPieces <= 100) {
    return 10;
  } else if (scrapedPieces <= 300) {
    return 15;
  } else if (scrapedPieces <= 500) {
    return 25;
  } else return 50;
}

export async function sendMail() {
  sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

  const emailHtml = render(<CompletedOrderEmail />);

  const options = {
    from: "retrograde.ecommerce@gmail.com",
    to: "marcel.pohl4321@gmail.com",
    subject: "Your Order #47632623",
    html: emailHtml,
  };

  sendgrid.send(options);
}
