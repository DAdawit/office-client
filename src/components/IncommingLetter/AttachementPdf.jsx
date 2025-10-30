"use client";
import React from "react";
import Title from "../common/SubTitle";
import SubTitle from "../common/SubTitle";
import { useState } from "react";
import { Document, Page } from "react-pdf";
// import filepdf from "/Letterhead_AAHDC.pdf";
const AttachmentPdf = () => {
  const [numPages, setNumPages] = useState();
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess(numPages) {
    setNumPages(numPages);
  }
  return (
    <div className="container w-full mx-auto custom-p-20 bg-white rounded-[10px] mt-5">
      <SubTitle text="Attached Letter" />

      <div className="w-full h-[90vh] border rounded-lg overflow-hidden">
        <embed
          src="https://pdfobject.com/pdf/sample.pdf"
          type="application/pdf"
          width="100%"
          height="700px"
        />{" "}
        {/* <object data="/public/Letterhead_AAHDC.pdf" type="application/pdf">
          <p>
            Your browser does not support PDF viewing. Please download the PDF
            file to view it.
          </p>
        </object> */}
        {/* <Document
          file="/public/Letterhead_AAHDC.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p> */}
        {/* <iframe
          src="/public/Letterhead_AAHDC.pdf"
          width="100%"
          height="100%"
          style={{ border: "none" }}
        /> */}
      </div>
    </div>
  );
};

export default AttachmentPdf;
