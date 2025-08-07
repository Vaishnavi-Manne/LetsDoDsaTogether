import topics from "./BeginnerTopics";
import "./Panel.css";

const Panel = (setView = "beginner") => {
  return (
    <div className="bg-color">
      <h2 className="panel-heading">Beginner Topics</h2>
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
    </div>
  );
};

export default Panel;
