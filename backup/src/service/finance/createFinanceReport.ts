import { axiosInstance } from "@/service/auth/axiosInstance";
import { FinanceReport, FinanceReportPayload } from "@/types/finance";

export const createFinanceReport = async (data: FinanceReportPayload): Promise<FinanceReport> => {
 try {
  const response = await axiosInstance.post<FinanceReport>("/grindatunet/v1/finance/report", data);
  return response.data;
 } catch (error) {
  console.error("Failed to createFinanceReport:", error);
  throw new Error("Error during createFinanceReport");
 }
};
