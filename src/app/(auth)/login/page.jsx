import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

export default function Login() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Welcome to Login </h1>
      <div className="card max-w-sm mx-auto p-4 space-y-4">
        <LoginLink className="btn bg-warning">Sign in</LoginLink>
        <LogoutLink className="btn bg-warning">Log out</LogoutLink>
      </div>
    </div>
  );
}
