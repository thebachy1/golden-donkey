import React, { useState } from "react";
import "./ProjectsNav.scss";

const ProjectsNav = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Type of Client", "Type of Work", "All Projects"];

  return (
    <div className="projects-nav-container">
      <h1 className="title">RELATED PROJECTS</h1>
      <div className="nav-tabs">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`nav-tab ${activeTab === index ? "active" : ""}`}
            onClick={() => setActiveTab(index)}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="underline-container">
        <div
          className="underline"
          style={{ transform: `translateX(${activeTab * 100}%)` }}
        />
      </div>
    </div>
  );
};

export default ProjectsNav;
