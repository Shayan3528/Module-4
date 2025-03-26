import { useEffect } from "react";

export default function Scroller() {
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollX, window.scrollY);
    }
    window.addEventListener("scroll",handleScroll);

    // return () => window.removeEventListener("scroll",handleScroll);
  },[]);

  return (
    <>
      <div style={{ fontSize: "100px" }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi
        nihil suscipit, ut ex repudiandae temporibus enim odit distinctio,
        possimus aperiam dolorem nam debitis rem? Repudiandae debitis, enim,
        minus assumenda dolorum a adipisci ab unde omnis quas facilis tenetur
        dicta. Harum adipisci distinctio saepe magnam aut quasi fugiat sit
        blanditiis architecto exercitationem vel sunt dignissimos maxime quam
        cum, nemo ab repellendus ipsam hic, unde dolor iure omnis optio error.
        Earum deserunt, fugit voluptatibus nemo quasi iste provident doloribus.
        Hic explicabo dicta delectus suscipit inventore, eius veniam atque,
        alias asperiores sit autem rerum ut aut voluptate qui voluptas earum,
        iste necessitatibus.
      </div>
    </>
  );
}
