import axios from "axios";
import React, { useState, useEffect } from "react"; // useEffect = เรียกใช้ API  useState = //เรียกใช้ ข้อมูล
import { Link, useNavigate } from "react-router-dom";
const BookAll = () => {
  const [bookData, setBookData] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(
        "https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books"
      )
      .then((res) => {
        setBookData(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
 const loadEdit =(isbn) =>{
    navigate("/books/edit/" + isbn);
  }
  const loadDetail = (isbn) => {
    navigate("/books/detail/" + isbn);
  };
  
  const removeEmp =(isbn)=>{
    if(window.confirm("Do You Want To Delete This Book?")){
      axios.delete("https://us-central1-webservices-314bf.cloudfunctions.net/bookstore/api/v1/books/"+isbn)
      .then((res)=>{
        alert("Remove successfully.")
        window.location.reload()
      })
    }
  }
  return (
    
    <div className="container">
      <h1>SE Book All</h1>
       <Link
            to="/books/create"
            className="btn btn-success"
            style={{ float: "left" }}
          >
            {" "}
            Add new(+)
          </Link>
          <br></br>
          <br></br>
      <div className="row">
        
        <div className="books">
          {bookData &&
            bookData.map((bookData) => {
              return (
                <div
                  className="card"
                  style={{ width: "18rem" }}
                  key={bookData.isbn}
                >
                  <img
                    src={bookData.thumbnailUrl}
                    className="card-img-top"
                    alt=""
                  />
                  <div className="card-body">
                    <h5 className="title">ชื่อหนังสือ : {bookData.title}</h5>
                    <h5 className="isbn">รหัสหนังสือ : {bookData.isbn}</h5>
                    <h5 className="Authors">
                      ชื่อผู้แต่ง : {bookData.authors}
                    </h5>
                    <p className="shortDescription">
                      คำอธิบายแบบย่อ : {bookData.shortDescription}
                    </p>
                    <a
                      className="btn btn-success"
                      onClick={() => {
                        loadEdit(bookData.isbn);
                      }}
                    >
                      Edit
                    </a>{" "}
                    <a
                      className="btn btn-danger"
                      onClick={() => {
                        removeEmp(bookData.isbn);
                      }}
                    >
                      Delete
                    </a>{" "}
                    <a
                      className="btn btn-primary"
                      onClick={() => {
                        loadDetail(bookData.isbn);
                      }}
                    >
                      Detail
                    </a>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BookAll;
