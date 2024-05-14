import { useQuery } from "@tanstack/react-query";
import { getUser } from "../api/SharedApi";

export const useUser = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: () => getUser(),
  });
};
