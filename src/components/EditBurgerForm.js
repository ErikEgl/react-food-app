import React from "react";


class EditBurgerForm extends React.Component {
    handleChange = event => {
        console.log(event.currentTarget.value);
        const updatedBurger = {
            ...this.props.burger, 
            [event.currentTarget.name]: event.currentTarget.value,
        }
        this.props.updateBurger(this.props.index, updatedBurger)
    } 
    render () {
        return (
            <div className='burger-edit'>
                <input onChange={this.handleChange} name="name" type='text' value={this.props.burger.name}/>
                <input onChange={this.handleChange} name="price" type='text' value={this.props.burger.price}/>
                <select onChange={this.handleChange} className="status" name="status"value={this.props.burger.status}>
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