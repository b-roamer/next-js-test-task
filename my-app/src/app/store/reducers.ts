import {
    FETCH_POSTS_REQUEST,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAIL,

    FETCH_POST_BY_ID_REQUEST,
    FETCH_POST_BY_ID_SUCCESS,
    FETCH_POST_BY_ID_FAIL,

    UPDATE_POST_REQUEST,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_FAIL,

    FETCH_COMMENTS_REQUEST,
    FETCH_COMMENTS_SUCCESS,
    FETCH_COMMENTS_FAIL,

    CREATE_POST_REQUEST,
    CREATE_POST_SUCCESS,
    CREATE_POST_FAIL,

    DELETE_POST_REQUEST,
    DELETE_POST_SUCCESS,
    DELETE_POST_FAIL,

    Action,
} from './actions';

const initialState = {
    posts: [],
    post: null,
    comments: [],
    loading: false,
    error: null,
};

const postsReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case FETCH_POSTS_REQUEST:
        case FETCH_POST_BY_ID_REQUEST:
        case FETCH_COMMENTS_REQUEST:
        case UPDATE_POST_REQUEST:
        case CREATE_POST_REQUEST:
        case DELETE_POST_REQUEST:
            return {
                ...state,
                loading: true,
            };

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload,
                error: null,
            };

        case FETCH_POST_BY_ID_SUCCESS:
        case UPDATE_POST_SUCCESS:
        case DELETE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                post: action.payload,
                error: null,
            };

        case FETCH_COMMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                comments: action.payload,
                error: null,
            };

        case CREATE_POST_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: [...state.posts, action.payload],
                error: null,
            };

        case FETCH_POSTS_FAIL:
        case FETCH_POST_BY_ID_FAIL:
        case UPDATE_POST_FAIL:
        case FETCH_COMMENTS_FAIL:
        case CREATE_POST_FAIL:
        case DELETE_POST_FAIL:
            return {
                ...state,
                loading: false,
                posts: [],
                error: action.payload,
            };

        default:
            return state;
    }
};

export default postsReducer;
