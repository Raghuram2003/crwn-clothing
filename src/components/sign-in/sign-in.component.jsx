import {signInWithGooglePopup , createUserDocumentFromAuth} from "../../utils/firbase/firbase.utils"

export const SignIn = () => {
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const userDocRef = await  createUserDocumentFromAuth(user)
    }
  return (
    <div>
      <h1>sign in</h1>
      <button onClick={logGoogleUser}>
        sign in with google popup
      </button>
    </div>
  );
};
