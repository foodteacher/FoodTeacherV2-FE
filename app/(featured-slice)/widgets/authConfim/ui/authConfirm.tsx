"use client";
import { postKakaoCode } from "@/app/(featured-slice)/features/auth/api";
import { useKakaoLogin } from "@/app/(featured-slice)/features/auth/query";
import React, { useEffect, useLayoutEffect, useState } from "react";

const AuthConfirm = ({ token }: any) => {
  // const [token, setToken] = useState(null);

  // useEffect(() => {
  //   const getToken = async () => {
  //     const data = await postKakaoCode(kakaoCode);

  //     console.log(data);
  //     //   setToken(data);
  //   };

  //   getToken();
  // }, []);

  //   kakaoLoginHandler(kakaoCode);

  console.log(token);

  return (
    <>
      {/* {kakaoCode ? (
        <div>Authentication success</div>
      ) : (
        <div>Not Authentication</div>
      )} */}
      <div>fewqf</div>
      {/* <p>token : {token}</p> */}
    </>
  );
};

export default AuthConfirm;
