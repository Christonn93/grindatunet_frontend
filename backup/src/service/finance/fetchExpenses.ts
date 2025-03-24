import { axiosInstance } from "@/service/auth/axiosInstance";
import { Expense } from "@/types/finance";

export const fetchExpenses = async (): Promise<Expense[]> => {
 try {
  const response = await axiosInstance.get<Expense[]>("/grindatunet/v1/finance/expense");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchExpenses:", error);
  throw new Error("Error during fetchExpenses");
 }
};
