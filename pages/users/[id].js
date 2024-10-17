import { useRouter } from "next/router";
import styles from "../../styles/user.module.scss";

export default function ({user}) {
  return <div className={styles.user}>User {user.name} with id {user.id}</div>;
}

export async function getServerSideProps({params}) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
  const user = await response.json();

  return {
    props: {user}
  };
}
