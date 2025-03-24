import { MainHeading } from "../text/MainHeading";
import { Button } from "../ui/button";
import { BaseContainer } from "./BaseContainer";

export const FeedbackContainer = () => {
 return (
  <BaseContainer>
   <div className="flex flex-grow justify-between gap-5 lg:w-6xl md:w-5xl sm:w-3xl sx:w-2xl">
    <MainHeading text="Hytteboka" />
    <Button>Skriv i boka</Button>
   </div>
  </BaseContainer>
 );
};
