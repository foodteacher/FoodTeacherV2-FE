/**Page params */
export interface PageParams<T, U> {
  params: T;
  searchParams: U;
}

/**소셜로그인 코드 */
export type Code = { code: string; state?: string; error: string };

/**token */
export interface Token {
  accessToken: string;
  refreshToken?: string;
  tokenType?: string;
}
