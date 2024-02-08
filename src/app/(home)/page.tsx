import styles from "./styles.module.scss";
import { getMyAddresses } from "./apis";

export default async function Home() {
  await getMyAddresses().then((res1) => {

  });

  return (
    <main className={styles.main}>
    </main>
  );
}
