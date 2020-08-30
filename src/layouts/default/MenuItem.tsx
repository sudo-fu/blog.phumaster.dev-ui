import React from 'react';

interface Props {
    label: string;
    link: string;
}

const MenuItem: React.FC<Props> = ({ label, link }) => (
    <li>
        <a href={link} className="text-sm font-light text-gray-600 hover:text-black">{label.toUpperCase()}</a>
    </li>
);

export default MenuItem;
