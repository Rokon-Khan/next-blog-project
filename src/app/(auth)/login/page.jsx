import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

<LogoutLink>Log out</LogoutLink>;

export default function Login() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">This is login page</h1>
      <LoginLink className="btn bg-warning">Sign in</LoginLink>
      <LogoutLink className="btn bg-warning">Log out</LogoutLink>
    </div>
  );
}
