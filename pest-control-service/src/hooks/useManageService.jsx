import { useQuery } from "@tanstack/react-query";

const useManageService = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3000/addServices", {
        credentials: "include",
      });

      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useManageService;
