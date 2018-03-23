import React from 'react';
import Option from './Option';
import shortid from 'shortid';

const Options = (props) => {
    return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-header__title'>Your options</h3>
        <button className='button button--link' 
                onClick={props.handleDelete}>Reset
        </button>
      </div>

        {props.options.length === 0 && <p className='widget__message'>Add option to get started</p>}

        {props.options.map( (option)=>{
          return <Option optionText={option} 
                         key={shortid.generate()} 
                         handleDeleteOption={props.handleDeleteOption}/>
        })}
    </div>
    );
  }

  export default Options;