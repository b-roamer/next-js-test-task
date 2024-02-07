import React from 'react';
import { Post } from '../../utils/api.types';
import Link from 'next/link';

type Props = {
    post: Post;
}

export default function PostBlock ({ post }: Props) {
    return (
        <Link href={`/posts/${post.id}`} className='cursor-pointer max-w-xl w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 lg:dark:bg-zinc-800/30 hover:hover:bg-gray-800 transition mb-8'>
            <h3 className="text-xl mb-2">{post.title}</h3>
            <p className='opacity-50'>{post.body}</p>
        </Link>
    );
}