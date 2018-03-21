import React, {Component} from "react";
import {ToDoContent} from "./ToDoContent";


export class __Main extends Component {
    state = {
        data: [
            {
                icon: './img/du-doan-ngay-sinh.png',
                title: 'Dự đoán ngày sinh',
                description: 'Cách bậc cha mẹ luôn quan tâm con của mình sẽ được sinh ra điểm...'
            }, {
                icon: './img/du-doan-ngay-sinh.png',
                title: 'Dự đoán giới tính thai nhi',
                description: 'Giới tính của thai nhi vẫn luôn là điều kỳ diệu đối với bố mẹ....'
            }
        ]
    };

    eventSubmit(e) {
        e.preventDefault();
        if (e.target['icon'].files[0] != null)
            var icon_url = e.target['icon'].files[0].name;
        let newItem = {
            ico: "./img/" + icon_url,
            title: e.target['title'].value,
            description: e.target['description'].value
        };
        this.state.data.push(newItem);
        this.setState({
            data: this.state.data
        });
    }

    handleDeleteItem(id) {
        this.setState({
            data: this.state.data.filter((x) => x !== this.state.data[id])
        });
    }

    render() {
        return (
            <div className="inner">
                <form className="addBox" onSubmit={this.eventSubmit.bind(this)}>
                    <label>Img URL
                        <input type="file" name="icon" accept="image/*"/>
                    </label>
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
                <ToDoContent data={this.state.data} onDeleteClick={this.handleDeleteItem.bind(this)}/>
            </div>
        );
    }
}

