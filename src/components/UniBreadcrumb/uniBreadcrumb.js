import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";

const UniBreadcrumb = ({ label, crumbs }) => {
  return(
    <Breadcrumb
      crumbs={crumbs}
      crumbSeparator=" / "
      crumbStyle={{ color: "#A7A7AB", fontSize: "0.75rem" }}
      crumbActiveStyle={{ color: "#00ADEF", cursor: "pointer" }}
      crumbLabel={label}
      crumbWrapperStyle={{ color: "green" }}
    />
  );
}

export default UniBreadcrumb;
