import Link from "next/link";

export default function Error(param) {
  return (
    <h1>
      Error 404 | {' '}
      <Link href="/">Go back</Link>
    </h1>
  );
}
