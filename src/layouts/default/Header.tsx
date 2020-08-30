import React from 'react';

import GithubIcon from '../../assets/icons/GithubLogo';
import TwitterLogo from '../../assets/icons/TwitterLogo';
import LinkedinLogo from '../../assets/icons/LinkedinLogo';
import UserIcon from '../../assets/icons/UserIcon';
import RssIcon from '../../assets/icons/RssIcon';
import MainMenu from './MainMenu';

const Header: React.FC = () => (
    <header className="p-4">
        <div className="flex gap-2 items-center">
            <div className="font-semibold text-2xl text-black">phumaster <sup className="text-gray-600 font-light text-xs">blog</sup></div>
            <div className="flex-1 text-right">
                <div className="inline-flex gap-2 items-end">
                    <a href="#a">
                        <GithubIcon
                            className="w-4"
                            fill="#444444"
                        />
                    </a>
                    <a href="#a">
                        <TwitterLogo
                            className="w-4"
                            fill="#444444"
                        />
                    </a>
                    <a href="#a">
                        <LinkedinLogo
                            className="w-4"
                            fill="#444444"
                        />
                    </a>
                    <a href="#a">
                        <UserIcon
                            className="w-4"
                            fill="#444444"
                        />
                    </a>
                    <a href="#a">
                        <RssIcon
                            className="w-4"
                            fill="#444444"
                        />
                    </a>
                </div>
            </div>
        </div>
        <MainMenu />
    </header>
);

export default Header;
