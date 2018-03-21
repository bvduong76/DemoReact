import React from "react";
import {Content} from "./Content";

export class ToDoContent extends React.Component {
    render() {
        return (
            <div className="row">
                {
                    this.props.data.map((e, index) => <Content data={e} key={index}
                                                               handleDelete={() => this.props.onDeleteClick(index)}/>)
                }
            </div>
        );
    }
}