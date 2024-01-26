import {Component} from 'react';
import {PostItem} from '../PostItem/PostItem';

export type Post = {
    id: number;
    title: string;
    body: string;
}

type State = {
    data: Post[]
}

class PostList extends Component<{}, State> {
    state = {
        data: [],
    };

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts/')
            .then(res => res.json())
            .then(data => {
                this.setState({data});
            });
    }

    render() {
        const {data} = this.state;
        return (
            <ul>{
                data.map((post: Post) =>
                    <PostItem key={post.id}
                              post={post}
                    />)
            }</ul>
        );
    }
}

export {PostList};