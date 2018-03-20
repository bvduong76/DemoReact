import React from "react";

// Stateless component
// re-render khi props thay doi
export class Content extends React.Component {
    render() {
        const todo = this.props.data ;
        console.log();
        return (
            <div className="_Content">
                {/*onClick={()=>this.props.onDelete*/}
                <button >Xoa cai nay</button>
                <div className="Content__icon">
                    <img src="" alt="zxc"/>
                </div>
                    <div className="Content__title">

                </div>
                <div className="Content__main">
                    ""
                </div>
            </div>
        );
    }
}