import React, { Component } from "react";
import FontAwesome from "react-fontawesome";

class TodoInput extends Component {
  render() {
    const { title, handleChange, handleSubmit, editItem } = this.props;
    //  console.log(this.props.editItem);

    return (
      <div className="card card-body my-3">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text bg-primary text-white">
                <FontAwesome name="book" />
              </div>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={title}
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className={
              editItem
                ? "btn-block btn-success mt-2"
                : "btn-primary btn-block mt-2"
            }
          >
            {editItem ? "EDIT ITEM" : "ADD ITEM"}
          </button>
        </form>
      </div>
    );
  }
}

export default TodoInput;
