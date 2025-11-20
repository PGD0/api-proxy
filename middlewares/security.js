const allowedOrigins = [
  "https://azure.gestech.com.co"
];

export function corsValidation(req, res, next) {
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header("Access-Control-Allow-Origin", origin);
  }
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-client-hash"
  );

  if (req.method === "OPTIONS") return res.sendStatus(200);
  next();
}

export function refererCheck(req, res, next) {
  const referer = req.headers.referer;

  if (!referer || !referer.startsWith("https://azure.gestech.com.co")) {
    return res.status(403).json({ error: "Access denied" });
  }

  next();
}

export function userAgentCheck(req, res, next) {
  const ua = req.headers["user-agent"];
  if (!ua || ua.length < 5) {
    return res.status(403).json({ error: "Forbidden" });
  }
  next();
}
