import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [pageCoun, setPageCoun] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState();
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [status, setStatus] = useState("");
  const [authors, setAuthors] = useState("");
  const [categories, setCategories] = useState("");
  const { Isbn } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books/" +
          Isbn
      )
      .then((res) => {
        console.log(res.data);
        setIsbn(res.data.isbn);
        setTitle(res.data.title);
        setPageCoun(res.data.pageCoun);
        setThumbnailUrl(res.data.thumbnailUrl);
        setShortDescription(res.data.shortDescription);
        setLongDescription(res.data.longDescription);
        setStatus(res.data.status);
        setCategories(res.data.categories);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books/" + Isbn,
        {
          title,
          isbn,
          pageCoun,
          publishedDate,
          thumbnailUrl,
          shortDescription,
          longDescription,
          status,
          authors,
          categories,
        }
      )
      .then((res) => {
        alert("save Successfully");
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
   
      <div className="offset-lg-3 col-lg-6">
        <form className="container" onSubmit={handleSubmit}>
          <div className="card" style={{ textAlign: "left" }}>
            <div className="card-title"></div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>isbn : {isbn}</label>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Title : {title}</label>
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>pageCoun : {pageCoun} </label>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>publishedDate : {publishedDate}</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>thumbnailUr : {thumbnailUrl}</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>shortDescription : {shortDescription}</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>longDescription : {shortDescription}</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>State : {status}</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Authors : {authors}</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>categories {categories}</label>
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <Link to="/" className="btn btn-danger">
                        Back
                      </Link>{" "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookDetail;
