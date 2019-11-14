import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import styles from "./uniBreadcrumb.module.scss";

const UniBreadcrumb = ({ label, crumbs }) => {
  const currentPathName = crumbs[crumbs.length - 1].pathname;

  return (
    <div className={styles.uniBreadcrumbWrapper}>
      <Breadcrumb
        crumbs={crumbs}
        title="You are at: "
        crumbSeparator=" / "
        crumbStyle={{ color: "#00adef", fontSize: "0.75rem" }}
        crumbActiveStyle={{ color: "#a7a7ab", fontSize: "0.75rem" }}
        crumbLabel={label}
        disableLinks={[currentPathName]}
      />
    </div>
  );
}

export default UniBreadcrumb;
