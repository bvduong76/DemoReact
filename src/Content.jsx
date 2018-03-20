import React from "react";

// Stateless component
// re-render khi props thay doi
export class Content extends React.Component {
    render() {
        var todo = this.props.data;
        return (
            <div className="_Content">
                <div className="Content__icon">
                    <img src="./favicon.ico" alt=""/>
                </div>
                <div className="Content__title">
                    {todo.title}
                </div>
                <div className="Content__main">
                    {todo.description}
                </div>
                <button onClick={() =>this.props._handleDelete()}> Xoa cai nay</button>
            </div>
        );
    }
}