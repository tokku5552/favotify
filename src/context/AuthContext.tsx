import { createContext } from "react";
import firebaseClient from "../lib/firebase-client";

const AuthContext = createContext<{ user: firebaseClient.User | null }>({
  user: null,
});

export default AuthContext;
