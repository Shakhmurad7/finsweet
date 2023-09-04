import React, { useState } from "react";
import PageContainer from "../../PageContainer";
import style from "./Work.module.css";
import { Link } from "react-router-dom";

const Worldata = [
  {
    id: 1,
    img: "Cover.png",
    category: "Webflow Design",
    item: "Template 1",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    title: "View Portfolio",
  },
  {
    id: 2,
    img: "Cover (1).png",
    category: "Webflow Design",
    item: "Template 2",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    title: "View Portfolio",
  },
  {
    id: 3,
    category: "Webflow Design",
    img: "Cover (2).png",
    category: "UI Design",
    item: "Template 3",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    title: "View Portfolio",
  },
  {
    id: 4,
    img: "Cover (3).png",
    category: "Webflow Design",
    item: "Template 4",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    title: "View Portfolio",
  },
  {
    id: 5,
    img: "Cover (4).png",
    category: "Webflow Design",
    item: "Template 5",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    title: "View Portfolio",
  },
  {
    id: 6,
    img: "Cover (5).png",
    category: "Figma Designi",
    item: "Template 6",
    text: "Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle.",
    title: "View Portfolio",
  },
];
function Work() {
  const [open, setOpen] = useState("Ali"); // Initialize open with the default category
  const Tab = (category) => {
    setOpen(category);
  };
  const filteredData = Worldata.filter((item) => {
    if (open === "Ali") {
      return Worldata;
    } else {
      return item.category === open;
    } // Filter based on the selected category
  });
  return (
    <PageContainer>
      <div className={style["section-text-top"]}>
        <p>What we created</p>
        <h2>Our Work Portfolio</h2>
        <p>
          We help teams create great digital products by providing them with
          tools and technology to make the design-to-code process universally
          accessible.
        </p>
        <div className={style["section-icon"]}>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
        </div>
      </div>

      <div className={style["section-container"]}>
        <div className="Big-container">
          <div className={style["section-container-top-text"]}>
            <h3
              className={
                style[open === "Ali" ? `h3-element-active` : `h3-element`]
              }
              onClick={() => Tab("Ali")}
            >
              Ali
            </h3>
            <h3
              className={
                style[open === "UI Design" ? `h3-element-active` : `h3-element`]
              }
              onClick={() => Tab("UI Design")}
            >
              UI Design
            </h3>
            <h3
              className={
                style[
                  open === "Webflow Design" ? `h3-element-active` : `h3-element`
                ]
              }
              onClick={() => Tab("Webflow Design")}
            >
              Webflow Design
            </h3>
            <h3
              className={
                style[
                  open === "Figma Designi" ? `h3-element-active` : `h3-element`
                ]
              }
              onClick={() => Tab("Figma Designi")}
            >
              Figma Designi
            </h3>
          </div>

          <div className={style["section-container-block"]}>
            {filteredData.map(({ item, text, img, title , id}) => {
              return (
                <div className={style["Work-block"]}>
                  <img src={`./img/${img}`} />
                  <h2>{item}</h2>
                  <p>{text}</p>
                  <Link to={`/Work/${id}`}>
                  <div className={style["section-row-icon"]}>
                  <p className={style["p-element"]}> {title}</p>
                  <i class="fa-solid fa-arrow-right"></i>
                  </div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>


      <div className={style["section-end"]}>
        <h2>Let's build something great together</h2>
        <p>Nullam vitae purus at tortor mattis dapibus. Morbi purus est, ultricies nec dolor sit amet, scelerisque cursus purus.</p>
        <Link to={"/Contact"}>Contact Us</Link>
      </div>
    </PageContainer>
  );
}

export default Work;
