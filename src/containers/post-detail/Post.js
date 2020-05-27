import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchPost } from '../../store/post-detail/actions'

import './post.scss'

class Post extends Component {

  componentDidMount() {
    const { dispatch } = this.props
    const id = this.props.match.params.id
    dispatch(fetchPost(id))
  }

  render() {
    const { comments, post, isFetching } = this.props

    return (
      <div className="post-wrapp">
        {isFetching && comments.length === 0 && <h2>Loading...</h2>}
        {post && (
          <div className="post-info">
            <h2>{ post.title }</h2>
            <p>{ post.selftext }</p>
          </div>
        )}
        {comments.length > 0 && (
          <ul>
            {comments.map((comment, i) => (
              <li key={i}>
                <p className="title">{comment.author_fullname}</p>
                <p className="description">{comment.body}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    )
  }
}

Post.propTypes = {
  dispatch: PropTypes.func.isRequired,
  comments: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

function mapStateToProps(state) {
  const { post: postState } = state
  const { isFetching, comments, post } = postState

  return {
    isFetching,
    post,
    comments,
  }
}

export default withRouter(connect(mapStateToProps)(Post))
