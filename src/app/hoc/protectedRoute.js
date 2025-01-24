"use client";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs";
// import { useRouter } from "next/router";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = (WrappedComponent) => {
  return function Protected(props) {
    const { isAuthenticated, isLoading, user } = useKindeAuth();
    const router = useRouter();

    useEffect(() => {
      if (!isLoading && !isAuthenticated) {
        // Redirect to login page if not authenticated
        router.push("/login");
      }
    }, [isAuthenticated, isLoading, router]);

    if (isLoading) {
      // Show a loading spinner or placeholder while checking authentication
      return <div>Loading...</div>;
    }

    // If authenticated, render the wrapped component
    // return isAuthenticated ? <WrappedComponent {...props} /> : null;
    return isAuthenticated ? <WrappedComponent {...props} user={user} /> : null;
  };
};

export default ProtectedRoute;
