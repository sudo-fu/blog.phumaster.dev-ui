import React from 'react';
import SimplePostItem from '../../components/SimplePostItem';

const post = {
    title: `This is post 1`,
    thumbnail: 'https://znews-photo.zadn.vn/w660/Uploaded/mdf_uswreo/2019_09_18/g4.jpg',
    description: 'Một bài viết là một từ được sử dụng với một danh từ để chỉ định sự rõ ràng về ngữ pháp của danh từ đó, và trong một số ngôn ngữ mở rộng đến phạm vi âm lượng hoặc số. Một bài viết là một từ được sử dụng với một danh từ để chỉ định sự rõ ràng về ngữ pháp của danh từ đó, và trong một số ngôn ngữ mở rộng đến phạm vi âm lượng hoặc số. Một bài viết là một từ được sử dụng với một danh từ để chỉ định sự rõ ràng về ngữ pháp của danh từ đó, và trong một số ngôn ngữ mở rộng đến phạm vi âm lượng hoặc số. ',
    date: 'January 14th 1995',
    category: {
        id: 1,
        title: 'React',
        slug: 'react'
    }
};

const Post: React.FC = () => (
    <div className="divide-y">
        <article className="p-4">
            <img
                src={post.thumbnail}
                alt={post.title}
                className="max-w-full rounded mx-auto"
            />
            <h1 className="font-light text-lg my-4 text-gray-600 text-center">{post.title}</h1>
            <p className="text-justify">{post.description}</p>
            <p className="text-justify">{post.description}</p>
            <p className="text-justify">{post.description}</p>
            <p className="text-justify">{post.description}</p>
        </article>
        <div>
            <h2 className="px-4 pt-4 text-gray-600">Related post</h2>
            {[1, 2, 3, 4, 5].map(() => <SimplePostItem key={`${Math.random()}`} {...post} />)}
        </div>
    </div>
);

export default Post;
