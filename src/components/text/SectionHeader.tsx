import { ReactNode } from "react";
import { Separator } from "@/components/ui/separator";

export type SectionHeaderProps = {
 title: string;
 as?: React.ElementType;
 actionButton?: ReactNode;
 withSeparator?: boolean;
};

export function SectionHeader({ title, as: TitleTag = "h1", actionButton, withSeparator = false }: SectionHeaderProps) {
 return (
  <div>
   <div className="flex justify-between items-center mb-1">
    <TitleTag className="text-3xl font-semibold">{title}</TitleTag>
    {actionButton}
   </div>
   {withSeparator && <Separator />}
  </div>
 );
}
