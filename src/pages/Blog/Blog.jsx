import React, { useContext, useEffect, useState } from 'react';
import { valueConText } from '../../RootLayout/RootLayout';

const Blog = () => {
    const handleLogin = useContext(valueConText)

    return (
        <div>
            I am Blog
           
            <br />
        </div>
    );
};

export default Blog;