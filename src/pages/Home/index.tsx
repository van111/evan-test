import React from "react";

interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">LHX</p>
          <p className="subtitle">
            You can't have <strong>order</strong> without <strong>chaos</strong>
          </p>
        </div>
        <div className="container">
        </div>
      </section>
    </div>
  );
};

export default Home;
