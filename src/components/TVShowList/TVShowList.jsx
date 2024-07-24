import Marquee from "react-fast-marquee";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";
import s from "./style.module.css";

export function TVShowList({ tvShowList, onClickItem }) {
  return (
    <div>
      <div className={s.title}>You will probably like:</div>
      <Marquee autoFill pauseOnHover>
        <div className={s.list}>
          {tvShowList.map((tvShow) => {
            return (
              <span className={s.tv_show_item} key={tvShow.id}>
                <TVShowListItem tvShow={tvShow} onClick={onClickItem} />
              </span>
            );
          })}
        </div>
      </Marquee>
    </div>
  );
}
