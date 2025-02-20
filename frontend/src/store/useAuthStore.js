import {create} from "zustand"
import {axiosInstance} from "../lib/axios.js"

export const useAuthStore = create((set) => ({
    authUser: null,
    isSigningUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = axiosInstance.get("/auth/check");

            set({authUser: res.data});
        } catch (error) {
            set({authUser: null});

            console.log("Error in checkAuth method: " + error.message);
        } finally { 
            set({isCheckingAuth: false});
        }
    },

    signup: async (data) => {

    }
}));
