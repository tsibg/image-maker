import GeneratorForm from "./(generator)/generator-form";
import Link from "next/link";
import styles from "./home.module.css";

const defaultPrompt = "Cat in a field of flowers";

export default function Page() {

  return (
    <>
      <h1 className={styles.title}>
        <Link href="/">Image Maker.</Link>
      </h1>
      <GeneratorForm defaultPrompt={defaultPrompt} />
    </>
  );
}
