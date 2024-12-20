import { LoginForm } from "@/components/auth/login-form";
export const dynamic = "force-dynamic";
const LoginPage = () => {
  return (
    <div className=" h-screen flex items-center justify-center ">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
