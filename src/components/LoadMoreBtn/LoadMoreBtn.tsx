import css from "./LoadMoreBtn.module.css";
import { FC } from "react";
import { LoadMoreBtnProps } from "./LoadMoreBtn.types";

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ onClick }) => {
  return (
    <div className={css.loadMoreBtnContainer}>
      <button onClick={onClick} className={css.loadMoreBtn}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
