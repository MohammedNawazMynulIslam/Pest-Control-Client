import { useQuery } from "@tanstack/react-query";
const useServices = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const data = await fetch("http://localhost:3000/services");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};
export default useServices;
