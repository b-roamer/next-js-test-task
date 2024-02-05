import { NewPost, Post } from '../utils/api.types';

export const FETCH_POSTS_REQUEST = 'FETCH_POSTS_REQUEST';
export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POSTS_FAIL = 'FETCH_POSTS_FAIL';

export const FETCH_POST_BY_ID_REQUEST = 'FETCH_POST_BY_ID_REQUEST';
export const FETCH_POST_BY_ID_SUCCESS = 'FETCH_POST_BY_ID_SUCCESS';
export const FETCH_POST_BY_ID_FAIL = 'FETCH_POST_BY_ID_FAIL';

export const FETCH_COMMENTS_REQUEST = 'FETCH_COMMENTS_REQUEST';
export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENTS_FAIL = 'FETCH_COMMENTS_FAIL';

export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAIL = 'UPDATE_POST_FAIL';

export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAIL = 'DELETE_POST_FAIL';

export const CREATE_POST_REQUEST = 'CREATE_POST_REQUEST';
export const CREATE_POST_SUCCESS = 'CREATE_POST_SUCCESS';
export const CREATE_POST_FAIL = 'CREATE_POST_FAIL';

export type Action = {
    type: string;
    payload: any;
}

// fetch posts
export const fetchPostsRequest = () => ({
    type: FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts: Post[]) => ({
    type: FETCH_POSTS_SUCCESS,
    payload: posts,
});

export const fetchPostsFail = (error: any) => ({
    type: FETCH_POSTS_FAIL,
    payload: error,
});

// fetch post by id
export const fetchPostByIdRequest = (postId: number) => ({
    type: FETCH_POST_BY_ID_REQUEST,
    payload: postId
});

export const fetchPostByIdSuccess = (postId: number) => ({
    type: FETCH_POST_BY_ID_SUCCESS,
    payload: postId,
});

export const fetchPostByIdFail = (error: any) => ({
    type: FETCH_POST_BY_ID_FAIL,
    payload: error,
});

// fetch comments of a post by id
export const fetchCommentsRequest = (postId: number) => ({
    type: FETCH_COMMENTS_REQUEST,
    payload: postId
});

export const fetchCommentsSuccess = (postId: number) => ({
    type: FETCH_COMMENTS_SUCCESS,
    payload: postId,
});

export const fetchCommentsFail = (error: any) => ({
    type: FETCH_COMMENTS_FAIL,
    payload: error,
});

// update post by id
export const updatePostRequest = () => ({
    type: UPDATE_POST_REQUEST,
});

export const updatePostSuccess = (post: Post) => ({
    type: UPDATE_POST_SUCCESS,
    payload: post,
});

export const updatePostFail = (error: any) => ({
    type: UPDATE_POST_FAIL,
    payload: error,
});

// creating a new post
export const createPostRequest = () => ({
    type: CREATE_POST_REQUEST,
});

export const createPostSuccess = (post: NewPost) => ({
    type: CREATE_POST_SUCCESS,
    payload: post,
});

export const createPostFail = (error: any) => ({
    type: CREATE_POST_FAIL,
    payload: error,
});

// delete post by id
export const deletePostRequest = (postId: number) => ({
    type: DELETE_POST_REQUEST,
    payload: postId
});

export const deletePostSuccess = (postId: number) => ({
    type: DELETE_POST_SUCCESS,
    payload: postId
});

export const deletePostFail = (error: any) => ({
    type: DELETE_POST_FAIL,
    payload: error,
});
