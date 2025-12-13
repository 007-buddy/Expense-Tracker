// import React, { useContext, useState } from "react";
// import AuthLayout from "../../components/layouts/AuthLayout";
// import { useNavigate, Link } from "react-router-dom";
// import Input from "../../components/inputs/input";
// import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
// import { validateEmail } from "../../utils/helper";
// import axiosInstance from "../../utils/axiosInstance";
// import { API_PATHS } from "../../utils/apiPaths";
// import { UserContext } from "../../context/UserContext";
// import uploadImage from "../../utils/uploadImage";

// const SignUp = () => {
//   const [profilePic, setProfilePic] = useState(null);
//   const [fullName, setFullName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const [error, setError] = useState(null);

//   const { updateUser } = useContext(UserContext);
//   const navigate = useNavigate();

//   // handle sign up form submit
//   const handleSignUp = async (e) => {
//     e.preventDefault();

//     let profileImageUrl = "";
//     if (!fullName) {
//       setError("Please enter your full name");
//       return;
//     }
//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }
//    if (!password || password.length < 8) {
//   setError("Password must be at least 8 characters");
//   return;
// }

//     setError("");
//     // Add your sign up logic here
//     try {
//       // upload image if present
//       if (profilePic) {
//         const imgUploadRes = await uploadImage(profilePic);
//         profileImageUrl = imgUploadRes.imageUrl || "";
//       }

//       const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
//         fullName,
//         email,
//         password,
//         profileImageUrl,
//       });
//       const { token, user } = response.data;
//       if (token) {
//         localStorage.setItem("token", token);
//         updateUser(user);
//         navigate("/dashboard");
//       }
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         setError(error.response.data.message);
//       } else {
//         setError("something wernt wrong,please try again.");
//       }
//     }
//   };

//   return (
//     <AuthLayout>
//       <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 flex flex-col justify-center">
//         <h3 className="text-xl font-semibold text-black">Create an Account</h3>
//         <p className="text-xs text-slate-700 mt-[5px] mb-6">
//           Join us today by entering your details below.
//         </p>
//         <form onSubmit={handleSignUp}>
//           <ProfilePhotoSelector image={profilePic} setImage={setProfilePic} />
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Input
//               value={fullName}
//               onChange={({ target }) => setFullName(target.value)}
//               label="Full Name"
//               placeholder="John"
//               type="text"
//             />
//             <Input
//               value={email}
//               onChange={({ target }) => setEmail(target.value)}
//               label="Email Address"
//               placeholder="john@example.com"
//               type="text"
//             />
//             <div className="col-span-2">
//               <Input
//                 value={password}
//                 onChange={({ target }) => setPassword(target.value)}
//                 label="Password"
//                 placeholder="Min 8 characters"
//                 type="password"
//               />
//             </div>
//           </div>
//           {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
//           <button type="submit" className="btn-primary mt-4 w-full">
//             Sign Up
//           </button>
//           <p className="text-[13px] text-slate-800 mt-3">
//             Already have an account?{" "}
//             <Link className="font-medium text-blue-500 underline" to="/login">
//               Login
//             </Link>
//           </p>
//         </form>
//       </div>
//     </AuthLayout>
//   );
// };

// export default SignUp;
import React, { useContext, useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate, Link } from "react-router-dom";
import Input from "../../components/inputs/input";
import ProfilePhotoSelector from "../../components/inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";
import uploadImage from "../../utils/uploadImage";

const SignUp = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    let profileImageUrl = "";

    if (!fullName) {
      setError("Please enter your full name");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    }

    setError("");

    try {
      if (profilePic) {
        const imgUploadRes = await uploadImage(profilePic);
        profileImageUrl = imgUploadRes.imageUrl || "";
      }

      const response = await axiosInstance.post(API_PATHS.AUTH.REGISTER, {
        fullName,
        email,
        password,
        profileImageUrl,
      });

      const { token, user } = response.data;

      if (token) {
        localStorage.setItem("token", token);
        updateUser(user);
        navigate("/dashboard");
      }
    } catch (err) {
      if (err.response && err.response.data?.message) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <AuthLayout>
      <div
        className="
          w-full
          max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl
          mx-auto
          bg-white bg-opacity-90
          border border-purple-100
          rounded-2xl
          shadow-2xl
          p-6 sm:p-8 md:p-10 lg:p-14
          mt-6 md:mt-0
          animate-login-in
        "
      >
        <h3 className="text-2xl sm:text-3xl font-semibold text-black text-center">
          Create an Account
        </h3>

        <p className="text-sm sm:text-base text-slate-700 text-center mt-2 mb-6">
          Join us today by entering your details below.
        </p>

        <form onSubmit={handleSignUp} className="w-full">
          {/* Profile Photo */}
          <div className="flex justify-center mb-6">
            <ProfilePhotoSelector
              image={profilePic}
              setImage={setProfilePic}
            />
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              value={fullName}
              onChange={({ target }) => setFullName(target.value)}
              label="Full Name"
              placeholder="John Doe"
              type="text"
            />

            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              label="Email Address"
              placeholder="john@example.com"
              type="text"
            />

            <div className="sm:col-span-2">
              <Input
                value={password}
                onChange={({ target }) => setPassword(target.value)}
                label="Password"
                placeholder="Min 8 characters"
                type="password"
              />
            </div>
          </div>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center animate-shake">
              {error}
            </p>
          )}

          <button
            type="submit"
            className="
              w-full
              mt-6
              py-3
              font-bold
              rounded-lg
              text-white
              bg-purple-500
              hover:bg-purple-600
              transition-all duration-300
              shadow-md shadow-purple-300
              active:scale-95
              focus:ring-2 focus:ring-purple-300
            "
          >
            Sign Up
          </button>

          <p className="text-sm text-slate-800 mt-4 text-center">
            Already have an account?{" "}
            <Link
              className="font-medium text-purple-500 underline hover:text-purple-700"
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
