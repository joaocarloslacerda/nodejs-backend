"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const defaultControllers_1 = require("../controllers/defaultControllers");
const router = (0, express_1.Router)();
router.get('/', defaultControllers_1.rootResponse);
exports.default = router;
//# sourceMappingURL=defaultRoutes.js.map