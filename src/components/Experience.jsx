/* eslint-disable react/no-unescaped-entities */
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component/dist-modules";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";

export default function Experience() {
  return (
    <div className="z-0  text-slate-700 pb-[75px] bg-slate-300 font-mono">
      <VerticalTimeline lineColor="#172554">
        <VerticalTimelineElement
          className="vertical-timeline-element--education "
          date="September 2023 - January 2024"
          iconStyle={{ background: "#172554", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title ">2x Solutions</h3>
          <p> Role : Blockchain Developer</p>
          <p>
            Link to company website 👉{" "}
            <a
              href="https://www.2xsolution.com/"
              target="_blank"
              rel="noreferrer"
            >
              <WorkIcon />
            </a>
          </p>
          <p>Job Description : Wrote smart contracts for company's projects</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="May 2023 - August 2023"
          iconStyle={{ background: "#172554", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Knit Finance</h3>
          <p> Role : Consultant</p>
          <p>
            Link to company website 👉{" "}
            <a href="https://knit.finance/" target="_blank" rel="noreferrer">
              <WorkIcon />
            </a>
          </p>
          <p>
            Job Description : Write educational articles related to recent
            updates on Blockchain
          </p>
          <p>
            Internship completion certificate 👉{" "}
            <a href="http://bit.ly/KnitIntern" target="_blank" rel="noreferrer">
              <WorkIcon />
            </a>
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2021-2025"
          iconStyle={{ background: "#172554", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Dayananda Sagar college of Engineering , Bangalore
          </h3>
          <p>Bachelor of Engineering in Computer Science and Engineering</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}
