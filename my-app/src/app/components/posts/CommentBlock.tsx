import React from 'react';
import { Comment } from '../../utils/api.types';

type Props = {
    comment: Comment;
}

export default function CommentBlock ({ comment }: Props) {
    return (
        <div className='max-w-xl w-full bg-gradient-to-b from-zinc-200 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border bg-gray-200 p-4 lg:dark:bg-zinc-800/30 mb-8'>
            <h3 className="mb-2">{comment.email}</h3>
            <p className='opacity-50'>{comment.body}</p>
        </div>
    );
}