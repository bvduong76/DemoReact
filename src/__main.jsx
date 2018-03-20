import React, {Component} from "react";
import {Content} from "./Content";

export class __Main extends Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    };

    addTodo(newTodo) {
        let arr = this.state.data;
        arr.push(newTodo);
        this.setState({
            data: arr
        });
    }

    removeTodo(idz) {
        // xoa to do id:  idz
    }

    render() {
        return (
            <div className="Main">

                <form className="addBox" >
                    <input type="text"/>
                    <input type="text" />
                    <input type="submit"/>
                </form>


                <div className="Contents">
                {
                this.state.data.map(e => <Content data={e} onDelete={this.removeTodo.bind(this)}/>)
                }
                </div>

            </div>
        );
    }
}