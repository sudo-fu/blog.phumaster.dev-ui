import React from 'react';

import { Link } from 'react-router-dom';

interface Props {
    title: string;
    date: string;
}

const SimplePostItem: React.FC<Props> = ({
    title,
    date,
}) => (
    <Link to={`/p/${1}`}>
        <div className="px-4 py-3 text-lgtext-black cursor-pointer flex items-center gap-2 hover:bg-gray-200 rounded">
            <div className="flex-1 text-sm">{title}</div>
            <div className="text-xs text-gray-600">{date.toUpperCase()}</div>
        </div>
    </Link>
);

export default SimplePostItem;
