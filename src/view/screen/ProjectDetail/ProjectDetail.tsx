import React from "react";
import { useLocation } from "react-router-dom";

const ProjectDetail: React.FC = () => {
  const location = useLocation();
  //   const { id } = useParams();
  const selectedProject = location.state?.project || {};
  console.log("project Details -> ", selectedProject);

  return (
    <>
      <div
        style={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p className="bg-danger text-center rounded-pill p-3">
          "Project in progress for displaying in detail – visuals coming soon. Stay tuned for updates!"
        </p>
      </div>
    </>
  );
};

export default ProjectDetail;
