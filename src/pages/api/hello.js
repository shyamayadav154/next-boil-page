// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const requestIp = require("request-ip");

export default function handler(req, res) {
  const clientIp = requestIp.getClientIp(req);

  const ipv4 = req.connection.remoteAddress; // Get IPv4 address from request object
  const ipv6 = req.headers["x-forwarded-for"]; // Get IPv6 address from request headers

  const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
  res.status(200).json({ name: "John Doe", clientIp: clientIp, ip, ipv4, ipv6});
}
