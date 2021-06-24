import React from "react";
import { CIcon } from "@coreui/icons-react";

const _nav = [
  {
    _tag: "CSidebarNavItem",
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    _tag: "CSidebarNavTitle",
    _children: ["Manage"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Organizations",
    to: "/manage/organizations",
    icon: "cil-shield-alt",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Majors",
    to: "/manage/majors",
    icon: "cil-file",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Jobseekers",
    to: "/manage/jobseekers",
    icon: "cil-user",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Recruitment News",
    to: "/manage/recruitment-news",
    icon: "cil-spreadsheet",
  },
];

export default _nav;
