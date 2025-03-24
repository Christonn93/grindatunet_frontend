import { axiosInstance } from "@/service/auth/axiosInstance";
import { Income } from "@/types/finance";

export const fetchIncomes = async (): Promise<Income[]> => {
 try {
  const response = await axiosInstance.get<Income[]>("/grindatunet/v1/finance/income");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchIncomes:", error);
  throw new Error("Error during fetchIncomes");
 }
};
