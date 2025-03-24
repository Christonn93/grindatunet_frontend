export const SubscribeForm = () => {
 return (
  <div className="rounded-xl border bg-white p-6 shadow-sm space-y-4">
   <div className="text-center">
    <h3 className="text-lg font-semibold text-gray-900">Abonner på Hyttenytt</h3>
    <p className="text-sm text-foreground">Hold deg oppdatert med siste nytt fra styret.</p>
   </div>

   <form className="flex flex-col gap-4">
    <div className="flex flex-col gap-1">
     <label htmlFor="email" className="text-sm font-medium text-gray-700">
      E-postadresse
     </label>
     <input
      type="email"
      id="email"
      name="email"
      placeholder="din@epost.no"
      className="w-full rounded-md border px-3 py-2 text-sm shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
      required
     />
    </div>

    <button type="submit" className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-white hover:bg-primary/90 transition">
     Abonner
    </button>
   </form>
  </div>
 );
};
