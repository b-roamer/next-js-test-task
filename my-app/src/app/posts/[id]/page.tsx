'use client';

import Button from '@/app/components/common/Button';
import ButtonLink from '@/app/components/common/ButtonLink';
import CommentBlock from '@/app/components/posts/CommentBlock';
import { deletePost, fetchComments, fetchPost, updatePost } from '@/app/store/thunks';
import { Comment } from '@/app/utils/api.types';
import { useAppDispatch, useAppSelector } from '@/app/utils/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function EditPostPage ({ params }: { params: { id: string } }) {
    const dispatch = useAppDispatch();
    const { post, comments, loading, error } = useAppSelector((state) => state);
    const router = useRouter();

    const [updatedPostData, setUpdatedPostData] = useState({
        id: post?.id,
        userId: post?.userId,
        title: post?.title,
        body: post?.body,
    });

    useEffect(() => {
        dispatch(fetchPost(params.id as unknown as number));
        dispatch(fetchComments(params.id as unknown as number));
    }, [dispatch, params.id]);

    useEffect(() => {
        setUpdatedPostData(post);
    }, [post]);

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setUpdatedPostData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdatePost = () => {
        dispatch(updatePost(post.id, updatedPostData));
    };

    const handleDeletePost = () => {
        dispatch(deletePost(post.id));
        router.push('/posts');
    };

    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-16">
                <ButtonLink text="< Posts" href="/posts" />
            </div>
            <div className='w-full max-w-xl'>
                <form className='flex flex-col'>
                    <label>Title:</label>
                    <textarea
                        name="title"
                        value={updatedPostData?.title}
                        onChange={handleInputChange}
                        className='w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 lg:dark:bg-zinc-800/30 hover:hover:bg-gray-800 transition mb-8'
                    />

                    <label>Body:</label>
                    <textarea
                        name="body"
                        value={updatedPostData?.body}
                        onChange={handleInputChange}
                        className='w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 lg:dark:bg-zinc-800/30 hover:hover:bg-gray-800 transition mb-8'
                        rows={5}
                    />

                    <div className='flex space-x-8 mt-4'>
                        <Button text='Delete Post' extraClasses='hover:hover:bg-red-500 transition mb-8' onClick={handleDeletePost} />

                        <Button text='Update Post' extraClasses='hover:hover:bg-green-500 transition mb-8' onClick={handleUpdatePost} />
                    </div>
                </form>

                <p>Comments:</p>
                {comments.map((comment: Comment) => {
                    return (
                        <CommentBlock key={comment.id} comment={comment} />
                    )
                })}
            </div>

        </main>
    );
}