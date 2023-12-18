import { jsPDF } from "jspdf";
import * as htmlToImage from "html-to-image";

export const GeneratePdf = async () => {
  const doc = new jsPDF("p", "px");
  const elements = document.getElementsByClassName("printElement");
  await printPdf({ elements, doc });
  return doc.save(`ESG_Readings.pdf`);
};

const printPdf = async ({
  elements,
  doc,
}: {
  elements: HTMLCollectionOf<Element>;
  doc: jsPDF;
}) => {
  let top = 20;
  const padding = 10;

  for (let i = 0; i < elements.length; i++) {
    const elementItem = elements.item(i) as HTMLElement;
    const image = await htmlToImage.toPng(elementItem);
    let elHeight = elementItem.offsetHeight;
    let elWidth = elementItem.offsetWidth;
    const pageHeight = doc.internal.pageSize.getHeight();
    const pageWidth = doc.internal.pageSize.getWidth();

    if (elWidth > pageWidth) {
      const ratio = pageWidth / elWidth;
      elHeight = elHeight * ratio - padding;
      elWidth = elWidth * ratio - padding;
    }

    if (top + elHeight > pageHeight) {
      doc.addPage();
      top = 20;
    }

    doc.addImage(
      image,
      "PNG",
      padding,
      top,
      pageWidth - padding,
      elHeight,
      `image${i}`
    );
    top += elHeight;
  }
};
