import React, { useContext } from 'react';
import { valueConText } from '../../RootLayout/RootLayout';

const Blog = () => {
    const handleLogin = useContext(valueConText)
    return (
        <div>
            I am blog
        </div>
    );
};

export default Blog;