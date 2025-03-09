export type Good = {
  id: number;
  name: string;
  weight: number;
  description: string;
  sender: string;
};

export type NewGood = {
  name: string;
  weight: number;
  description: string;
};

export type RestoreGood = {
  good: NewGood;
  quantity: number;
};
