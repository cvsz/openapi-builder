import express from 'express';
const app = express();

// Performance optimizations
app.disable('x-powered-by'); // Disable X-Powered-By header to reduce response size
app.set('etag', false); // Disable ETag generation to reduce CPU usage
app.set('query parser', 'simple'); // Use simple query parsing for better performance
app.enable('trust proxy'); // Enable trust proxy for proper handling behind reverse proxies

// Add compression middleware for gzip responses
import compression from 'compression';
app.use(compression());

app.get("/", (_req, res) => {
  res.send("OK");
});

export default app;
