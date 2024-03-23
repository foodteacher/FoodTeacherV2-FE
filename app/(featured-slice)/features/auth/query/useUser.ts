import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/api";
import { authKey } from "./queryKey";

export const useUser = () => {
  const {
    data = [],
    isFetching,
    isLoading,
  } = useQuery({
    queryKey: authKey.userInfo,
    queryFn: () => getUser(),
  });

  return { data, isFetching, isLoading };
};
