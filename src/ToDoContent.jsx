import React from "react";
import {Content} from "./Content";

export class ToDoContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selected_key: null,
            data: [
                {
                    title: 'Dự đoán ngày sinh',
                    description: 'Cách bậc cha mẹ luôn quan tâm con của mình sẽ được sinh ra điểm...'
                }, {
                    title: 'Dự đoán giới tính thai nhi',
                    description: 'Giới tính của thai nhi vẫn luôn là điều kỳ diệu đối với bố mẹ....'
                }
            ]
        }
    };
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
        const data = this.state.data,currentData = nextProps.data;
        data.push({title: currentData.title, description: currentData.description});
        this.setState({
            data: data
        });
        console.log(data);
    }


    _handleDelete(idx){

    }
    render() {
        console.log(this.props.data);
        return (
            <div className="Contents">
                {
                    this.state.data.map((e, index) => <Content data={e} key={index}
                                                        _handleDelete={() => this._handleDelete(index).bind(this)}/>)
                }

            </div>
        );
    }
}