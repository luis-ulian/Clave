import {create} from "zustand"
import {axiosInstance} from "../lib/axios.js"
import toast from "react-hot-toast";
import { LogOut } from "lucide-react";

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
        set({isSigningUp: true})
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({authUser: res.data});
            toast.success("Conta criada com sucesso!");
        } catch (error) {
            set({isSigningUp : false});
            toast.error(error.response.data.message);
        }
    },

    logout: async(data) => {
        try {
            await axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Saiu com sucesso")
        } catch (error) {
            toast.error(error.response.data.message);
        }
    },
}));
