import imgbanner from "../../assets/img/banner.jpg";
import style from "./styles.module.scss";
function Banner() {
  return (
    <div className={style.banner}>
      <img src={imgbanner} alt="" />
    </div>
  );
}

export default Banner;
