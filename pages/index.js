import { useAuth } from "@/lib/auth";
export default function Index() {
  const auth = useAuth();
  return auth.user ? (
    <div>
      {console.log(auth.user)}

      <p>Email1: {auth.user.email}</p>
      <div>name: {auth.user.displayName} </div>
      <button onClick={(e) => auth.signout()}>Sign Out</button>
    </div>
  ) : (
    <button onClick={(e) => auth.signinWithGitHub()}>Sign In</button>
  );
}
