import Image from "next/image";
import styles from "./page.module.css";

import { useSocialToken } from "./(featured-slice)/features/auth/hooks";
import LoginForm from "./(featured-slice)/features/auth/ui/LoginForm";

export default function Home() {
  return (
    <main>
      <LoginForm />
    </main>
  );
}
