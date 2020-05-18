"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FRONTEND_FIELDS = [
    { label: "Kostenplaats", value: "costCenter", type: "String" },
    { label: "Werknemer naam", value: "employeeName", type: "String" }
];
exports.DEFAULT_SETTINGS = {
    showNonWorkingHours: false,
    collapseOrders: false,
    timeUnit: "day",
    fixedAmountOfEmployees: 4,
    employeeCodes: [],
    employeeResourceCodes: [],
    fixedAmountOfOrders: 10,
    uiPreferences: {
        orderFields: ["code", "soCode"],
        messageCenter: {
            deadlineWarning: true,
            notificationLimit: 2,
            showNotifications: true,
            notificationUpdateInterval: 5,
            warningColor: "#FFA319",
            deadlineExpiredColor: "#FF0000"
        },
        popupFields: [
            "description",
            "code",
            "startTime",
            "endTime",
            "costCenter",
            "employeeName"
        ],
        colors: [
            { status: "Open", color: "#EF4B1C" },
            { status: "Finished", color: "#88AC1F" },
            { status: "In_Process", color: "#0083FF" }
        ]
    },
    messageCenter: {
        isOpen: false,
        isPinned: false
    }
};
//# sourceMappingURL=constants.js.map