import { useQuery } from "@tanstack/react-query";

const useServicesArea = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      // const data = await fetch("http://localhost:3000/serviceswithArea");
      const data = await fetch("http://localhost:3000/serviceswithArea");
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useServicesArea;
