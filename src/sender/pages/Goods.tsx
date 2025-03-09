import { CiCirclePlus } from "react-icons/ci";
import { Good } from "../types/SenderTypes";

const NewGoodComponent = () => {
  return (
    <div className="mx-auto border-3 border-black my-auto rounded-lg p-10 flex flex-col min-w-60 max-w-60 min-h-80 max-h-80 overflow-scroll overflow-x-scroll hover:text-white hover:bg-black hover:scale-110 hover:duration-200 duration-200 transition-all hover:transition-all hover:shadow-md">
      <p className="text-7xl mx-auto my-auto">
        <CiCirclePlus />
      </p>
    </div>
  );
};

const GoodComponent = ({ good }: { good: Good }) => {
  return (
    <div className="mx-auto border-3 border-black my-2  rounded-lg p-10 flex flex-col min-w-60 max-w-60 min-h-80 max-h-80 overflow-scroll overflow-x-scroll hover:text-white hover:bg-black hover:scale-110 hover:duration-200 duration-200 transition-all hover:transition-all hover:shadow-md">
      <p>Товар:{good.name}</p>
      <p>Вес: {good.weight}</p>
      <p>Описание: {good.description}</p>
      <p>Отправитель: {good.sender}</p>
    </div>
  );
};

const Goods = () => {
  const g: Good = {
    id: 1,
    name: "Аспирин",
    weight: 120,
    description: "Лекарство",
    sender: "ozerki",
  };

  return (
    <div className="p-10 flex flex-row flex-wrap overflow-auto">
      <NewGoodComponent />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
      <GoodComponent good={g} />
    </div>
  );
};

export default Goods;
