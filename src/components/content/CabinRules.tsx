import { Card } from "@/components/ui/card";
import { CheckCircle, Trash2, ThermometerSnowflake, Wind } from "lucide-react";

export const CabinRules = () => {
 return (
  <div className="flex justify-center  min-h-[content] bg-white p-6">
   <Card className="w-full max-w-2xl shadow-lg border border-gray-200 p-6 rounded-2xl">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Hytteregler</h2>

    <div className="space-y-4">
     {/* Oppvarming i vinterhalvåret */}
     <div className="flex items-start gap-3">
      <ThermometerSnowflake className="text-blue-500 w-6 h-6" />
      <p>
       <strong>Oppvarming i vinterhalvåret:</strong> Ved avreise skal alle varmeovner stå på <strong>10°C</strong>, <strong>15°C</strong> på badet.
      </p>
     </div>

     {/* Peisovnen regler */}
     <div className="flex items-start gap-3">
      {/* <Fire className="text-red-500 w-6 h-6" /> */}
      <p>
       <strong>Peisovnen i stua:</strong> Skal være tømt for aske og klargjort med opptenningsved for neste leietaker. Vedkurven skal være fylt opp med ved.
      </p>
     </div>

     {/* Lufteventiler */}
     <div className="flex items-start gap-3">
      <Wind className="text-gray-500 w-6 h-6" />
      <p>
       <strong>Lufteventiler:</strong> Skal være lukket.
      </p>
     </div>

     {/* Renhold */}
     <div className="flex items-start gap-3">
      <CheckCircle className="text-green-500 w-6 h-6" />
      <p>
       <strong>Renhold:</strong> Alle rom som har vært brukt, skal rengjøres. Ryer tas ut og ristes. Store tepper skal være rene.
      </p>
     </div>

     {/* Søppel */}
     <div className="flex items-start gap-3">
      <Trash2 className="text-gray-700 w-6 h-6" />
      <p>
       <strong>Søppel:</strong> Alle rydder opp etter seg. Søppel kastes i container nede ved hovedvegen.
      </p>
     </div>

     {/* Askehåndtering */}
     <div className="flex items-start gap-3">
      {/* <Fire className="text-orange-500 w-6 h-6" /> */}
      <p>
       <strong>Askehåndtering:</strong> Aske fra ovnen tømmes i tønne merket "Aske" ved avreise. Ved ankomst flyttes asken over i en søppelpose og kastes i container nede ved hovedvei.
      </p>
     </div>
    </div>
   </Card>
  </div>
 );
};
