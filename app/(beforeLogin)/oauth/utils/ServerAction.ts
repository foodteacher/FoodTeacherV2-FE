("use server");
import { cookies } from "next/headers";

export default async function () {
  cookies().set("fwqe", "1324", { secure: true, httpOnly: true });
}
