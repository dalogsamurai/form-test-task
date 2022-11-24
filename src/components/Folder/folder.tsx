import "./folder.sass";

export const Folder = () => {
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
