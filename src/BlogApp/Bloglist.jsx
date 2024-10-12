import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteBlog,
  handleInputChange,
  setCurrentBlogId,
} from "../store/slices/BlogSlice";

const Bloglist = () => {
  const { blogList, currentBlogId } = useSelector((state) => state.blog);
  const dispatch = useDispatch();

  const deleteBlog = (BlogId) => {
    dispatch(
      handleDeleteBlog({
        currentBlogId: BlogId,
      })
    );
  };

  const onEditBlogId = (CurrentBlog) => {
    // console.log(CurrentBlog.id);
    dispatch(
      setCurrentBlogId({
        currentBlogId: CurrentBlog.id,
      })
    );
    dispatch(
      handleInputChange({
        title: CurrentBlog.title,
        description: CurrentBlog.description,
      })
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "55px",
        borderRadius: "10px",
      }}
    >
      <ul
        style={{
          listStyleType: "none",
          padding: "0",
          width: "100%",
          maxHeight: "500px",
          overflowY: "auto",
          border: "1px solid #ccc",
          paddingRight: "10px",
        }}
      >
        {Object.keys(blogList).map((key) => {
          return (
            <li
              key={key}
              style={{
                backgroundColor: "#f9f9f9",
                padding: "15px",
                borderRadius: "8px",
                margin: "10px 0",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                width: "80%",
                textAlign: "center",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <h1 style={{ fontSize: "24px", color: "#333", margin: "5px 0" }}>
                {blogList[key].title}
              </h1>
              <h2 style={{ fontSize: "18px", color: "#555", margin: "5px 0" }}>
                {blogList[key].description}
              </h2>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "10px",
                  marginTop: "10px",
                }}
              >
                <button
                  style={{
                    padding: "8px 16px",
                    fontSize: "16px",
                    color: "#fff",
                    backgroundColor: "#007bff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#0056b3")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#007bff")
                  }
                  onClick={() => onEditBlogId(blogList[key])}
                >
                  Edit Blog
                </button>
                <button
                  style={{
                    padding: "8px 16px",
                    fontSize: "16px",
                    color: "#fff",
                    backgroundColor: "#dc3545",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                  }}
                  onClick={() => deleteBlog(blogList[key].id)}
                  onMouseOver={(e) =>
                    (e.target.style.backgroundColor = "#c82333")
                  }
                  onMouseOut={(e) =>
                    (e.target.style.backgroundColor = "#dc3545")
                  }
                >
                  Delete Blog
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Bloglist;
