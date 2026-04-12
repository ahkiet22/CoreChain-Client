import { IoIosChatbubbles } from "react-icons/io";
import { GoProject } from "react-icons/go";
import {
  MdAttachMoney,
  MdAutoGraph,
  MdCalculate,
  MdCalendarMonth,
  MdDashboard,
  MdEvent,
  MdFactCheck,
  MdHistory,
  MdMessage,
  MdPayments,
  MdSettings,
  MdTask,
  MdVideoCall,
  MdVpnKey,
  MdWorkOutline,
} from "react-icons/md";
import {
  FaBox,
  FaBriefcase,
  FaClipboardList,
  FaFileContract,
  FaRegUserCircle,
  FaUserEdit,
  FaUsers,
  FaUsersCog,
  FaUserShield,
  FaUserTie,
} from "react-icons/fa";
import { BsBuildingFillLock } from "react-icons/bs";
import { IconType } from "react-icons/lib";

export type TNavigationItem = {
  id: string;
  title: string;
  icon: IconType;
  href: string;
  permissions: string[];
  childrens?: TNavigationItem[];
};

export const NAVIGATION_ITEMS: TNavigationItem[] = [
  {
    id: "dashboard",
    title: "Dashboard",
    icon: MdDashboard,
    href: "/admin/dashboard",
    permissions: [],
  },
  {
    id: "operation-group",
    title: "Operations",
    icon: GoProject,
    href: "#",
    permissions: [],
    childrens: [
      {
        id: "calendar",
        title: "Calendar",
        icon: MdCalendarMonth,
        href: "/admin/operations/calendar",
        permissions: [],
      },
      { id: "project", title: "Project", icon: GoProject, href: "/admin/project", permissions: [] },
      { id: "chat", title: "Chat", icon: IoIosChatbubbles, href: "/admin/chat", permissions: [] },
      {
        id: "meeting",
        title: "Meetings",
        icon: MdVideoCall,
        href: "/admin/operations/meetings",
        permissions: [],
      },
      {
        id: "feedback",
        title: "Feedback",
        icon: MdVpnKey,
        href: "/admin/operations/feedback",
        permissions: [],
      },
    ],
  },
  // --- (CORE HR) ---
  {
    id: "hr-management",
    title: "HR Management",
    icon: FaUsers,
    href: "#",
    permissions: ["view_hr"],
    childrens: [
      {
        id: "personnel",
        title: "Personnel List",
        icon: FaUsers,
        href: "/admin/hr/personnel",
        permissions: [],
      },
      {
        id: "working-hours",
        title: "Working Hours",
        icon: MdHistory,
        href: "/admin/hr/working-hours",
        permissions: [],
      },
      {
        id: "adjustment",
        title: "Personnel Adjustments", // add adjustment api
        icon: FaUserEdit,
        href: "/admin/hr/adjustments",
        permissions: [],
      },
      {
        id: "contract",
        title: "Contracts",
        icon: FaFileContract,
        href: "/admin/hr/contracts",
        permissions: [],
      },
      {
        id: "organization",
        title: "Organization",
        icon: FaBox,
        href: "#",
        permissions: [],
        childrens: [
          { id: "dept", title: "Departments", icon: FaBox, href: "/admin/hr/departments", permissions: [] },
          { id: "pos", title: "Positions", icon: MdWorkOutline, href: "/admin/hr/positions", permissions: [] },
        ],
      },
    ],
  },
  // --- (FINANCE & PAYROLL) ---
  {
    id: "finance-management",
    title: "Finance & Payroll",
    icon: MdAttachMoney,
    href: "#",
    permissions: ["view_finance"],
    childrens: [
      {
        id: "payroll-calc",
        title: "Payroll Calculation",
        icon: MdCalculate,
        href: "/admin/finance/payroll",
        permissions: [],
      },
      {
        id: "kpi-calc",
        title: "KPI Assessment",
        icon: MdAutoGraph,
        href: "/admin/finance/kpi",
        permissions: [],
      },
      {
        id: "salary-advance",
        title: "Salary Advance",
        icon: MdPayments,
        href: "#",
        permissions: [],
        childrens: [
          {
            id: "adv-request",
            title: "Advance Requests",
            icon: MdHistory,
            href: "/admin/finance/advance/requests",
            permissions: [],
          },
          {
            id: "adv-approve",
            title: "Approve Advance",
            icon: MdFactCheck,
            href: "/admin/finance/advance/approve",
            permissions: [],
          },
        ],
      },
    ],
  },
  // --- SYSTEM ---
  {
    id: "system-control",
    title: "System Control",
    icon: FaUsersCog,
    href: "#",
    permissions: ["admin"],
    childrens: [
      { id: "users", title: "User Accounts", icon: FaRegUserCircle, href: "/admin/system/users", permissions: [] },
      { id: "roles", title: "Roles", icon: FaUserShield, href: "/admin/system/roles", permissions: [] },
      {
        id: "permissions",
        title: "Permissions",
        icon: BsBuildingFillLock,
        href: "/admin/system/permissions",
        permissions: [],
      },
    ],
  },
  {
    id: "recruitment",
    title: "Recruitment",
    icon: FaBriefcase,
    href: "#",
    permissions: ["admin", "hr"],
    childrens: [
      {
        id: "jobs",
        title: "Jobs",
        icon: FaClipboardList,
        href: "/admin/recruitment/jobs",
        permissions: [],
      },
      {
        id: "candidates",
        title: "Candidates",
        icon: FaUserTie,
        href: "/admin/recruitment/candidates",
        permissions: [],
      },
    ],
  },

  {
    id: "setting",
    title: "Settings",
    icon: MdSettings,
    href: "/admin/settings",
    permissions: ["public"],
  },
];

export const NAVIGATION_WORKSPACE_ITEMS: TNavigationItem[] = [
  {
    id: "messenger",
    title: "Messenger",
    icon: MdMessage,
    href: "/workspace/messenger",
    permissions: [],
  },
  {
    id: "meeting",
    title: "Meeting",
    icon: MdVideoCall,
    href: "/workspace/meeting",
    permissions: [],
  },
  {
    id: "calendar",
    title: "Calendar",
    icon: MdEvent,
    href: "/workspace/calendar",
    permissions: [],
  },
  {
    id: "task",
    title: "Task",
    icon: MdTask,
    href: "/workspace/task",
    permissions: [],
  },
];
