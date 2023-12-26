import Link from "next/link";

export default function Home() {
	return (
		<main>
			<h1>hello</h1>
			<Link href="/">Home</Link>
			<Link href="/blog/hello">Hello</Link>
			<Link href="/about">About</Link>
		</main>
	);
}
