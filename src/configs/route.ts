export const PUBLIC_ROUTES = ["/", "/download", "/jobs", "/features", "/pricing", "/developers", "/about", "/faq"];

export const ROUTES = {
  ADMIN: {
    ROOT: "/admin",

    DASHBOARD: "/admin/dashboard",

    CHAT: {
      ROOT: "/admin/chat",
      DETAIL: (chatId: string | number) => `/admin/chat/${chatId}`,
    },

    FINANCE: {
      ROOT: "/admin/finance",
      ADVANCE: "/admin/finance/advance",
      KPI: "/admin/finance/kpi",
      PAYROLL: "/admin/finance/payroll",
    },

    HR: {
      ROOT: "/admin/hr",
      CONTRACTS: "/admin/hr/contracts",
      DEPARTMENTS: {
        ROOT: "/admin/hr/departments",
        DETAIL: (departmentId: string | number) => `/admin/hr/departments/${departmentId}`,
      },
      FEEDBACK: "/admin/hr/feedback",
      PERSONNEL: "/admin/hr/personnel",
      POSITIONS: "/admin/hr/positions",
      WORKING_HOURS: "/admin/hr/working-hours",
    },

    OPERATIONS: {
      ROOT: "/admin/operations",
      CALENDAR: "/admin/operations/calendar",
      FEEDBACK: "/admin/operations/feedback",
      MEETINGS: "/admin/operations/meetings",
    },

    PROFILE: "/admin/profile",

    PROJECT: {
      ROOT: "/admin/project",
      DETAIL: (projectId: string | number) => `/admin/project/${projectId}`,
    },

    RECRUITMENT: {
      ROOT: "/admin/recruitment",
      CANDIDATES: "/admin/recruitment/candidates",
    },

    SETTINGS: "/admin/settings",

    SYSTEM: {
      ROOT: "/admin/system",
      PERMISSIONS: "/admin/system/permissions",
      ROLES: {
        ROOT: "/admin/system/roles",
        DETAIL: (roleId: string | number) => `/admin/system/roles/${roleId}`,
      },
      USERS: {
        ROOT: "/admin/system/users",
        DETAIL: (userId: string | number) => `/admin/system/users/${userId}`,
      },
    },
  },

  WORKSPACE: {
    ROOT: "/workspace",
    MESSENGER: "/workspace/messenger",
    TASK: "/workspace/task",
  },
} as const;
