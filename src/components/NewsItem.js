import React from "react";

const NewsItem = (props) => {
  return (
    <div className="row rowItem">
      <div className="col-lg-5">
        <img className="art_image" src={props.item.image} />
      </div>
      <div className="col-lg-7">
        <p className="title">{props.item.title}</p>
      </div>
    </div>
  );
};

export default NewsItem;
