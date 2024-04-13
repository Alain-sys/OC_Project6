// @ts-ignore image path
function Banner({ bannerImage, title }) {
  return (
    <section className="banner">
      <div className="banner__decoration">
        <img
          className="banner__image"
          src={bannerImage}
          alt="paysage montagneux"
        />
        {title && (
          <h1 className="banner__title">
            <span className="banner__line">Chez vous, </span>
            <span className="banner__line">partout et ailleurs</span>
          </h1>
        )}
      </div>
    </section>
  );
}

Banner.defaultProps = {
  title: false,
};

export default Banner;
