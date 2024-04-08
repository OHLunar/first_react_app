import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewsItem from "./components/NewsItem";

const App = () => {
  const news = [
    {
      image:
        "https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_728,h_441/1190138?t=1",
      title: "המטרות של מכבי חיפה: לפצות את הקהל ולהחזיר את הכבוד",
    },
    {
      image:
        "https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_728,h_441/1190068?t=1",
      title:
        '"צריך להיפרד מערן זהבי בצורה מכובדת – ויהיו הזדמנויות לעשות את זה"',
    },
    {
      image:
        "https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_728,h_441/1190486?t=1",
      title: "ליברפול איבדה את הפסגה, יונייטד איבדה את הכבוד: האמירה המשפילה",
    },
  ];

  const handleClick = () => {
    toast.success("Hello from ReactJS");
  };

  return (
    <>
      <ToastContainer />

      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-12 col-md-6 box2">
            <div className="crop">
              <img
                className="img"
                src="https://sport1images.maariv.co.il/image/upload/f_auto,fl_lossy,c_thumb,g_north,w_833,h_642/1190550"
              />
            </div>
          </div>
          <div className="col-lg-4 col-12 col-md-6 box1">
            {news.map((item, index) => (
              <NewsItem key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
