import { CabinRulesCard } from "@/components/card/CabinRulesCard";
import { WeatherContainer } from "@/components/container/WeatherContainer";
import { NewsList } from "@/components/list/NewsList";

export const Home = () => {
 const userName = "Christopher";

 return (
  <div
   className="grid p-4 h-screen gap-4
      grid-rows-[auto_1fr_auto] md:grid-rows-[auto_1fr] 
      grid-cols-1 md:grid-cols-[1fr_auto]"
  >
   {/* Header */}
   <header className="p-4 col-span-1 md:col-span-2">
    <h1 className="text-2xl font-bold">Velkommen {userName} til Grindatunet!</h1>
    <div id="introduction" className="mt-4">
     <p>Grindatunet er en liten og koselig campingplass som ligger i naturskjønne omgivelser ved foten av Rondane nasjonalpark.</p>
    </div>
   </header>

   {/* Main Content */}
   <main className="p-4 md:col-span-1">
    <CabinRulesCard />
   </main>

   {/* Sidebar */}
   <aside className="p-4 md:col-span-1 md:max-w-full overflow-auto">
    <WeatherContainer />
    <div id="feedContainer">
     <h2 className="text-xl font-semibold text-center mb-10">Siste nytt</h2>
     <NewsList />
    </div>
   </aside>
  </div>
 );
};
