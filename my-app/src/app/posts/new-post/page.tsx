'use client';

import Button from '@/app/components/common/Button';
import ButtonLink from '@/app/components/common/ButtonLink';
import Comment from '@/app/components/posts/Comment';
import { createPost, deletePost, fetchComments, fetchPost, updatePost } from '@/app/store/thunks';
import { useAppDispatch, useAppSelector } from '@/app/utils/hooks';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function NewPostPage () {
    const dispatch = useAppDispatch();
    // const { post, comments, loading, error } = useAppSelector((state) => state);
    const router = useRouter();

    const [postData, setPostData] = useState({
        title: '',
        body: '',
    });

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;
        setPostData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCreatePost = () => {
        dispatch(createPost(postData));
        router.push('/posts')
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
                        value={postData?.title}
                        onChange={handleInputChange}
                        className='w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 lg:dark:bg-zinc-800/30 hover:hover:bg-gray-800 transition mb-8'
                    />

                    <label>Body:</label>
                    <textarea
                        name="body"
                        value={postData?.body}
                        onChange={handleInputChange}
                        className='w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 lg:dark:bg-zinc-800/30 hover:hover:bg-gray-800 transition mb-8'
                        rows={5}
                    />

                    <div className='flex space-x-8 mt-4'>
                        <Button text='+ Add Post' extraClasses='hover:hover:bg-green-500 transition mb-8' onClick={handleCreatePost} />
                    </div>
                </form>
            </div>

        </main>
    );
}