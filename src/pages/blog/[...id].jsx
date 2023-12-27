import { useRouter } from 'next/router';
import React from 'react';

const Blog = () => {
    const router = useRouter();
    return <div>{router.query.id}</div>;
};

export default Blog;
