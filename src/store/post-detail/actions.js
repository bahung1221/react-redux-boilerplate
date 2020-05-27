import fetch from 'cross-fetch'

export const REQUEST_POST = 'REQUEST_POST'
export const RECEIVE_POST = 'RECEIVE_POST'

function requestPost(id) {
  return {
    type: REQUEST_POST,
    id
  }
}

function receivePost(id, json) {
  const comments = json.reduce((arr, cur) => {
    return arr.concat(
      cur.data.children
        .map(child => child.data)
        .filter(child => child.body)
    )
  }, [])

  return {
    type: RECEIVE_POST,
    id,
    post: json[0].data.children[0].data,
    comments,
    receivedAt: Date.now()
  }
}

export function fetchPost(id) {
  return dispatch => {
    dispatch(requestPost(id))
    return fetch(`https://www.reddit.com/comments/${id}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePost(id, json)))
  }
}
