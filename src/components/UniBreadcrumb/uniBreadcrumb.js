import React from "react";
import { Breadcrumb } from "gatsby-plugin-breadcrumb";
import styles from "./uniBreadcrumb.module.scss";

const UniBreadcrumb = ({ label, crumbs }) => (
  <div className={styles.uniBreadcrumbWrapper}>
    <Breadcrumb
      crumbs={crumbs}
      title="You are at: "
      crumbSeparator=" / "
      crumbStyle={{ color: "#00adef", fontSize: "0.75rem" }}
      crumbActiveStyle={{ color: "#a7a7ab", fontSize: "0.75rem" }}
      crumbLabel={label}
      disableLinks={[crumbs[crumbs.length - 1].pathname]}
    />
  </div>
);

export default UniBreadcrumb;
