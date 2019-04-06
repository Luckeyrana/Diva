import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions/actionCreator'
import {bindActionCreators} from 'redux'

class CreateTodo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todotext: '',
        };
        this.onChangeTodoText = this.onChangeTodoText.bind(this)
    }

    onChangeTodoText(e) {
        if(e.target.value === ''){
            alert("please enter some value");
        }
        else{
            this.setState({
                todotext: e.target.value
            })
        }

    }
    addToDo = ()=>{
        if(this.state.todotext.length > 0){
            this.props.addTodo(this.state.todotext);
            this.setState({todotext: ''})
        }

    };
    render() {
        return (
            <div className="">
                <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control"
                       id="inputEmail3" placeholder="Add todo here" />
                <button type="button" onClick={() => this.setState({todotext: ''})}
                        style={{marginTop: "25px", marginRight: "15px"}} className="btn btn-danger">Cancel
                </button>
                <button type="button" onClick={(e) => this.addToDo(e)} style={{marginTop: "25px"}} className="btn btn-success">Add Todo
                </button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        addTodo
    }, dispatch)
};


export default connect(null, mapDispatchToProps)(CreateTodo)