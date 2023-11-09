import { useQuery } from "@tanstack/react-query";

const useBooking = () => {
  const { data, isLoading, isFetching, refetch } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const data = await fetch("https://pestcontrol-seven.vercel.app/booking", {
        credentials: "include",
      });
      return await data.json();
    },
  });
  return { data, isLoading, isFetching, refetch };
};

export default useBooking;
