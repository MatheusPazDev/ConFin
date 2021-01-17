import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout title="Confin">
      <p className="mb-10 text-center">
        <Link href="/contador">
          <a className="text-2xl underline">Contador</a>
        </Link>
      </p>
      <h1 className="text-4xl mb-8 text-center ">Hello World</h1>
    </Layout>
  );
}
