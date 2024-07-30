"use client";
import React from "react";
import "./Photos.css";
// import axios from "axios";
// import sendGetReq from "@/service/ajax";
// import { useDispatch } from "react-redux";
import { photosAction } from "@/redux/actions/photosAction";

export const Photos = () => {
  // const dispatch = useDispatch();
  // const fnClick = async () => {

  // };
  return (
    <div>
      <div className="photos">Photos</div>
      <button onClick={photosAction}>Get Photos</button>
      <h6>
        Note: Please check console for store updation after clicking the button
      </h6>
    </div>
  );
};
