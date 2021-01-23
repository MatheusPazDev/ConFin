import Link from "next/link";

const IndexPage = () => (
  <div className="bg-blue-100">
    <h1>Hello Next.js 👋</h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </div>
);

export default IndexPage;
