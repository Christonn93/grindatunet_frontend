import { Separator } from "../ui/separator";

export const MainHeading = ({ text, separator }: { text: string; separator?: boolean }) => {
 return (
  <>
   <h1 className="text-3xl font-semibold">{text}</h1>
   {!separator && <Separator />}
  </>
 );
};
