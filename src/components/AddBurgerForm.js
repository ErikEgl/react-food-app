import React from "react";

class AddBurgerForm extends React.Component {
    createBurger = (event) => {
        event.preventDefault()
        console.log('addburger');
    }
  render() {
    return (
      <form className="burger-edit" onSubmit={this.createBurger}>
        <input name="name" type="text" placeholder="Name" autoComplete="off" />
        <input
          name="price"
          type="text"
          placeholder="Price"
          autoComplete="off"
        />
        <select className="status" name="status">
          <option value="available" key="">
            Available
          </option>
          <option value="unavailable" key="">
            Delete from menu
          </option>
        </select>
        <input name="desc" placeholder="Desc" />
        <input name="image" type="text" placeholder="Image" />
        <button type="submit">Add to menu</button>
      </form>
    );
  }
}

export default AddBurgerForm;
