
//  import React, { useState, useContext } from "react";
// import AuthLayout from "../../components/layouts/AuthLayout";
// import { useNavigate, Link } from "react-router-dom";
// import Input from "../../components/inputs/input";
// import { validateEmail } from "../../utils/helper";
// import axiosInstance from "../../utils/axiosInstance";
// import { API_PATHS } from "../../utils/apiPaths"; 
// import { UserContext } from "../../context/UserContext";




// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);

// const {updateUser}=useContext(UserContext);

//   const navigate = useNavigate();
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     if (!validateEmail(email)) {
//       setError("Please enter a valid email address");
//       return;
//     }
//     if (!password) {
//       setError("Please enter your password");
//       return;
//     }
//     setError("");

//     try {
//       // const LOGIN_URL = "/api/v1/auth/login"; // concrete endpoint
//       const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN,
//         { email, password });

//       const { token, user } = response.data || {};
//       if (token) {
//         localStorage.setItem("token", token);
//         updateUser(user);
//         console.log(user);
        
//         navigate("/dashboard");
//         // return;
//       }

//       // // If backend returned a message but no token
//       // setError(response.data?.message || "Invalid credentials");
//     } catch (err) {
//       if(err.response && error.response.data.message){
//         setError(err.response.data.message);
//       }
//       else{

//         setError("Something went wrong. Please try again.");
//       }
//     }
//   }

//   return (
//     // <AuthLayout>
//     //   <div className="max-w-md mx-auto bg-white bg-opacity-90 border border-purple-100 rounded-2xl shadow-2xl p-10 pb-7 flex flex-col items-center animate-login-in"
//     //        style={{ minWidth: 340 }}>
//     //     <h3 className="text-2xl font-bold text-black mb-1 tracking-tight animate-fade-in">
//     //       Welcome Back 👋
//     //     </h3>
//     //     <p className="text-sm text-slate-700 mb-6 animate-fade-in-slow">
//     //       Please enter your details to log in
//     //     </p>
//     //     <form className="w-full" onSubmit={handleLogin} autoComplete="on">
//     //       <div className="mb-4 relative group">
//     //         <input
//     //           type="text"
//     //           value={email}
//     //           onChange={e => setEmail(e.target.value)}
//     //           className="peer w-full px-4 py-3 rounded-lg bg-purple-50 outline-none border border-purple-300 focus:bg-purple-100 focus:ring-2 focus:ring-purple-300 transition-all duration-400"
//     //           id="login-email"
//     //           placeholder=" "
//     //           autoFocus
//     //         />
//     //         <label htmlFor="login-email"
//     //           className="absolute left-4 top-3 text-slate-500 text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-500 bg-white px-2 rounded pointer-events-none"
//     //         >
//     //           Email Address
//     //         </label>
//     //       </div>
//     //       <div className="mb-4 relative group">
//     //         <input
//     //           type="password"
//     //           value={password}
//     //           onChange={e => setPassword(e.target.value)}
//     //           className="peer w-full px-4 py-3 rounded-lg bg-purple-50 outline-none border border-purple-300 focus:bg-purple-100 focus:ring-2 focus:ring-purple-300 transition-all duration-400"
//     //           id="login-password"
//     //           placeholder=" "
//     //         />
//     //         <label htmlFor="login-password"
//     //           className="absolute left-4 top-3 text-slate-500 text-base transition-all duration-300 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-6 peer-focus:text-sm peer-focus:text-purple-500 bg-white px-2 rounded pointer-events-none"
//     //         >
//     //           Password
//     //         </label>
//     //       </div>
//     //       {error && (
//     //         <p className="text-red-500 text-sm mb-2 animate-shake">
//     //           {error}
//     //         </p>
//     //       )}
//     //       <button
//     //         type="submit"
//     //         className={`w-full py-3 mt-2 font-bold rounded-lg text-white bg-purple-500 hover:bg-purple-600 transition-all duration-300 shadow-md shadow-purple-300 active:scale-96 focus:ring-2 focus:ring-purple-300 animate-button-in`}
//     //         disabled={loading}
//     //       >
//     //         {loading ? "Logging In..." : "Log In"}
//     //       </button>
//     //     </form>
//     //     <p className="text-xs text-slate-800 mt-4">
//     //       Don&apos;t have an account?{" "}
//     //       <Link to="/signup" className="font-semibold text-purple-500 underline hover:text-purple-700 transition-all">Sign Up</Link>
//     //     </p>
//     //   </div>
//     //   <style>{`
//     //     .animate-login-in { animation: cardIn 0.7s cubic-bezier(.42,1.64,.41,.8); }
//     //     @keyframes cardIn { 0% { opacity: 0; transform: translateY(48px) scale(0.94); } 100% { opacity: 1; transform: translateY(0px) scale(1); } }
//     //     .animate-fade-in { animation: fadeInTitle 0.7s cubic-bezier(.42,1.64,.41,.8); }
//     //     .animate-fade-in-slow { animation: fadeInTitle 1.2s 0.2s cubic-bezier(.42,1.64,.41,.8) backwards; }
//     //     @keyframes fadeInTitle { from { opacity: 0; transform: translateY(21px);} to { opacity: 1; transform: translateY(0);} }
//     //     .animate-shake { animation: shake 0.3s linear; }
//     //     @keyframes shake { 10%, 90% { transform: translateX(-2px); } 20%, 80% { transform: translateX(4px); } 30%, 50%, 70% { transform: translateX(-8px);} 40%, 60% { transform: translateX(8px); } }
//     //     .animate-button-in { animation: buttonIn 0.8s cubic-bezier(.42,1.64,.41,.8); }
//     //     @keyframes buttonIn { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0);} }
//     //   `}</style>
//     // </AuthLayout>
//     <AuthLayout>
//   <div
//     className="max-w-xl mx-auto bg-white bg-opacity-90 border border-purple-100 rounded-2xl shadow-2xl p-14 pb-10 flex flex-col items-center animate-login-in"
//     style={{ minWidth: 420 }} // bigger min width & more padding
//   >
//     <h3 className="text-3xl font-bold text-black mb-1 tracking-tight animate-fade-in">
//       Welcome Back <span role="img" aria-label="waving hand">👋</span>
//     </h3>
//     <p className="text-base text-slate-700 mb-6 animate-fade-in-slow">
//       Please enter your details to log in
//     </p>
//     <form className="w-full" onSubmit={handleLogin} autoComplete="on">
//       <div className="mb-7 relative group">
//         <input
//           type="text"
//           value={email}
//           onChange={e => setEmail(e.target.value)}
//           className="peer w-full px-4 py-4 rounded-lg bg-purple-50 outline-none border border-purple-300 focus:bg-purple-100 focus:ring-2 focus:ring-purple-300 text-lg transition-all duration-400"
//           id="login-email"
//           placeholder=" "
//           autoFocus
//         />
//         <label htmlFor="login-email"
//           className="absolute left-4 top-3 text-slate-500 text-lg transition-all duration-300
//           peer-placeholder-shown:top-3 
//           peer-placeholder-shown:text-lg 
//           peer-focus:-top-6 
//           peer-focus:text-sm 
//           peer-focus:text-purple-500
//           bg-white px-2 rounded pointer-events-none"
//         >
//           Email Address
//         </label>
//       </div>
//       <div className="mb-7 relative group">
//         <input
//           type="password"
//           value={password}
//           onChange={e => setPassword(e.target.value)}
//           className="peer w-full px-4 py-4 rounded-lg bg-purple-50 outline-none border border-purple-300 focus:bg-purple-100 focus:ring-2 focus:ring-purple-300 text-lg transition-all duration-400"
//           id="login-password"
//           placeholder=" "
//         />
//         <label htmlFor="login-password"
//           className="absolute left-4 top-3 text-slate-500 text-lg transition-all duration-300
//           peer-placeholder-shown:top-3 
//           peer-placeholder-shown:text-lg 
//           peer-focus:-top-6 
//           peer-focus:text-sm 
//           peer-focus:text-purple-500
//           bg-white px-2 rounded pointer-events-none"
//         >
//           Password
//         </label>
//       </div>
//       {error && (
//         <p className="text-red-500 text-sm mb-2 animate-shake">
//           {error}
//         </p>
//       )}
//       <button
//         type="submit"
//         className="w-full py-3 mt-2 font-bold rounded-lg text-white bg-purple-500 hover:bg-purple-600 transition-all duration-300 shadow-md shadow-purple-300 active:scale-96 focus:ring-2 focus:ring-purple-300 animate-button-in"
//         disabled={loading}
//       >
//         {loading ? "Logging In..." : "Log In"}
//       </button>
//     </form>
//     <p className="text-sm text-slate-800 mt-4">
//       Don&apos;t have an account?{" "}
//       <Link to="/signup" className="font-semibold text-purple-500 underline hover:text-purple-700 transition-all">Sign Up</Link>
//     </p>
//   </div>
//   {/* ...animations style tag remains the same... */}
// </AuthLayout>

//   );
// };

// export default Login;
import React, { useState, useContext } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useNavigate, Link } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import { UserContext } from "../../context/UserContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const { updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await axiosInstance.post(API_PATHS.AUTH.LOGIN, {
        email,
        password,
      });

      const { token, user } = response.data || {};

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
    } finally {
      setLoading(false);
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
          flex flex-col items-center
          animate-login-in
        "
      >
        <h3
          className="
            text-2xl sm:text-3xl
            font-bold text-black
            mb-1 tracking-tight
            animate-fade-in
            text-center
          "
        >
          Welcome Back <span role="img" aria-label="waving hand">👋</span>
        </h3>

        <p
          className="
            text-sm sm:text-base
            text-slate-700
            mb-6
            text-center
            animate-fade-in-slow
          "
        >
          Please enter your details to log in
        </p>

        <form className="w-full" onSubmit={handleLogin} autoComplete="on">
          {/* Email */}
          <div className="mb-5 sm:mb-7 relative group">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="login-email"
              placeholder=" "
              autoFocus
              className="
                peer w-full
                px-4 py-3 sm:py-4
                rounded-lg
                bg-purple-50
                outline-none
                border border-purple-300
                focus:bg-purple-100
                focus:ring-2 focus:ring-purple-300
                text-base sm:text-lg
                transition-all
              "
            />
            <label
              htmlFor="login-email"
              className="
                absolute left-4 top-3
                text-slate-500
                text-base sm:text-lg
                transition-all duration-300
                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg
                peer-focus:-top-6
                peer-focus:text-sm
                peer-focus:text-purple-500
                bg-white px-2 rounded
                pointer-events-none
              "
            >
              Email Address
            </label>
          </div>

          {/* Password */}
          <div className="mb-5 sm:mb-7 relative group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="login-password"
              placeholder=" "
              className="
                peer w-full
                px-4 py-3 sm:py-4
                rounded-lg
                bg-purple-50
                outline-none
                border border-purple-300
                focus:bg-purple-100
                focus:ring-2 focus:ring-purple-300
                text-base sm:text-lg
                transition-all
              "
            />
            <label
              htmlFor="login-password"
              className="
                absolute left-4 top-3
                text-slate-500
                text-base sm:text-lg
                transition-all duration-300
                peer-placeholder-shown:top-3
                peer-placeholder-shown:text-base sm:peer-placeholder-shown:text-lg
                peer-focus:-top-6
                peer-focus:text-sm
                peer-focus:text-purple-500
                bg-white px-2 rounded
                pointer-events-none
              "
            >
              Password
            </label>
          </div>

          {error && (
            <p className="text-red-500 text-sm mb-3 animate-shake text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              py-3
              mt-2
              font-bold
              rounded-lg
              text-white
              bg-purple-500
              hover:bg-purple-600
              transition-all duration-300
              shadow-md shadow-purple-300
              active:scale-95
              focus:ring-2 focus:ring-purple-300
              animate-button-in
            "
          >
            {loading ? "Logging In..." : "Log In"}
          </button>
        </form>

        <p className="text-sm text-slate-800 mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link
            to="/signup"
            className="font-semibold text-purple-500 underline hover:text-purple-700 transition-all"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default Login;
