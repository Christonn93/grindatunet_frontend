type Props = {
 isLogin: boolean;
};

export const AuthTitle = ({ isLogin }: Props) => (
 <div className="text-center mb-8">
  <h1 className="text-3xl font-extrabold text-gray-800">{isLogin ? "Velkommen til grinda tunet" : "Opprett en bruker"}</h1>
  <p className="text-sm text-foreground mt-1">{isLogin ? "Logg inn for å booke et opphold" : "Registrer deg for å kunne booke et opphold"}</p>
 </div>
);
