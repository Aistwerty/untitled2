import React from 'react';

export class ViewPost extends React.Component{
    constructor() {
        super();
        this.state = {
            id: "1",
            title: "",
            text: "",
            author: "",
            date_added: ""
        }
    }
    componentDidMount() {
        fetch("http://aistwerty.beget.tech/projects/spaTech/php/get_posts.php")
            .then (response=>response.json())
            .then (result=>{
                for (let i = 0; i < 1; i++)
                    this.setState({
                        title: result[i].title,
                        text: result[i].text,
                        author: result[i].author,
                        data_added: result[i].data_added
                    })
            })
    }

    render() {
        console.log("Компонент рисуется");
        return <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.text}</p>
            <p>Автор: {this.state.author}</p>
            <p>Дата публикации: {this.state.data_added}</p>
        </div>

    }
}
/*
    constructor() {
        super();
        this.state = {
            id: "id"
        }
        componentDidMount() {
            console.log("Компонет отрисован");
            fetch("http://aistwerty.beget.tech/projects/spaTech/php/view_post.php")
                .then(response=>response.json())
                .then(result=>{
                    console.log(result);
                    let rows = []
                    for (let i = 0; i < result.length; i++) {
                        rows.push(<Issue
                            index={i+1}
                            title={result[i].title}
                            author={result[i].author}
                            data_added={result[i].data_added}
                        />)
                    }
                    this.setState({
                        posts: rows
                    })
                })
        }

}*/
