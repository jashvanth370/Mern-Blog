import { Link } from "react-router-dom"

export default function Post({post}) {
    return <div class="card mb-4">
        <div class="row">
            <div class="col-sm-12 col-md-3">
                <img class="img-fluid h-100 card-img-top" src={post.image}
                    alt="400*800" />
            </div>
            <div class="card-body col-md-8">
                <h5 class="card-title">{post.title}</h5>
                <p class="card-text">{post.content}</p>
                <Link to={`/posts/details/${post._id}`} class="btn btn-primary">Read More</Link>
            </div>
        </div>

    </div>
}