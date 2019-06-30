import React, { Component } from "react";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

import "bootstrap/dist/css/bootstrap.min.css";
import uuid from "uuid";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      title: "",
      editItem: false,
      id: uuid()
    };
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
    // console.log(this.state.item);
  };

  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id: this.state.id,
      title: this.state.title
    };
    // console.log(newItem);

    const updateItems = [...this.state.items, newItem];

    this.setState({
      items: updateItems,
      title: "",
      id: uuid(),
      editItem: false
    });
  };

  clearList = () => {
    this.setState({
      items: []
    });
  };

  handleDelete = id => {
    // console.log(id);
    const FilteredItems = this.state.items.filter(item => item.id !== id);

    this.setState({
      items: FilteredItems
    });
  };

  handleEdit = id => {
    // console.log(id);
    const FilteredItems = this.state.items.filter(item => item.id !== id);

    const SelectedItem = this.state.items.find(item => item.id === id);

    console.log(SelectedItem.title);

    this.setState({
      items: FilteredItems,
      title: SelectedItem.title,
      editItem: true,
      id: id
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 col-md-8 mx-auto mt-4">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              title={this.state.title}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
