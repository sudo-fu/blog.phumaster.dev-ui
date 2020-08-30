import React from 'react';

import { Link } from 'react-router-dom';

interface Category {
    title: string;
    id: number;
    slug: string;
}

interface Props {
    title: string;
    description?: string;
    category?: Category;
    date: string;
    thumbnail: string;
}

const PostItem: React.FC<Props> = ({
    title,
    description,
    category,
    date,
    thumbnail
}) => (
    <div className="px-4 py-6">
        <Link to={`/p/${1}`}>
            <div className="text-lgtext-black cursor-pointer">{title}</div>
        </Link>
        <div className="text-sm mt-4 text-gray-800">{description}</div>
        <div className="text-xs text-gray-600 mt-4">
            <span>{date.toUpperCase()}</span>
            <span className="text-gray-500 mx-2"> ― </span>
            <span className="text-gray-800">{category?.title?.toUpperCase()}</span>
        </div>
    </div>
);

export default PostItem;
