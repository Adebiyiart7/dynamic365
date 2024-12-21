import { create } from "zustand";

interface SidebarStore {
  showSidebar: boolean;
  toggleSidebar: () => void;
}

export const useSidebar = create<SidebarStore>()((set) => ({
  showSidebar: true,

  toggleSidebar: () => {
    set((state) => ({
      showSidebar: !state.showSidebar,
    }));
  },
}));
