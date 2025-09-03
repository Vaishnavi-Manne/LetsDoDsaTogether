import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import "./Panel.css";
import TopicCards from "../components/TopicPanelCards/TopicCards";
const Panel = () => {

  const { level } = useParams();
  return (
  <div className="w-screen min-h-screen pt-20 panel-container" id="container">
    <div className="heading">
      <button
        // onClick={() => setView('home')}
        onClick={() => window.history.back()}
        className="back-button"
      >
        ← Back
      </button>
      <h2 className="text-xl font-semibold " id="header">
        🌱{level} Topics
      </h2>
      </div>
      <div className="Topiccontainer">
        {/* added topic cards component */}
        <TopicCards/>
      </div>

    <div className="section3  ">
      <button>
      <Link to="/roadmap">
         Roadmap
      </Link>
      </button>

      <button className=" border px-4 py-2 " id="B2">
        Discord Channels
      </button>

      <button className=" border px-4 py-2 ">
        Online + Social Media Resources
      </button>
    </div>
  </div>
  )
};

export default Panel;
