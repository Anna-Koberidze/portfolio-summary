import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Contact = () => {
  const theme = useSelector((state) => state.theme.theme);
  let contactClass;
  let imgSrcCon;
  switch (theme) {
    case 1:
      contactClass = "initial-contact";
      imgSrcCon = "./images/profile-data.png";
      break;
    case 2:
      contactClass = "blue-contact";
      imgSrcCon = "./images/undraw_Private_data_re_4eab.png";
      break;
    case 3:
      contactClass = "gold-contact";
      imgSrcCon = "./images/undraw_My_documents_re_13dc.png";
      break;
    case 4:
      contactClass = "pink-contact";
      imgSrcCon = "./images/undraw_Contact_us_re_4qqt.png";
      break;
    default:
      contactClass = "";
      break;
  }
  return (
    <div className={`div-body ${contactClass}`}>
      <section className="contact-info">
        <h1 className="contact-h1">Contact Me</h1>
        <section className="gmail">
          <label>Gmail</label>
          <p>annakoberidze1@gmail.com</p>
        </section>
        <section className="mobile">
          <label>Mobile</label>
          <p>+995 599 14 99 24</p>
        </section>
        <section className="location">
          <label>Location</label>
          <p>Tbilisi, Georgia</p>
        </section>
        <section className="linkedin">
          <label>linkedIn</label>
          <a
            target="_blank"
            rel="noreferrer"
            className="linkedin-link"
            href="https://www.linkedin.com/in/anna-koberidze-4759a91a2/"
          >
            LinkedIn Profile
          </a>
        </section>
        <section className="working-state">
          <label>Open to work</label>
          <p>Remotely / On-site</p>
        </section>
      </section>
      <section className="photo-contacts">
        <img
          class="contacts-img"
          alt="illustration of contact information"
          src={imgSrcCon}
        />
      </section>
    </div>
  );
};

export default Contact;
