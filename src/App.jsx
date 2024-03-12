import { useState } from "react";
import { TVShowAPI } from "./api/tv-shows";
import s from "./style.module.css";
import { useEffect } from "react";
const BACKDROPBASE_URL = 'https://image.tmdb.org/t/p/original';

function App() {
  const [currentTVShow, setCurrentTVShow] = useState();

  async function fetchPopulars() {
    const popularTVShowList = await TVShowAPI.fetchPopulars();
    if (popularTVShowList.length > 0) {
      setCurrentTVShow(popularTVShowList[0]);
    }
  }

  useEffect(() => {
    fetchPopulars();
  }, []);

  console.log(currentTVShow);

  return (
    <div
      className={s.main_container}
      style={{
        background: currentTVShow
          ? `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)),
           url("${BACKDROPBASE_URL}${currentTVShow.backdrop_path}") no-repeat center / cover`
          : "black",
      }}
    >
      <div className={s.header}>
        <div className="row">
          <div className="col-4">
            <div>Logo</div>
            <div>subtitle</div>
          </div>
          <div className="col-md-12 col-lg-4">
            <input style={{ width: "100%" }} type="text" />
          </div>
          {/* <div className="">test2</div> */}
        </div>
      </div>
      <div className={s.tv_show}>tv_show</div>
      <div className={s.recomended_tv_shows}>recommended_tv_shows</div>
    </div>
  );
}

export default App;
