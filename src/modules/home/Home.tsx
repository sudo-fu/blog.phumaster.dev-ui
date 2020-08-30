import React from 'react';

import PostItem from '../../components/PostItem';

const posts = Array(10).fill(null).map((_, i) => ({
    id: i,
    title: `This is post ${i}`,
    thumbnail: 'https://znews-photo.zadn.vn/w660/Uploaded/mdf_uswreo/2019_09_18/g4.jpg',
    description: 'Một bài viết là một từ được sử dụng với một danh từ để chỉ định sự rõ ràng về ngữ pháp của danh từ đó, và trong một số ngôn ngữ mở rộng đến phạm vi âm lượng hoặc số. ',
    date: 'January 14th 1995',
    category: {
        id: i,
        title: 'React',
        slug: 'react'
    }
}))

const Home: React.FC = () => (
    <article className="divide-y">
        {posts.map((post) => (
            <PostItem
                key={post.id}
                title={post.title}
                description={post.description}
                category={post.category}
                date={post.date}
                thumbnail={post.thumbnail}
            />
        ))}
    </article>
);

export default Home;
