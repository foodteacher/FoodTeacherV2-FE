"use client";
import { postKakaoLogin } from "@/app/(featured-slice)/features/auth/api";
import { postNaverLogin } from "@/app/(featured-slice)/features/auth/api/api";
import { Code } from "@/app/(featured-slice)/shared/type";
import React, { useLayoutEffect } from "react";

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
    const postLogin = async (code: Code) => {
      let accessToken;
      if (code?.state) {
        const data = await postNaverLogin(code);
        console.log("naver :", data);
      } else {
        const data = await postKakaoLogin(code);
        console.log("kakao :", data);
      }
    };

    postLogin(code);
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
