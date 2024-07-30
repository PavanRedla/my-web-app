"use client";
import React from "react";
import styles from "./posts.module.css";
import { useDispatch } from "react-redux";

export const posts = () => {
  const dispatch = useDispatch();
  const getPosts = () => {
    dispatch({ type: "GET_POSTS" });
  };
  return (
    <div>
      <button onClick={getPosts}>Get Posts</button>
      <h6>
        Note: Please check console for store updation after clicking the button
      </h6>
    </div>
  );
};
