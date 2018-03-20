import React, {Component} from "react";
import {ToDoContent} from "./ToDoContent";

export class __Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: ""
        };
    };

    eventSubmit(e) {
        e.preventDefault();
        console.log('run');
        this.setState({
            title: e.target['title'].value,
            description:"zxc"
        });


    }

    render() {
        console.log(this.state);
        return (
            <div className="Main">
                <form className="addBox" onSubmit={this.eventSubmit.bind(this)}>
                    <label>
                        Title
                        <input type="text" name="title"/>
                    </label>
                    <label>
                        Description
                        <input type="text" name="description"/>
                    </label>
                    {/*<input type="submit" value="Add"/>*/}
                    <button type="submit">Add</button>
                </form>
                <ToDoContent data={this.state}/>
            </div>
        );
    }

}

