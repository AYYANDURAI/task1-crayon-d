
const initialState = {
    posts: []
}

const addPostReducer = (state = initialState, action) => {
    if (action.type === 'ADD_POST') {
        return { ...state, posts: [...state.posts, action.payload] };
    }
    if (action.type === 'SET_POSTS') {
        return { ...state, posts: action.payload };
    }
    return state;
};


export default addPostReducer;