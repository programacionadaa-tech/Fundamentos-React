import { create } from "zustand";

interface AuthState{
    login: (email: string, password: string) => void;
    logout: () => void;
    status: 'authenticated' | 'unauthenticated' | 'checking';
    token?: string;
    user?: {
        name: string;
        email: string;
    };
}

export const useAuthStore = create<AuthState>((set) => ({
    status: 'checking',
    token: undefined,
    user: undefined,

    login: (email: string, password: string) => {
    set({ 
        status: 'checking',
        token: undefined,
        user: undefined,
    });

    setTimeout(() => {
        set({ 
            status: 'authenticated',
            token: '12345',
            user: {
                name: 'Capibara comprobadora',
                email: email,
            }
        });
    }, 500);
},

    logout: () => {
        set({ 
            status: 'unauthenticated', 
            token: undefined, 
            user: undefined 
        });
    },


}))