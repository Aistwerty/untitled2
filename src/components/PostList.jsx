import React from 'react';
import {Link} from "react-router-dom";

function Tr(props) {
    return <tr>
        <th scope="row">{props.index}</th>
        <td><Link to={"/post/" + props.id}>{props.title}</Link></td>
        <td>{props.author}</td>
        <td>{props.data_added}</td>
        <td>
            <span className='deletePostBtn' onClick={()=>{
            const formData = new FormData();
            formData.append("id", props.id);
            fetch("http://aistwerty.beget.tech/projects/reactTech/php/remove_post.php", {
                method: "POST",
                body: formData
            })
                .then(response => response.json())
                .then(result=>{
                    let posts = props.parent.state.posts;
                    posts.splice(props.index-1,1);
                    props.parent.setState({
                        posts: posts
                    })
                })
            }}>[Удалить]</span>
            <span className='changeTextBtn'>[Изменить]</span>
        </td>
    </tr>
}

export class PostList extends React.Component{
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }
    componentDidMount() {
        console.log("Компонет отрисован");
        fetch("http://aistwerty.beget.tech/projects/reactTech/php/get_posts.php")
            .then(response=>response.json())
            .then(result=>{
                console.log(result);
                let rows = []
                for (let i = 0; i < result.length; i++) {
                    rows.push(<Tr
                        key={i}
                        index={i+1}
                        id={result[i].id}
                        title={result[i].title}
                        author={result[i].author}
                        data_added={result[i].data_added}
                        parent={this}
                    />)
                }
                this.setState({
                    posts: rows
                })
            })
    }

    render() {
        return <table className="table">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Название статьи</th>
                <th scope="col">Автор</th>
                <th scope="col">Дата добавления</th>
                <th scope="col">Управление статьями</th>
            </tr>
            </thead>
            <tbody>
                {this.state.posts}
            </tbody>
        </table>
    }
}