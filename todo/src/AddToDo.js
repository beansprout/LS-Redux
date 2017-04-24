//component
// import React, {Component} from 'react';
import React from 'react';
import {connect} from 'react-redux';
import { addItem } from './actions';
// import { bindActionCreators } from 'redux';


let AddToDo = ({ dispatch }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(AddToDo(input.value))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}
AddToDo = connect()(AddToDo)

export default AddToDo

// class AddToDo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ''};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('A name was submitted: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (

//       <form onSubmit={this.handleSubmit}>
//         <label>
//           Add new task:
//           <input type="text" value="input"
//           onChange={this.handleChange} />
//         </label>
//         <input type="submit" value="Submit" />
//       </form>
//     );
//   }
// // }

// const mapStateToProps = (state) => {
//   return {
//     input: state.addItem,
//   };
// }

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ addItem: addItem }, dispatch);
// };

// export default connect(mapStateToProps, mapDispatchToProps)(AddToDo);