"use client";
import React from "react";
import styles from "./posts.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export const posts = () => {
  const dispatch = useDispatch();
  const getPosts = () => {
    dispatch({ type: "GET_POSTS", payload: { n1: 10, n2: 20 } });
  };
  const { posts } = useSelector((state) => {
    return { posts: state.sagaReducer.posts };
  });
  return (
    <div>
      <button onClick={getPosts}>Get Posts</button>
      <h6>
        Note: Please check console for store updation after clicking the button
      </h6>
      {posts.length > 0 && (
        <ol>
          {posts.map(({ title, body }, index) => {
            return (
              <li key={index}>
                <div>{title}</div>
                <div>{body}</div>
              </li>
            );
          })}
        </ol>
      )}
    </div>
  );
};
