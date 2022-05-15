import axios from "axios";
import React, { useState } from "react";

const NewsShow = () => {
  const [news, setNews] = useState([]);
  const getNews = () => {
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=6004b8fcb1604003b4ead57854e8d2c2`
      )
      .then((response) => {
        setNews(response.data.articles);
      })
      .catch((error) => console.log("error", error));
  };
  return (
    <>
      <div className="container my-3">
        <div className="row">
          <div className="col-4">
            <button className="btn btn-primary" onClick={getNews}>
              Get News
            </button>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {news.map((values) => {
            return (
              <div className="col-4" key={values.publishedAt}>
                <div className="card" style={{ width: "18rem" }}>
                  <img
                    src={
                      values.urlToImage
                        ? values.urlToImage
                        : "https://timesofindia.indiatimes.com/photo/msid-91572053,imgsize-31882.cms"
                    }
                    className="card-img-top"
                    alt="..."
                  />
                  <div className="card-body">
                    <h5 className="card-title">{values.title}</h5>
                    <p className="card-text">{values.description}</p>
                    <a href="#" className="btn btn-primary">
                      Home
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default NewsShow;
