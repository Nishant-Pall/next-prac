import React from 'react';
import { useRouter } from 'next/router';

const Blog = () => {
    const router = useRouter();
    return <div>{router.query.id}</div>;
};

export default Blog;
