import create from "zustand";

export const screenSize = create((set) => ({
  width: window.innerWidth,
  height: window.innerHeight,
  setWidth: (width) => set({ width: width }),
  setHeight: (height) => set({ height: height }),
}));
