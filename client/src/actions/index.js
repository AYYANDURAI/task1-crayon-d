export const addPost = (post) => {
    return {
        type: 'ADD_POST',
        payload: post
    };
}

export const setPosts = (posts) => {
    return {
        type: 'SET_POSTS',
        payload: posts
    };
}

