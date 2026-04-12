export const PERMISSIONS = {
  AUTH: {
    VIEW_ACCOUNT: "auth.view.account",
    VIEW_REFRESH: "auth.view.refresh",
    LOGIN: "auth.create.login",
    LOGOUT: "auth.create.logout",
  },

  USERS: {
    VIEW_ALL: "users.view.all",
    VIEW_ID: "users.view.id",
    VIEW_PRIVATE: "users.view.private",
    VIEW_PUBLIC: "users.view.public",

    CREATE_ONE: "users.create.one",
    CREATE_BY_IDS: "users.create.byids",
    CHANGE_PASSWORD: "users.create.password_change",

    UPDATE_ID: "users.update.id",
    UPDATE_PUBLIC: "users.update.public",
    UPDATE_WORKING: "users.update.working",
    UPDATE_FCM: "users.update.fcm",

    DELETE_ID: "users.delete.id",
  },

  ROLES: {
    VIEW_ALL: "roles.view.all",
    VIEW_ID: "roles.view.id",
    CREATE_ONE: "roles.create.one",
    UPDATE_ID: "roles.update.id",
    DELETE_ID: "roles.delete.id",
  },

  PERMISSIONS: {
    VIEW_ALL: "permissions.view.all",
    VIEW_ID: "permissions.view.id",
    CREATE_ONE: "permissions.create.one",
    UPDATE_ID: "permissions.update.id",
    DELETE_ID: "permissions.delete.id",
  },

  PROJECTS: {
    VIEW_ALL: "projects.view.all",
    VIEW_ID: "projects.view.id",
    CREATE_ONE: "projects.create.one",
    UPDATE_ID: "projects.update.id",
    DELETE_ID: "projects.delete.id",
  },

  TASKS: {
    VIEW_ALL: "tasks.view.all",
    VIEW_ID: "tasks.view.id",
    CREATE_ONE: "tasks.create.one",
    UPDATE_ID: "tasks.update.id",
    DELETE_ID: "tasks.delete.id",
  },

  DEPARTMENTS: {
    VIEW_ALL: "departments.view.all",
    VIEW_ID: "departments.view.id",
    CREATE_ONE: "departments.create.one",
    UPDATE_ID: "departments.update.id",
    DELETE_ID: "departments.delete.id",
  },

  POSITIONS: {
    VIEW_ALL: "positions.view.all",
    VIEW_ID: "positions.view.id",
    CREATE_ONE: "positions.create.one",
    UPDATE_ID: "positions.update.id",
    DELETE_ID: "positions.delete.id",
  },

  CONTRACTS: {
    VIEW_ALL: "contracts.view.all",
    VIEW_ID: "contracts.view.id",
    CREATE_ONE: "contracts.create.one",
    UPDATE_ID: "contracts.update.id",
    DELETE_ID: "contracts.delete.id",
  },

  PERSONNEL: {
    CREATE_SALARY: "personnel.create.salary",
    CREATE_SALARY_APPROVE: "personnel.create.salary_approve",
    CREATE_ADJUSTMENT: "personnel.create.adjustment",

    VIEW_SALARY_ALL: "personnel.view.salary_all",
    VIEW_SALARY_ID: "personnel.view.salary_id",
    VIEW_SALARY_CALC: "personnel.view.salary_calc",

    VIEW_KPI_ID: "personnel.view.kpi_id",

    UPDATE_WORKING_HOURS: "personnel.update.working_hours",
  },

  REPORTS: {
    VIEW_ALL: "reports.view.all",
    VIEW_ID: "reports.view.id",

    VIEW_KPI: "reports.view.kpi",
    VIEW_EMPLOYEES: "reports.view.employees",
    VIEW_SALARY: "reports.view.salary",
    VIEW_WORKING_HOURS: "reports.view.working_hours",
    VIEW_DAY_OFF: "reports.view.day_off",
    VIEW_TURNOVER: "reports.view.turnover",

    CREATE_ONE: "reports.create.one",
    UPDATE_ID: "reports.update.id",
    DELETE_ID: "reports.delete.id",
  },

  FEEDBACK: {
    VIEW_ALL: "feedback.view.all",
    VIEW_ID: "feedback.view.id",

    CREATE_ONE: "feedback.create.one",
    CREATE_DECRYPT: "feedback.create.decrypt",

    DELETE_ID: "feedback.delete.id",
  },

  FILES: {
    UPLOAD: "files.create.upload",
  },

  APP: {
    VIEW_ALL: "app.view.all",
  },
};
