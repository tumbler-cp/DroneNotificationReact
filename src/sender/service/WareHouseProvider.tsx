import { createContext, ReactNode, useState } from "react";
import { Good, NewGood, RestoreGood } from "../types/SenderTypes";

interface WHContextType {
  goods: Good[];
  newGood: (good: NewGood) => Promise<void>;
  restoreGood: (good: RestoreGood) => Promise<void>;
  removeGood: (good: RestoreGood) => Promise<void>;
}

export const WHContext = createContext<WHContextType | undefined>(undefined);

export const WHProvider = ({ children }: { children: ReactNode }) => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(true);

  const newGood = async (good: NewGood) => {};
};
