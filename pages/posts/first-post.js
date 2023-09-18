import Link from 'next/link';

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <a href="/">Back to home A</a>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  );
}