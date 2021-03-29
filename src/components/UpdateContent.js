import React, { Component } from 'react';

class UpdateContent extends Component {
    render() {
        console.log("UpdateContent render");

        return (
            <div>
                <h2>Update</h2>
                <form action="/update_process" method="post" 
                        onSubmit={(e) => {
                            e.preventDefault();
                            let data = { id: this.props.id, title: e.target.title.value, desc: e.target.desc.value }
                            this.props.onSubmit(data);
                        }}>
                    <p>
                        <input type="text" name="title" placeholder="title" defaultValue={this.props.title} />
                    </p>
                    <p>
                        <textarea name="desc" placeholder="description" defaultValue={this.props.desc}></textarea>
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </div>
        );
    }
}

export default UpdateContent;