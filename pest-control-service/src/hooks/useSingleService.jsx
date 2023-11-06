import { useQuery } from "@tanstack/react-query";

const useSingleService = ({ _id }) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["services", _id],
    queryFn: async () => {
      const data = await fetch(`http://localhost:3000/serviceswithArea/${_id}`);
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useSingleService;
