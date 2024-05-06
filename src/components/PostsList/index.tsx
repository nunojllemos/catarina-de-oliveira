'use client'
import React, { useContext, useEffect, useState } from 'react'
import Grid from '../Grid'
import { Post } from '@/app/blog/page'
import BlogCard from '../Cards/BlogCard'
import { Context, SearchContext } from '@/context/SearchContext'

const PostsList = () => {
    const [posts, setPosts] = useState<Post[]>()
    const { inputValue } = useContext(SearchContext) as Context

    useEffect(() => {
        const fetchPosts = fetch('/blog-data.json')
            .then(res => res.json())
            .then(data => setPosts(data.data))
    }, [])

    return (
        <React.Fragment>
            <Grid className='gap-y-5 pb-16'>
                {posts
                    ?.filter(
                        post =>
                            post.is_featured &&
                            (post.title.toLowerCase().includes(inputValue.toLowerCase()) || post.author.toLowerCase().includes(inputValue.toLowerCase()))
                    )
                    .map(post => (
                        <div key={post.id} className='col-span-12 lg:col-span-6'>
                            <BlogCard slug={post.slug} author={post.author} date={post.date} title={post.title} src={post.cover} />
                        </div>
                    ))}
            </Grid>
            <Grid className='gap-y-5 pb-16'>
                {posts
                    ?.filter(
                        post =>
                            !post.is_featured &&
                            (post.title.toLowerCase().includes(inputValue.toLowerCase()) || post.author.toLowerCase().includes(inputValue.toLowerCase()))
                    )
                    .map(post => (
                        <div key={post.id} className='col-span-12 md:col-span-6 lg:col-span-4'>
                            <BlogCard slug={post.slug} isSmall={true} author={post.author} date={post.date} title={post.title} src={post.cover} />
                        </div>
                    ))}
            </Grid>
        </React.Fragment>
    )
}

export default PostsList
