import React from "react";

import style from "./container.module.css";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.container}>{children}</div>;
};
