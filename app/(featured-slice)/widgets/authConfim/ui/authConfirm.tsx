"use client";
import { postKakaoCode } from "@/app/(featured-slice)/features/auth/api";
import { useKakaoLogin } from "@/app/(featured-slice)/features/auth/query";
import React, { useEffect, useLayoutEffect, useState } from "react";

const AuthConfirm = ({ code }: any) => {
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

  useLayoutEffect(() => {
    console.log(code);

    const postLogin = async () => {
      const res = await postKakaoCode(code);
      console.log(res);
    };

    postLogin();
  }, []);

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
