export const KAKAO_URL = (redirect_uri: string): string => {
  return `https://kauth.kakao.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_KAKAO_REST_KEY}&redirect_uri=${redirect_uri}&response_type=code`;
};

export const NAVER_URL = (redirect_uri: string): string => {
  return `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${process.env.NEXT_PUBLIC_NAVER_REST_ID}&state=${false}&redirect_uri=${redirect_uri}`;
};
