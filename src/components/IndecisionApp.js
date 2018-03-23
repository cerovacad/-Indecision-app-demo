import React from 'react';

import AddOption from './AddOption';
import Action from './Action';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component { //main component
  //defaut state
  state = {
    options : [],
    selectedOption: undefined
  };

  //write lifecycle methods for using localStorage in case of refreshing page

  //remove all method
  handleDelete = () => {
    this.setState( () => {
      return {
        options : []
      };
    });
  }
  //delete single option method
  handleDeleteOption = (optionToDelete) => {
    this.setState((prevState) => {
      return {
        options : prevState.options.filter((option) => {
          return optionToDelete !== option;
        })
      };
    });
  }
  //pick random option method
  handlePick = () =>{
    const randOption = this.state.options[Math.floor(Math.random() * this.state.options.length)];
    this.setState( (prevState) => {
      return {
        selectedOption: randOption
      }
    });
  }
  //handleModalClose
  handleModalClose = () =>{
    this.setState( () =>{
      return {
        selectedOption: false
      }
    });
  }
  //add option method
  addOne = (option) => {
    if( this.state.options.indexOf(option) < 0 && option.length > 0){ //input validation
      this.setState( (prevState)=>{ 
          return{
            options : prevState.options.concat(option)
          };
      });
    }else {
      return true;
    }
  }

  render() {
    const title = "Indecision App"; 
    const subTitle = "Let computer choose";
    return (
      <div className='container'>
        <Header title={title} 
                subTitle={subTitle}
        />
        <Action hasOptions={this.state.options.length > 0}
                handlePick={this.handlePick}
        />
        <div className='widget'>
          <Options options={this.state.options}
                  handleDelete={this.handleDelete}
                  handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption addOne={this.addOne}/>
          <OptionModal selectedOption={this.state.selectedOption} handleModalClose={this.handleModalClose}/>  
        </div>
      </div>
    );
  }
}

export default IndecisionApp;