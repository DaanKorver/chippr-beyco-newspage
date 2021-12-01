import "@/styles/Sidebar.css";
import filter from "@/assets/icons/filter.svg";
import search from "@/assets/search.svg";
import articles from "@/articles.json";
import RecentArticle from "@/components/RecentArticle";

function Sidebar(props) {
  const recentArticles = articles.slice(-3).map((item) => {
    const { id, title, image, upload } = item;
    return <RecentArticle key={id} id={id} title={title} image={image} upload={upload} />;
  }).reverse();
  return (
    <section className="sidebar">
      <h2>Recent Articles</h2>
      {recentArticles}
      <form action="/">
        <label htmlFor="search">
          <img src={search} alt="magnifying-glass" />
          <input onChange={props.search} type="search" id="search" placeholder="Find articles..." />
        </label>
        <fieldset>
          <legend>
            <img src={filter} alt="filter" />
            Sort on
          </legend>
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
          <legend>
            <img src={filter} alt="filter" />
            Topic
          </legend>
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
