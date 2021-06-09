import style from "./Row.module.css";

const Row = ({ left, rigth }) => {
  return (
    <div className={style.wrapper}>
      {left}
      {rigth}
    </div>
  );
};

export default Row;
