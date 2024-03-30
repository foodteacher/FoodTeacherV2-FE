import axios from "axios";

const headers =
  process.env.NODE_ENV === "development"
    ? {
        "Content-Type": "application/json",
        "X-Environment": "dev",
      }
    : {
        "Content-Type": "application/json",
      };

export const instacne = axios.create({
  baseURL:
    process.env.NODE_ENV === "development"
      ? "/"
      : process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  headers,
});

/**요청 인터셉터 추가 */
instacne.interceptors.request.use(
  /**요청이 전달되기 전에 작업 수행 */
  (config) => {
    return config;
  },
  (error) => {
    /**요청 오류가 있을 때 수행 */
    return Promise.reject(error);
  }
);

/**응답 인터셉터 추가 */
instacne.interceptors.response.use(
  (res) => {
    /**2xx 범위의 상태 코드 trigger */
    return res;
  },
  (err) => {
    const {
      config,
      response: { status },
    } = err;
    /**2xx 범위 이외에 있는 상태 코드 trigger */
    // instacne(config);
    return Promise.reject(err);
  }
);

export const defaultApi = async () => {
  const res = await instacne.get("/");
  return res.data;
};
