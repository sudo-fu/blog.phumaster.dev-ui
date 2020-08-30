import React from 'react';

import MenuItem from './MenuItem';

const menu = [
    {
        id: 1,
        label: 'Home',
        link: '/'
    },
    {
        id: 2,
        label: 'React',
        link: '/'
    },
    {
        id: 3,
        label: 'Vue',
        link: '/'
    },
    {
        id: 4,
        label: 'Golang',
        link: '/'
    },
    {
        id: 5,
        label: 'PHP',
        link: '/'
    }
];

const MainMenu: React.FC = () => (
    <nav className="mt-4">
        <ul className="inline-flex items-center gap-4 flex-wrap">
            {menu.map((m) => (
                <MenuItem
                    key={m.id}
                    label={m.label}
                    link={m.link}
                />
            ))}
        </ul>
    </nav>
);

export default MainMenu;
