import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    title: "",
    description: "",
  },
  blogList: [],
  currentBlogId: null,
};

export const BlogSlice = createSlice({
  name: "blog",
  initialState,
  reducers: {
    handleInputChange: (state, action) => {
      let copyformdata = { ...state.formData };
      copyformdata = {
        ...copyformdata,
        ...action.payload,
      };
      state.formData = copyformdata;
      return state;
    },
    handleAddBlog: (state, action) => {
      console.log("add blog calles");

      state.blogList.push({
        id: nanoid(),
        title: action.payload.title,
        description: action.payload.description,
      });
      state.formData = {
        title: "",
        description: "",
      };
      localStorage.setItem("bloglist", JSON.stringify(state.blogList));
      return state;
    },
    handleDeleteBlog: (state, action) => {
      // console.log(action.payload.currentBlogId);
      let copyBlogList = [...state.blogList];
      copyBlogList = copyBlogList.filter(
        (blog) => blog.id !== action.payload.currentBlogId
      );
      state.blogList = copyBlogList;
      return state;
    },

    setCurrentBlogId: (state, action) => {
      // console.log(action.payload);
      state.currentBlogId = action.payload?.currentBlogId;
      return state;
    },
    handleEditBlog: (state, action) => {
      console.log(action.payload);
      let copyBlogList = [...state.blogList];
      const findIndexOfCurrentBlog = copyBlogList.findIndex(
        (singleBlog) => singleBlog.id === state.currentBlogId
      );
      copyBlogList[findIndexOfCurrentBlog] = {
        ...copyBlogList[findIndexOfCurrentBlog],
        ...action.payload,
      };
      state.blogList = copyBlogList;
      return state;
    },
  },
});

export const {
  handleInputChange,
  handleAddBlog,
  handleDeleteBlog,
  setCurrentBlogId,
  handleEditBlog,
} = BlogSlice.actions;

export default BlogSlice.reducer;
