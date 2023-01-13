import React, { useState, useEffect } from "react";
import { ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from "./firebase";

export const Pdffiles = () => {
  const [pdfList, setPdfList] = useState([]);

  const pdfListRef = ref(storage, "booklets/");
  useEffect(() => {
    listAll(pdfListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setPdfList((prev) => [...prev, url]);
        });
      });
    });
  }, []);
  return (
    <>
      {pdfList.map((pdf) => {
        console.log("Pdf List", pdf);
      })}
    </>
  );
};
