import GeneratorForm from "./ui/generator-form";
import Link from "next/link";
import styles from "./generator.module.css";

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
