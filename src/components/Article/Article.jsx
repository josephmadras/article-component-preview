import michelleAvatar from "../../images/avatar-michelle.jpg";
import drawers from "../../images/drawers.jpg";
const Article = () => {
  return (
    <section>
      <div>
        <img src={drawers} alt="Drawers" />
      </div>
      <div>
        <h1>
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>
        <p>
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>

        <div>
          <div>
            <img src={michelleAvatar} alt="Michelle Appleton Avatar" />
          </div>
          <div>
            <strong>Michelle Appleton</strong>
            <span> 28 Jun 2020</span>
          </div>
          <div>
            <i></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Article;
