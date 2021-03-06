import React from "react";
import "./MenuItem.scss";
import { withRouter } from 'react-router-dom' // A higher order component ( a function that takes a component as an argument and returns a modified component)

function MenuItem({ title, id, imageUrl, size, history, linkUrl, match }) {
  return (
      <div
      className={`${size} menu-item`}
      onClick={() => history.push(`${match.url}${linkUrl}`) }
      style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
}
export default withRouter(MenuItem)