import React from 'react';
import { useRecoilState } from 'recoil';

import ThemeState from './ThemeState';
import Header from './Header';
import Footer from './Footer';

const DefaultLayout: React.FC = ({ children }) => {
    const [theme] = useRecoilState(ThemeState);
    return (
        <div className={theme}>
            <div className="container mx-auto px-4 divide-y">
                <Header />
                <div className="py-4">{children}</div>
                <Footer />
            </div>
        </div>
    );
};

export default DefaultLayout;
