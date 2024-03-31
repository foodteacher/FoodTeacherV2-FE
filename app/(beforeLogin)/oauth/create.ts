"use server";

import { cookies } from "next/headers";

export const create = (jwtToken: any) => {
  // ...

  const refresh = jwtToken?.refresh["set-cookie"];
  console.log(refresh);
  //   cookies().set({
  //     name: "refresh",
  //     value: "123",
  //     httpOnly: true,
  //     path: "/",
  //   });
  cookies().delete("re");

  return;
};
