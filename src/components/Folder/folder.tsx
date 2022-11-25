import { useEffect, useState } from "react";
import "./folder.sass";

export const Folder = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("http://185.244.172.108:8081/v1/outlay-rows/entity/create")
      // fetch("http://185.244.172.108:8081/v1/outlay-rows/entity/{eID}/row/list")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  console.log(items);

  return (
    <div className="folder">
      <div className="folder__row">
        <div className="folder__name">Уровень</div>
        <div className="folder__name">Наименование работ</div>
        <div className="folder__name">Основная з/п</div>
        <div className="folder__name">Оборудование</div>
        <div className="folder__name">Накладные расходы</div>
        <div className="folder__name">Сметная прибыль</div>
      </div>
      <div className="folder__row">
        <div className="folder__value">1</div>
        <div className="folder__value">Южная строительная площадка</div>
        <div className="folder__value">20 348</div>
        <div className="folder__value">1 750</div>
        <div className="folder__value">108,07</div>
        <div className="folder__value">1 209 122,5</div>
      </div>
    </div>
  );
};
