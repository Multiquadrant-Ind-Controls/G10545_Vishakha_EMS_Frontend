import React from "react";
import "./SLD_Home.css";

const navigateTo = (path) => {
  window.location.href = path;
};

const HTSections = [
  { name: "HT 1", path: "/ht1" },
  { name: "HT 2", path: "/ht2" },
  { name: "HT 3", path: "/ht3" },
  { name: "HT 4", path: "/ht4" },
];

const PCCSections = [
  { name: "PCC 1", path: "/pcc1" },
  { name: "PCC 2", path: "/pcc2" },
  { name: "PCC 3", path: "/pcc3" },
  { name: "PCC 4", path: "/pcc4" },
  { name: "PCC 5", path: "/pcc5" },
  { name: "PCC 6", path: "/pcc6" },
  { name: "PCC 7", path: "/pcc7" },
  { name: "PCC 8", path: "/pcc8" },
];

const Arrow = () => (
  <svg viewBox="0 0 24 24" className="arrow">
    <path d="M5 12h13" />
    <path d="m13 6 6 6-6 6" />
  </svg>
);

const Lightning = () => (
  <svg viewBox="0 0 24 24" className="main-icon">
    <path d="M13 2 4 14h7l-1 8 9-12h-7z" />
  </svg>
);

const GridIcon = () => (
  <svg viewBox="0 0 24 24" className="main-icon">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
  </svg>
);

const Tower = () => (
  <svg viewBox="0 0 24 24" className="main-icon">
    <path d="M12 3v18" />
    <path d="M7 21h10" />
    <path d="m8 21 4-18 4 18" />
    <path d="M6 9h12M7.5 14h9" />
  </svg>
);

function MainCard({
  type,
  icon,
  title,
  subtitle,
  description,
  path,
  children,
}) {
  const handleClick = () => {
    if (path) {
      navigateTo(path);
    }
  };

  return (
    <div className={`main-card ${type}`}>

      <div
        className={`main-card-heading ${path ? "clickable" : ""}`}
        onClick={handleClick}
      >

        <div className="icon-box">
          {icon}
        </div>

        <div className="heading-text">
          <h2>{title}</h2>
          <span>{subtitle}</span>
        </div>

        {path && (
          <div className="heading-arrow">
            <Arrow />
          </div>
        )}

      </div>

      <p className="main-description">
        {description}
      </p>

      {children}

    </div>
  );
}

function SubCard({ name, path }) {
  return (
    <div
      className="sub-card"
      onClick={() => navigateTo(path)}
    >
      <span>{name}</span>
      <Arrow />
    </div>
  );
}

export default function SLDHome() {
  return (
    <div className="sld-home">

      {/* TITLE */}

      <div className="page-title">

        <div className="title-line"></div>

        <div className="title-content">

          <div className="title-icon">
            <Lightning />
          </div>

          <div>
            <h1>SINGLE LINE DIAGRAM</h1>

            <p>
              Select a section to view detailed electrical distribution
            </p>
          </div>

        </div>

        <div className="title-line"></div>

      </div>


      {/* MAIN CARDS */}

      <div className="cards-container">

        {/* DG */}

        <MainCard
          type="dg-card"
          icon={<Lightning />}
          title="DG"
          subtitle="DIESEL GENERATOR"
          description="Generator source and outgoing feeder power"
          path="/dg"
        >

          <div className="source-details">

            <div className="detail-row">
              <span>Source</span>
              <strong>DG SUPPLY</strong>
            </div>

            <div className="detail-row">
              <span>Distribution</span>
              <strong>OUTGOING FEEDERS</strong>
            </div>

          </div>

          <div className="view-label" onClick={() => navigateTo("/dg")}>
            VIEW DG SLD
            <Arrow />
          </div>

        </MainCard>


        {/* 11 KV */}

        <MainCard
          type="mains-card"
          icon={<Tower />}
          title="11 KV MAIN"
          subtitle="INCOMING SUPPLY"
          description="Incoming 11 KV power supply and distribution"
          path="/home"
        >

          <div className="source-details">

            <div className="detail-row">
              <span>Supply</span>
              <strong>11 KV INCOMING</strong>
            </div>

            <div className="detail-row">
              <span>System</span>
              <strong>HT DISTRIBUTION</strong>
            </div>

          </div>

          <div className="view-label" onClick={() => navigateTo("/home")}>
            VIEW 11 KV SLD
            <Arrow />
          </div>

        </MainCard>


        {/* HT */}

        <MainCard
          type="ht-card"
          icon={<Tower />}
          title="HT SECTION"
          subtitle="HIGH TENSION"
          description="High tension sections and outgoing feeders"
        >

          <div className="sub-grid ht-grid">

            {HTSections.map((section) => (
              <SubCard
                key={section.name}
                name={section.name}
                path={section.path}
              />
            ))}

          </div>

        </MainCard>


        {/* PCC */}

        <MainCard
          type="pcc-card"
          icon={<GridIcon />}
          title="PCC SECTION"
          subtitle="POWER CONTROL CENTRE"
          description="PCC panels and outgoing distribution feeders"
        >

          <div className="sub-grid pcc-grid">

            {PCCSections.map((section) => (
              <SubCard
                key={section.name}
                name={section.name}
                path={section.path}
              />
            ))}

          </div>

        </MainCard>

      </div>

    </div>
  );
}