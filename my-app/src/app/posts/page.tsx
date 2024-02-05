'use client';

import React, { useEffect } from 'react';
import ButtonLink from '../components/common/ButtonLink';
import { getPosts } from '../utils/api';
import Post from '../components/posts/Post';
import { fetchPosts } from '../store/thunks';
import { useAppDispatch, useAppSelector } from '../utils/hooks';
import Button from '../components/common/Button';
import { useRouter } from 'next/navigation';

export default function PostsPage () {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { posts } = useAppSelector((state) => state);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex mb-16">
        <ButtonLink text="< Home" href="/" />
      </div>

      <Button text='+ Add Post' extraClasses='hover:hover:bg-green-500 transition mb-8 max-w-xl' onClick={() => router.push("/posts/new-post")} />

      {posts.map(post => {
        return (
          <Post key={post.id} post={post} />
        )
      })}
    </main>
  );
}
