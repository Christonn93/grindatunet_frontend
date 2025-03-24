import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

type TabItem = {
 id: string;
 label: string;
 content: React.ReactNode;
};

type TabsParentProps = {
 tabs: TabItem[];
 defaultTab?: string;
};

export const TabsParent = ({ tabs, defaultTab }: TabsParentProps) => {
 return (
  <Tabs defaultValue={defaultTab || tabs[0].id} className="w-full">
   {/* Tabs List */}
   <TabsList className="flex w-full border-b border-gray-300 bg-transparent">
    {tabs.map(({ id, label }) => (
     <TabsTrigger
      key={id}
      value={id}
      className="flex-1 text-center px-4 py-2 text-gray-600 transition-colors duration-200 
                       data-[state=active]:text-orange-600 hover:text-orange-600"
     >
      {label}
     </TabsTrigger>
    ))}
   </TabsList>

   {/* Tabs Content */}
   {tabs.map(({ id, content }) => (
    <TabsContent key={id} value={id} className="p-4">
     {content}
    </TabsContent>
   ))}
  </Tabs>
 );
};
