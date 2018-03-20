import React from "react";

// Stateless component
// re-render khi props thay doi
export class Content extends React.Component {
    render() {
        const todo = this.props.data;
        console.log();
        return (
            <div className="_Content">
                <button onClick={()=>this.props.onDelete}>Xoa cai nay</button>
                <div className="Content__icon">
                    <img src={todo.icon}/>
                </div>
                    <div className="Content__title">
                    {todo.title}
                </div>
                <div className="Content__main">
                    {todo.description}
                </div>
            </div>
        );
    }
}