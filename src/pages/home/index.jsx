import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <h1>hello</h1>
            <div className="flex flex-col gap-1 p-10">
                <Link href="/" className="bg-white text-black">
                    Home
                </Link>
                <Link className="bg-white text-black" href="/blog/1">
                    Blog 1
                </Link>
                <Link className="bg-white text-black" href="/blog/2">
                    Blog 2
                </Link>
                <Link
                    className="bg-white text-black"
                    href={{
                        pathname: '/blog/[slug]',
                        query: { slug: ['a', 'b', 'c'] },
                    }}
                >
                    Blog multiple params
                </Link>
                <Link className="bg-white text-black" href="/blog/hello">
                    Hello
                </Link>
                <Link className="bg-white text-black" href="/blog/hello/test">
                    TEST
                </Link>
                <Link className="bg-white text-black" href="/about">
                    About
                </Link>
            </div>
        </main>
    );
}
