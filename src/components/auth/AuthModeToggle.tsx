type Props = {
 isLogin: boolean;
 setMode: React.Dispatch<React.SetStateAction<"login" | "register">>;
};

export const AuthModeToggle = ({ isLogin, setMode }: Props) => (
 <div className="mt-6 text-center text-sm text-black">
  {isLogin ? (
   <>
    Du er ikke bruker?{" "}
    <button onClick={() => setMode("register")} className="font-semibold text-orange-500 hover:underline">
     Registrer deg
    </button>
   </>
  ) : (
   <>
    Du har bruker allerede?{" "}
    <button onClick={() => setMode("login")} className="font-semibold text-orange-500 hover:underline">
     Gå til login
    </button>
   </>
  )}
 </div>
);
