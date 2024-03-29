import { useLocation, useNavigate } from "react-router-dom";

import { toast } from "react-hot-toast";
import UseAuth from "../../Hooks/UseAuth";
import { saveUser } from "../../api/auth";

const SocialLogin = () => {
  const { googleSignIn } = UseAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // console.log(from);

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const loggedUser = result.user;

        saveUser(loggedUser)
          .then((data) => {
            // console.log(data);
            if (data.upsertedCount)
              toast.success("Singed up successfully", {
                duration: 3000,
                style: {
                  background: "#E3F4F4",
                  fontWeight: "700",
                },
              });
            navigate(from, { replace: true });
          })
          .catch((err) => console.log(err.message));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="pt-7 pb-4 text-center">
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="group h-12 px-6 border-2 border-gray-300 rounded-full transition duration-300 
 hover:border-blue-400 focus:bg-blue-50 active:bg-blue-100"
      >
        <div className="flex items-center justify-center gap-10 pr-10">
          <img
            src="https://tailus.io/sources/blocks/social/preview/images/google.svg"
            className=" w-5"
            alt="google logo"
          />
          <p className="block w-max font-semibold tracking-wide text-gray-700 text-sm transition duration-300 group-hover:text-blue-600 sm:text-base">
            Continue with Google
          </p>
        </div>
      </button>
    </div>
  );
};

export default SocialLogin;
