import { useQuery } from "@tanstack/react-query";
import { getUser } from "./api/SharedApi";

export const useUser = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["me"],
    queryFn: () => getUser(),
  });

  return { userData: data };
};
