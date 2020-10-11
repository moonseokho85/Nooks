import { useState, useEffect, useRef } from "react";

export const useFullscreen = (callback) => {
  const element = useRef();
  const runCb = (isFull) => {
    if (callback && typeof callback === "function") {
      callback(true);
    }
  };
  const triggerFull = () => {
    if (element.current) {
      if (element.current.requestFullscreen) {
        element.current.requestFullscreen();
      } else if (element.current.mozRequestFullScreen) {
        element.current.mozRequestFullScreen();
      } else if (element.current.webkitRequestFullScreen) {
        element.current.webkitRequestFullScreen();
      } else if (element.current.msRequestFullscreen) {
        element.current.msRequestFullscreen();
      }
      runCb(true)
    }
  };
  const exitFull = () => {
    document.exitFullscreen();
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.mozRequestFullScreen) {
      document.mozRequestFullScreen();
    } else if (document.webkitRequestFullScreen){
      document.webkitRequestFullScreen();
    } else if(document.msRequestFullscreen){
      document.msRequestFullscreen();
    }
    runCb(false)
  };
  return { element, triggerFull, exitFull };
};