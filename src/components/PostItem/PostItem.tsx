import {Component} from 'react';
import {Post} from '../PostList/PostList';

class PostItem extends Component<any, Post> {
    render() {
        const {post} = this.props;

        return (
            <section>
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            </section>
        );
    }
}


export {PostItem};