"use client";
import React from "react";
import "./Photos.css";
import axios from "axios";
import { useDispatch } from "react-redux";

export const Photos = () => {
  const dispatch = useDispatch();
  const fnClick = async () => {
    try {
      const res = await axios("https://jsonplaceholder.typicode.com/photos");
      dispatch({ type: "PHOTOS_UPDATE", payload: res.data });
    } catch (ex) {
      console.log(ex);
    } finally {
    }
  };
  return (
    <div>
      <div className="photos">Photos</div>
      <button onClick={fnClick}>Get Photos</button>
    </div>
  );
};
