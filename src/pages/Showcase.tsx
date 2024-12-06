const Showcase = () => (
  <section
    className="showcase"
    style={{
      backgroundImage: `url(/public/book2.jpg)`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="showcase-content">
      <h1>Discover New Books</h1>
      <p>Explore our collection and find your next favorite read.</p>
      <button className="cta-button">Browse Collection</button>
    </div>
  </section>
);

export default Showcase;
