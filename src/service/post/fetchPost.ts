import { axiosInstance } from "../axiosInstance";

export type Post = {
 id: number;
 title: string;
 content: string;
};

export const fetchPosts = async (): Promise<Post[]> => {
 const response = await axiosInstance.get<Post[]>("/wp-json/wp/v2/posts");
 return response.data;
};
