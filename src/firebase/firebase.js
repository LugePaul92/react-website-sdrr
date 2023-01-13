import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDdGS3m3eOXdi9Wc1wAsFHPzwYQ-ITN60E",
  authDomain: "uploading-files-sdrr.firebaseapp.com",
  projectId: "uploading-files-sdrr",
  storageBucket: "uploading-files-sdrr.appspot.com",
  messagingSenderId: "186432477469",
  appId: "1:186432477469:web:fccc0e180f7e536e3729f4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app);
