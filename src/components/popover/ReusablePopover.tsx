import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

export const ReusablePopover = ({ buttonText, children }: { buttonText: string; children: React.ReactNode }) => {
 return (
  <Popover>
   <PopoverTrigger>
    <Button>{buttonText}</Button>
   </PopoverTrigger>
   <PopoverContent className="w-auto p-6 mx-7 bg-white rounded shadow-lg">{children}</PopoverContent>
  </Popover>
 );
};
