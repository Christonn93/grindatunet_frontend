import { axiosInstance } from "@/service/auth/axiosInstance";
import { FinanceReport } from "@/types/finance";

export const fetchFinanceReports = async (): Promise<FinanceReport[]> => {
 try {
  const response = await axiosInstance.get<FinanceReport[]>("/grindatunet/v1/finance/report");
  return response.data;
 } catch (error) {
  console.error("Failed to fetchFinanceReports:", error);
  throw new Error("Error during fetchFinanceReports");
 }
};
