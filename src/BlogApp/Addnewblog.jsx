import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleAddBlog,
  handleEditBlog,
  handleInputChange,
  setCurrentBlogId,
} from "../store/slices/BlogSlice";

const Addnewblog = () => {
  const { formData, currentBlogId } = useSelector((state) => state.blog);
  //   console.log(formData.title, formData.description);

  const dispatch = useDispatch();
  const onChangeInput = (event) => {
    const { value, name } = event.target;
    dispatch(
      handleInputChange({
        [name]: value,
      })
    );
  };

  const handleBlogSubmit = (e) => {
    e.preventDefault();
    const { title, description } = formData;
    if (currentBlogId !== null)
      dispatch(
        handleEditBlog({
          title,
          description,
        })
      );
    else {
      dispatch(
        handleAddBlog({
          title,
          description,
        })
      );
    }
    if (currentBlogId !== null) {
      dispatch(
        setCurrentBlogId({
          currentBlogId: null,
        })
      );
      dispatch(
        handleInputChange({
          title: "",
          description: "",
        })
      );
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "#f7f7f7",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        maxWidth: "500px",
        margin: "auto",
        marginTop: "50px",
      }}
    >
      <form style={{ width: "100%" }} onSubmit={handleBlogSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="title"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              color: "#333",
            }}
          >
            Enter Blog Title:
          </label>
          <input
            type="text"
            name="title"
            placeholder="Enter the Blog Title"
            id="title"
            onChange={onChangeInput}
            value={formData?.title}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="description"
            style={{
              display: "block",
              fontWeight: "bold",
              marginBottom: "5px",
              color: "#333",
            }}
          >
            Enter Blog Description:
          </label>
          <input
            type="text"
            name="description"
            placeholder="Enter the Blog Description"
            id="description"
            onChange={onChangeInput}
            value={formData?.description}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              outline: "none",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            fontSize: "16px",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: "#007BFF",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {currentBlogId ? "Edit Blog" : "Add New Blog"}
        </button>
      </form>
    </div>
  );
};

export default Addnewblog;
