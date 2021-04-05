import React from 'react';

export class ViewPost extends React.Component{
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            title: "",
            text: "",
            author: "",
            data_added: ""
        }
    }
    componentDidMount() {
        const formData = new FormData();
        formData.append("id",this.props.match.params.id);
        fetch("http://aistwerty.beget.tech/projects/reactTech/php/view_post.php", {
            method: "POST",
            body: formData
        }).then (response=>response.json())
            .then (result=>{
                console.log(result);
                this.setState({
                    title: result.title,
                    text: result.text,
                    author: result.author,
                    data_added: result.data_added
                })

            })
    }

    render() {
        return <div>
            <h3 className="text-center">{this.state.title}</h3>
            <p>{this.state.text}</p>
            <p>Автор: {this.state.author}</p>
            <p>Дата публикации: {this.state.data_added}</p>
        </div>

    }
}
