import React from "react";

// Stateless component
// re-render khi props thay doi
export class Content extends React.Component {
    render() {
        let todo = this.props.data;
        return (
            <div className="col-6">
                <div className="_Content">
                    <div className="Content__icon">
                        <img src={todo.ico} alt=""/>
                    </div>
                    <div className="Content__title">
                        {todo.title}
                    </div>
                    <div className="Content__main">
                        {todo.description}
                    </div>
                    <div className="Content--btn-Back">
                        <button onClick={() => this.props.handleDelete()}>X</button>
                    </div>

                </div>
            </div>

        );
    }
}