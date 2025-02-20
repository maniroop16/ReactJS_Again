import React from "react";

const NewsItemClass = (props)=> {
    let { title, description, imageUrl, newsUrl, updatedTime, Author,source  } = props;
    return (
      <div>
        <div className="card" style={{ width: "20rem" }}>
        <div style={{display:"flex", justifyContent:"flex-end", position:"absolute", right:"0"}}>
          <span className="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img
            src={imageUrl?imageUrl:"https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iRCnxVg4XLkU/v1/1200x800.jpg"}
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-body-secondary">updated by <b>{Author?Author:"Unknown"}</b> on {updatedTime.slice(0,10)}</small></p>
            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary">
              ReadMore
            </a>
          </div>
        </div>
      </div>
    );
  }


export default NewsItemClass 
