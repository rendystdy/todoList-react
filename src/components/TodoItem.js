import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class TodoItem extends Component {
  render() {
    const { title, handleDelete, handleEdit } = this.props;
    //   console.log(this.props);

    return (
      <>
        <li className="list-group-item text-capitalize d-flex justify-content-between my-2">
          <h6>{title}</h6>
          <div className="todo-icon">
            <span className="mx-2 btn-success btn-sm" onClick={handleEdit}>
              <FontAwesome name="pen" />
            </span>
            <span className="mx-2 btn-danger btn-sm" onClick={handleDelete}>
              <FontAwesome name="trash" />
            </span>
          </div>
        </li>
      </>
    );
  }
}

export default TodoItem;
