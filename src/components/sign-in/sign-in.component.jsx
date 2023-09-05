import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firbase/firbase.utils";
import SignUpForm from "../sign-up/sign-up.component";
export const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    console.log(userDocRef);
  };

  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>sign in with google popup</button>
      <SignUpForm/>
    </div>
  );
};
