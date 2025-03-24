import { Input } from "@/components/ui/input";

type Props = {
 isLogin: boolean;
};

export const AuthFormFields = ({ isLogin }: Props) => (
 <>
  {!isLogin && <Input name="name" placeholder="Full Name" required className="rounded-lg" />}
  <Input name="username" placeholder="Username" required className="rounded-lg" />
  <Input type="password" name="password" placeholder="Password" required className="rounded-lg" />
 </>
);
