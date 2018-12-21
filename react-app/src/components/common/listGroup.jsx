import React from "react";

const ListGroup = ({
  items,
  onItemSelect,
  textProperty,
  valueProperty,
  selectedItem
}) => {
  return (
    <ul className="listGroup-group">
      {items.map(el => (
        <li
          key={el[valueProperty]}
          className={
            el === selectedItem ? "list-group-item active" : "list-group-item"
          }
          style={{ cursor: "pointer" }}
          onClick={() => onItemSelect(el)}
        >
          {el[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
