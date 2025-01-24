import { RegisterLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Register() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">This is regisster page</h1>

      <RegisterLink className="btn text-2xl btn-warning ">Sign up</RegisterLink>
    </div>
  );
}
