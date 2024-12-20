import { RegisterForm } from "@/components/auth/register-form";
export const dynamic = "force-dynamic";
const RegisterPage = () => {
  return (
    <div className=" h-screen flex items-center justify-center ">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
