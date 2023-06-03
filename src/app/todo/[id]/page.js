import Link from 'next/link';
import React from 'react';

const page = ({ params }) => {
    return (
        <div>
            <p>Single Todo page , Todo ID: {params.id}</p>
            <Link href={'/'}>Back Home</Link>
        </div>
    );
};

export default page;