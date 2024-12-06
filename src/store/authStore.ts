import { create } from 'zustand';
import { account } from '../config/appwrite';
import { ID } from 'appwrite';

interface AuthState {
  user: any;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (email: string, password: string, name: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: false,
  login: async (email, password) => {
    set({ isLoading: true });
    try {
      await account.createEmailSession(email, password);
      const user = await account.get();
      set({ user });
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  signup: async (email, password, name) => {
    set({ isLoading: true });
    try {
      await account.create(ID.unique(), email, password, name);
      await account.createEmailSession(email, password);
      const user = await account.get();
      set({ user });
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },
  logout: async () => {
    try {
      await account.deleteSession('current');
      set({ user: null });
    } catch (error) {
      throw error;
    }
  },
}));