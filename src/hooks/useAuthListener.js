// import { useState, useEffect, useContext } from "react";
// import { useAuthContextProvider } from "../contexts/firebaseContext";
// import { auth } from ".././lib/firebase.prod";

// export default function useAuthListener() {
//     const [user, setUser] = useState(
//         JSON.parse(localStorage.getItem("authUser"))
//     );

//     const firebase  = useContext(FirebaseContext);

//     useEffect(() => {
//         const listener = firebase.auth().onAuthStateChanged((authUser) => {
//             if (authUser) {
//                 localStorage.setItem("authUser", JSON.stringify(authUser));
//                 setUser(authUser);
//             } else {
//                 localStorage.removeItem("authUser");
//                 setUser(null);
//             }
//         });

//         return () => listener();
       
//     }, []);

//     return { user };
// }