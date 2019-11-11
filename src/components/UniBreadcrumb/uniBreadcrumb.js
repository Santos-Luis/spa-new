import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import styles from "./unibreadcrumb.module.scss";

const UniBreadcrumb = ({ label, crumbs }) => {
  return(
    <div className={styles.uniBreadcrumb}>
      <Breadcrumb
        crumbs={crumbs}
        title="You are at: "
        crumbSeparator=" / "
        crumbStyle={{ color: "#A7A7AB", fontSize: "0.75rem" }}
        crumbActiveStyle={{ color: "#00ADEF", cursor: "pointer" }}
        crumbLabel={label}
        disableLinks={[]}
        hiddenCrumbs={[]}
      />
    </div>
  );
}

export default UniBreadcrumb;
