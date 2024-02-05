import axios from 'axios';
import {
    fetchPostsRequest,
    fetchPostsSuccess,
    fetchPostsFail,

    fetchPostByIdRequest,
    fetchPostByIdSuccess,
    fetchPostByIdFail,

    fetchCommentsRequest,
    fetchCommentsSuccess,
    fetchCommentsFail,

    updatePostRequest,
    updatePostSuccess,
    updatePostFail,

    createPostRequest,
    createPostSuccess,
    createPostFail,

    deletePostRequest,
    deletePostSuccess,
    deletePostFail,
} from './actions';
import { NewPost, Post } from '../utils/api.types';

export const fetchPosts = () => async (dispatch: any) => {
    try {
        dispatch(fetchPostsRequest());
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        );
        dispatch(fetchPostsSuccess(response.data));
    } catch (error: any) {
        dispatch(fetchPostsFail(error.message));
    }
};

export const fetchPost = (postId: number) => async (dispatch: any) => {
    try {
        dispatch(fetchPostByIdRequest(postId));
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}`
        );
        dispatch(fetchPostByIdSuccess(response.data));
    } catch (error: any) {
        dispatch(fetchPostByIdFail(error.message));
    }
};

export const fetchComments = (postId: number) => async (dispatch: any) => {
    try {
        dispatch(fetchCommentsRequest(postId));
        const response = await axios.get(
            `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
        );
        dispatch(fetchCommentsSuccess(response.data));
    } catch (error: any) {
        dispatch(fetchCommentsFail(error.message));
    }
};

export const updatePost = (postId: number, updatedPostData: Post) => async (dispatch: any) => {
    try {
        dispatch(updatePostRequest());
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/posts/${postId}`,
            updatedPostData
        );
        dispatch(updatePostSuccess(response.data));
    } catch (error: any) {
        dispatch(updatePostFail(error.message));
    }
};

export const createPost = (newPostData: NewPost) => async (dispatch: any) => {
    try {
        dispatch(createPostRequest());
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/posts',
            newPostData
        );
        dispatch(createPostSuccess(response.data));
    } catch (error: any) {
        dispatch(createPostFail(error.message));
    }
};

export const deletePost = (postId: number) => async (dispatch: any) => {
    try {
        dispatch(deletePostRequest(postId));
        await axios.delete(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        dispatch(deletePostSuccess(postId));
    } catch (error: any) {
        dispatch(deletePostFail(error.message));
    }
};