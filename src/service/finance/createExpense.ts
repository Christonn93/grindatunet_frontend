import { axiosInstance } from "@/service/auth/axiosInstance";
import { Expense, ExpensePayload } from "@/types/finance";

export const createExpense = async (data: ExpensePayload): Promise<Expense> => {
 try {
  const response = await axiosInstance.post<Expense>("/grindatunet/v1/finance/expense", data);
  return response.data;
 } catch (error) {
  console.error("Failed to createExpense:", error);
  throw new Error("Error during createExpense");
 }
};
