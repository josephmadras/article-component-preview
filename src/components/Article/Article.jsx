import michelleAvatar from "../../images/avatar-michelle.jpg";
import drawers from "../../images/drawers.jpg";
import "./Article.css";

const Article = () => {
  return (
    <section className="section">
      <div className="section__image">
        <img src={drawers} alt="Drawers" />
      </div>
      <div className="section__content">
        <h1 className="section__heading">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p className="section__paragraph">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>

        <div className="section__userDetails">
          <div className="section__userAvatar">
            <img src={michelleAvatar} alt="Michelle Appleton Avatar" />
          </div>
          <div className="section__userNameDate">
            <strong>Michelle Appleton</strong>
            <span> 28 Jun 2020</span>
          </div>
          <div>
            <i class="fas fa-share"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
