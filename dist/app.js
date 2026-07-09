"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
// Performance optimizations
app.disable('x-powered-by'); // Disable X-Powered-By header to reduce response size
app.set('etag', false); // Disable ETag generation to reduce CPU usage
app.set('query parser', 'simple'); // Use simple query parsing for better performance
app.enable('trust proxy'); // Enable trust proxy for proper handling behind reverse proxies
// Add compression middleware for gzip responses
const compression_1 = __importDefault(require("compression"));
app.use((0, compression_1.default)());
app.get("/", (_req, res) => {
    res.send("OK");
});
exports.default = app;
//# sourceMappingURL=app.js.map