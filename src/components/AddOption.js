import React from 'react'

export default class AddOption extends React.Component {
  state = {
    erorr: undefined
  };
 
  addOne = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    const erorr = this.props.addOne(option);
    e.target.elements.option.value = '';
    this.setState(() => {
      return{
        erorr: !!erorr
      };
    });

  }
  render() {
    return (
      <div>
        {this.state.erorr && <p className='add-option-error'>Enter valid input</p>}
        <form className='add-option' onSubmit={this.addOne} autoComplete="off">
          <input className='add-option__input' type="text" name="option"/>
          <button className='button'>Add</button>
        </form>
      </div>
    );
  }
}
