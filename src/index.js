import React from "react";
import "./index.css";
import {Content} from "./Content";

export class App extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        };
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
            <div className="Main" id="Main">
                <form className="addBox" onSubmit={this.addTodo.bind(this)}>
                    <input type="text" className="icon">Icon</input>
                    <input type="text" className="title">Title</input>
                    <input type="submit" className="main">Main</input>
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

