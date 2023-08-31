import {signInWithGooglePopup} from "../../utils/firbase/firbase.utils"

export const SignIn = () => {
    const logGoogleUser = async()=>{
        const response = await signInWithGooglePopup();
        console.log(response);
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
