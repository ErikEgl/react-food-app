import React from "react";
import PropTypes from "prop-types";

class EditBurgerForm extends React.Component {

    static propTypes = {
        burger: PropTypes.shape({
            image: PropTypes.string,
            name: PropTypes.string,
            price: PropTypes.number,
            desc: PropTypes.string,
            status: PropTypes.string,
          }),
          index: PropTypes.string,
          updateBurger: PropTypes.func,
          deleteBurger: PropTypes.func,
      }; 
    handleChange = event => {
        const updatedBurger = {
            ...this.props.burger, 
            [event.currentTarget.name]: event.currentTarget.name === "price" ? parseFloat(event.currentTarget.value) || 0 : event.currentTarget.value
        }
        this.props.updateBurger(this.props.index, updatedBurger)
    } 
    render () {
        return (
            <div className='burger-edit'>
                <input onChange={this.handleChange} name="name" type='text' value={this.props.burger.name}/>
                <input onChange={this.handleChange} name="price" type='text' value={this.props.burger.price}/>
                <select onChange={this.handleChange} className="status" name="status" value={this.props.burger.status}>
                    <option value="available">available</option>
                    <option value="unavailable">unavailable</option>
                </select>
                <textarea onChange={this.handleChange} name="desc" type='text' value={this.props.burger.desc}/>
                <input onChange={this.handleChange} name="image" type='text' value={this.props.burger.image}/>
          <button onClick={() => this.props.deleteBurger(this.props.index)}>Delete from menu</button>
                
            </div>
        );
    }
}

export default EditBurgerForm;