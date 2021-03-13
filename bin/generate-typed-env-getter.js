#!/usr/bin/env node
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var getEnvNames_1 = require("./getEnvNames");
var fs = __importStar(require("fs"));
var getProjectRoot_1 = require("../tools/getProjectRoot");
var targetProjectDirPath = process.cwd();
fs.writeFileSync(path_1.join(targetProjectDirPath, "src", "getEnv.ts"), Buffer.from([
    "// Generated by " + path_1.basename(__filename).split(".")[0] + ". Not meant to be edited manually",
    "import { getEnvFactory\u00A0}\u00A0from \"" + require(path_1.join(getProjectRoot_1.getProjectRoot(), "package.json"))["name"] + "\";",
    '',
    "export const { getEnv } = getEnvFactory<",
    getEnvNames_1.getEnvNames({ targetProjectDirPath: targetProjectDirPath })
        .map(function (envName) { return "    \"" + envName + "\""; })
        .join(" |\n"),
    ">();",
    ''
].join("\n"), "utf8"));
//# sourceMappingURL=generate-typed-env-getter.js.map