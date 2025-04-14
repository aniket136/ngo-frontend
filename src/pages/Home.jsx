
const Home = () => {
  return (
    <section id="hero">
      <div className="container-xl">
        <div className="hero-content text-center d-flex align-items-center justify-content-center flex-column">
          <h1 className="fw-bolder">
            Give the gift of learning - help us <br /> Educate every child
          </h1>
          <p className="fs-5 fw-bold">
            Your support provides resources and opportunities needed for children to access
            quality education. <br /> Together, we can ensure every child has the chance to learn and thrive!
          </p>
          <button type="button" className="btn btn-dark btn-lg my-1">
            Donate now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
