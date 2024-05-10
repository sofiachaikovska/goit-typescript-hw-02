import axios from "axios";
import { ImageData } from "../ImageCard/ImageCard.types";

export interface Response {
  total_pages: number;
  results: ImageData[];
}

export const requestImagesByQuery = async (
  query: string = "",
  page: number
): Promise<Response> => {
  const { data } = await axios.get<Response>(
    `https://api.unsplash.com/search/photos?client_id=_GcPUqQvTkuJ9X11ue4CuXyUx08X2HB3ZZQQgcF5zjU&query=${query}&page=${page}&per_page=12`
  );
  return data;
};
