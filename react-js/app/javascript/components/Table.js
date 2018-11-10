import React from "react"
class Posts extends React.Component {
    constructor(props) {
        super(props);
    }
    thongbao = () =>{
        alert('Hello world');
    }
    thongbao2 = (title) => {
        alert(title);
    }
    render() {
        var posts = this.props.posts.map((post) => {
            return (
                <tr>
                    <td onClick={this.thongbao}>{post.name}</td>
                    <td onClick={() => this.thongbao2(post.title)}>{post.title}</td>
                    <td onClick={this.thongbao2.bind(this, post.content)}>{post.content}</td>
                </tr>
    )
    })

    return(
        <tbody>
            {posts}
        </tbody>
    )
    }
}

class Table extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            posts: this.props.posts
        }
    }
    render() {
        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Title</th>
                        <th>Content</th>
                    </tr>
                </thead>
                <Posts posts={this.state.posts} />
            </table>
    )
    };
}
export default Table