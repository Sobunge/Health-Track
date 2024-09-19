import React, { createContext, useContext, useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase'; // Firebase config
import { doc, setDoc, getDoc } from 'firebase/firestore'; // Firestore functions
import { toast, ToastContainer } from 'react-toastify'; // Import toast and ToastContainer
import 'react-toastify/dist/ReactToastify.css'; // Import toast CSS

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  // Retrieve user data from Firestore after authentication
  const fetchUserData = async (uid) => {
    try {
      const userDocRef = doc(db, 'users', uid);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists()) {
        return userDoc.data(); // Return user data
      } else {
        console.error('No such document!');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  useEffect(() => {
    // Set up a listener for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setIsAuthenticated(true);

        // Fetch user details from Firestore and update currentUser
        const userData = await fetchUserData(user.uid);
        setCurrentUser({
          ...user,
          ...userData, // Merge Firestore user data with auth data
        });
      } else {
        setIsAuthenticated(false);
        setCurrentUser(null);
      }
    });

    // Clean up the listener on unmount
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Fetch user details from Firestore
      const userDocRef = doc(db, 'users', user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const userData = userDocSnap.data();

        // Set the current user state with the merged data
        setCurrentUser({
          ...user,
          ...userData, // Firestore data (e.g., firstName, middleName, lastName)
        });

        // Log user data including Firestore details
        console.log('User Data after login:', {
          ...user,
          ...userData, // Merge Firestore data
        });
        toast.success(`Welcome ${userData?.firstName}!`, {
          position: "bottom-right",
        });
      } else {
        console.log('No such document in Firestore for this user!');
      }

      setIsAuthenticated(true);
      return { success: true };
    } catch (error) {
      console.error('Login error:', error);
      return { success: false, message: error.message };
    }
  };

  const register = async (firstName, middleName, lastName, email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store user details in Firestore using the user's uid as the document ID
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        middleName,
        lastName,
        email
      });

      // Set user in the state after registration
      setIsAuthenticated(true);
      setCurrentUser({
        ...user,
        displayName: `${firstName} ${lastName}`,
        firstName,
        middleName,
        lastName,
        email,
      });

      return { success: true };
    } catch (error) {
      console.error('Registration error:', error);
      return { success: false, message: error.message };
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setIsAuthenticated(false);
      setCurrentUser(null);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, register, logout, currentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
