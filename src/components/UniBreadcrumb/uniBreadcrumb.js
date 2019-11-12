import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import styles from "./unibreadcrumb.module.scss";

const UniBreadcrumb = ({ label, crumbs }) => {
  return(
    <div className={styles.uniBreadcrumbWrapper}>
      <Breadcrumb
        crumbs={crumbs}
        title="You are at: "
        crumbSeparator=" / "
        crumbStyle={{ color: "#00ADEF", fontSize: "0.75rem" }}
        crumbActiveStyle={{ color: "#A7A7AB", fontSize: "0.75rem" }}
        crumbLabel={label}
        disableLinks={[crumbs[crumbs.length - 1].pathname]}
      />
    </div>
  );
}

export default UniBreadcrumb;
