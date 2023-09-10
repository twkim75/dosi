import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: "loading",
  storage: sessionStorage,
});

export const loadingState = atom({
  key: "loading",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
