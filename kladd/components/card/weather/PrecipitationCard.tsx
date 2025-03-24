import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Umbrella, Info } from "lucide-react";

type PrecipitationProps = {
 message: string;
};

export const PrecipitationCard = ({ message }: PrecipitationProps) => {
 return (
  <Card className="shadow-md border border-gray-200 p-4 rounded-xl w-64 flex-1 bg-white">
   <CardHeader className="flex items-center gap-2">
    <Umbrella size={16} />
    <CardTitle className="text-md font-bold">Nedbørvarsel</CardTitle>
    <Info size={16} className="ml-auto text-gray-500" />
   </CardHeader>
   <CardContent>
    <p className="text-gray-700">{message}</p>
   </CardContent>
  </Card>
 );
};
