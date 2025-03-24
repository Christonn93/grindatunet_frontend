export type Expense = {
 id: number;
 description: string;
 amount: number;
 date: string;
};

export type ExpensePayload = {
 description: string;
 amount: number;
 date: string;
};

export type Income = {
 id: number;
 source: string;
 amount: number;
 date: string;
};

export type FinanceReport = {
 id: number;
 year: number;
 total_income: number;
 total_expense: number;
};

export type FinanceReportPayload = {
 year: number;
};
