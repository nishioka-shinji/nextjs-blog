import Link from 'next/link';
import Image from 'next/image';

const YourComponent = () => (
  <Image
    src="/images/profile.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Your Name"
  />
);

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <a href="/">Back to home A</a>
        <Link href="/">Back to home</Link>
      </h2>
      <img src="/images/profile.jpg" alt="Your Name" />
      <YourComponent />
    </>
  );
}