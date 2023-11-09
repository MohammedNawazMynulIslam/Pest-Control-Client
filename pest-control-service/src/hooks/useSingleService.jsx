import { useQuery } from "@tanstack/react-query";

const useSingleService = ({ _id }) => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["services", _id],
    queryFn: async () => {
      try {
        const response = await fetch(
          `https://pestcontrol-seven.vercel.app/serviceswithAreaandemail/${_id}`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        return jsonData;
      } catch (error) {
        console.error("Error fetching data:", error);
        throw error;
      }
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useSingleService;
