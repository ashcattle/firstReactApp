import React, { Component } from 'react';

class CreateContent extends Component {
    render() {
        console.log("CreateContent render");

        return (
            <article>
                <h2>Create</h2>
                <form action="/" method="post">
                    <p>
                        <input type="text" name="title" placeholder="title" />
                    </p>
                    <p>
                        <input type="text" name="desc" placeholder="desc" />
                    </p>
                    <p>
                        <input type="submit" />
                    </p>
                </form>
            </article>
        );
    }
}

export default CreateContent;