import { axiosInstance } from "../axiosInstance";

export type UserProfile = {
 id: number;
 email: string;
 display_name: string;
 roles: string[];
};

export const fetchUserProfile = async (): Promise<UserProfile> => {
 const response = await axiosInstance.get<UserProfile>("/wp-json/wp/v2/users/me");
 return response.data;
};
