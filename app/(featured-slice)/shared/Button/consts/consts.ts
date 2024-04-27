type Mode = "prod" | "dev";

export const KAKAO_URL = (redirect_uri: string, mode: Mode): string => {
  return `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${redirect_uri}&response_type=code&state=${mode}`;
};

export const NAVER_URL = (redirect_uri: string, mode: Mode): string => {
  return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_CLIENT_ID}&state=${mode}&redirect_uri=${redirect_uri}&state=${mode}`;
};
