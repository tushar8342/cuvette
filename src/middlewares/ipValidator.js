const ipinfo = require('ipinfo');

async function validateIP(req, res, next) {
  const userIp = req.ip;
  try {
    const ipInfo = await getIPInfo(userIp);
    if (ipInfo.country !== 'US') {
      return res.status(403).json({ error: 'Access denied from your location' });
    }
    next();
  } catch (error) {
    console.error('IPInfo error:', error);
    return res.status(500).json({ error: 'Failed to validate IP address' });
  }
}

function getIPInfo(ip) {
  return new Promise((resolve, reject) => {
    ipinfo(ip, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = validateIP;
