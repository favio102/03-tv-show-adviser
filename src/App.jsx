import { TVShowAPI } from './api/tv-shows'
import s from "./style.module.css";

TVShowAPI.fetchPopulars();
function App() {
  return (
    <div className={s.main_container}>
      <div className={s.header}>
          <div className="row">
            <div className="col-4">
              <div>Logo</div>
              <div>subtitle</div>
            </div>
            <div className="col-md-12 col-lg-4">
              <input style={{width:'100%'}} type="text"/>
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
