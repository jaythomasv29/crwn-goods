import React from "react";
import "./CollectionPreview.scss"
import CollectionItem from "../collection-item/CollectionItem"
export default function CollectionPreview({ title, items }) {
  
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {
          // Filter items to limit to 4 from index
          items.filter((item, idx) => idx < 4)
          // Map the items to display each item from the array
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))
        }
      </div>
    </div>
  );
}
