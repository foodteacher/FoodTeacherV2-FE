import dynamic from "next/dynamic";
import LoginForm from "./(featured-slice)/features/auth/ui/LoginForm";
import styles from "./page.module.css";
const SttForm = dynamic(
  () => import("./(featured-slice)/features/stt/ui/SttButton"),
  {
    ssr: false,
  }
);

export default function Home() {
  return (
    <main>
      <LoginForm />
      <SttForm />
    </main>
  );
}
