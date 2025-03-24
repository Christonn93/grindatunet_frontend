import { Separator } from "../ui/separator";

export const SmallHeading = ({ text, separator }: { text: string; separator?: boolean }) => {
 return (
  <>
   <h3 className="text-3xl font-semibold">{text}</h3>
   {!separator && <Separator />}
  </>
 );
};
