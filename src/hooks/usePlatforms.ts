import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import ApiClient from "../services/apiClient";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new ApiClient<Platform[]>("/platforms/lists/parents");

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents");
const usePlatforms = () => {
  return useQuery<Platform[], Error>({
    queryKey: ["platforms"],
    queryFn: () => apiClient.getAll(),
    // queryFn: async () => {
    //   const response = await axiosInstance.get<Platform[]>(
    //     "/platforms/lists/parents"
    //   );
    //   return response.data;
    // },
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    initialData: platforms,
  });
};

export default usePlatforms;
