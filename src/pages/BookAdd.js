import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
const BookAdd = () => {
  const [isbn, setIsbn] = useState("");
  const [title, setTitle] = useState("");
  const [pageCoun, setPageCoun] = useState("");
  const [publishedDate, setPublishedDate] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [status, setStatus] = useState("");
  const [authors, setAuthors] = useState("");
  const [categories, setCategories] = useState("");

  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books",
        {
          title,
          isbn,
          pageCoun,
          publishedDate,
          thumbnailUrl,
          shortDescription,
          longDescription,
          status,
          authors ,
          categories ,
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
            <div className="card-title">
              <h2>Create Employee</h2>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>isbn</label>
                    <input
                      value={isbn}
                      className="form-control"
                      onChange={(e) => {
                        setIsbn(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group">
                    <label>Title</label>
                    <input
                      value={title}
                      className="form-control"
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                  </div>
                </div>

                <div className="col-lg-12">
                  <div className="form-group">
                    <label>pageCoun</label>
                    <input
                      value={pageCoun}
                      className="form-control"
                      onChange={(e) => {
                        setPageCoun(e.target.value);
                      }}
                    />
                  </div>

                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>publishedDate</label>
                      <input
                        value={publishedDate}
                        className="form-control"
                        onChange={(e) => {
                          setPublishedDate(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>thumbnailUrl</label>
                      <input
                        value={thumbnailUrl}
                        className="form-control"
                        onChange={(e) => {
                          setThumbnailUrl(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>shortDescription</label>
                      <input
                        value={shortDescription}
                        className="form-control"
                        onChange={(e) => {
                          setShortDescription(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>longDescription</label>
                      <input
                        value={shortDescription}
                        className="form-control"
                        onChange={(e) => {
                          setLongDescription(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>State</label>
                      <input
                        value={status}
                        className="form-control"
                        onChange={(e) => {
                          setStatus(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>Authors</label>
                      <input
                        value={authors}
                        className="form-control"
                        onChange={(e) => {
                          setAuthors(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <label>categories</label>
                      <input
                        value={categories}
                        className="form-control"
                        onChange={(e) => {
                         setCategories(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <button className="btn btn-success" type="submit">
                        Save
                      </button>{" "}
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

export default BookAdd;
