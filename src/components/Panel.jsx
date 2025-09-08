import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import topics from "./BeginnerTopics.jsx";
import "./Panel.css";

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
     <div className="panel-zigzag">
        {topics.slice(0, 5).map((topic, idx) => (
          <div
            key={idx}
            className={`zigzag-row ${idx % 2 === 0 ? "odd" : "even"}`}
          >
            {/* LEFT CELL */}

            <div
              className={`zigzag-cell ${
                idx % 2 === 0 ? "show-level" : "empty"
              }`}
            >
              {idx % 2 === 0 && (
                <div className="level-box">
                  <h3>{topic.title}</h3>
                  {topic.description && (
                    <p className="level-description">{topic.description}</p>
                  )}
                  {topic.points && (
                    <ul className="level-points">
                      {topic.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            {/* CENTER ICON */}
            <div className="zigzag-cell">
              <div className="circle-icon">{topic.icon}</div>
            </div>

            {/* RIGHT CELL */}
            <div
              className={`zigzag-cell ${
                idx % 2 !== 0 ? "show-level" : "empty"
              }`}
            >
              {idx % 2 !== 0 && (
                <div className="level-box">
                  <h3>{topic.title}</h3>
                  {topic.description && (
                    <p className="level-description">{topic.description}</p>
                  )}
                  {topic.points && (
                    <ul className="level-points">
                      {topic.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
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
