import React, { useEffect } from "react";
import useStorage from '../../hooks/useStorage'
const ProgressBar = ({file,setFile}) => {
  const {url, progress} = useStorage(file)

  useEffect(()=>{
    if(url){
      setFile(null)
    }
  },[file,url])
  return (
    <div className="progress" style={{height: '1em'}}>
      <div
        className="progress-bar"
        role="progressbar"  
       style={{width: progress + '%'}}
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      ></div>
    </div>
  );
};

export default ProgressBar;
