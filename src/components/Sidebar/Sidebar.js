import "./Sidebar.css";

function Sidebar() {
  return (
    <section className="sidebar">
      <h2>Recent Articles</h2>
      <form action="">
        <input type="search" />
        <fieldset>
          <legend>Sort on</legend>
          <label htmlFor="most-recent">
            <input type="radio" id="most-recent" name="sort-on" />
            <div className="custom-checkbox"></div>
            <span>Most Recent</span>
          </label>

          <label htmlFor="oldest">
            <input type="radio" id="oldest" name="sort-on" />
            <div className="custom-checkbox"></div>
            <span>Oldest</span>
          </label>

          <label htmlFor="popularity">
            <input type="radio" id="popularity" name="sort-on" />
            <div className="custom-checkbox"></div>
            <span>Popularity</span>
          </label>

          <label htmlFor="length">
            <input type="radio" id="length" name="sort-on" />
            <div className="custom-checkbox"></div>
            <span>Length</span>
          </label>
        </fieldset>
        <fieldset>
          <legend>Topic</legend>
          <label htmlFor="coffee">
            <input type="radio" id="coffee" name="topic" />
            <div className="custom-checkbox"></div>
            <span>Coffee</span>
          </label>

          <label htmlFor="fairtrade">
            <input type="radio" id="fairtrade" name="topic" />
            <div className="custom-checkbox"></div>
            <span>Fairtrade</span>
          </label>

          <label htmlFor="blockchain">
            <input type="radio" id="blockchain" name="topic" />
            <div className="custom-checkbox"></div>
            <span>Blockchain</span>
          </label>
        </fieldset>
      </form>
    </section>
  );
}

export default Sidebar;
