export function calculateRisk(device) {
  let trust_score = 100;
  let risk_level = "low";
  let risk_reason = "Normal device activity";

  if (!device.latitude || !device.longitude) {
    trust_score -= 20;
    risk_reason = "GPS unavailable";
  }

  if (device.temperature && device.temperature > 50) {
    trust_score -= 10;
    risk_reason = "Abnormal device temperature";
  }

  if (device.battery_percentage && device.battery_percentage < 5) {
    trust_score -= 5;
  }

  if (trust_score < 80) {
    risk_level = "medium";
  }

  if (trust_score < 50) {
    risk_level = "high";
  }

  let status = "online";

  if (trust_score < 50) {
    status = "suspicious";
  }

  if (trust_score < 20) {
    status = "compromised";
  }

  return {
    trust_score,
    risk_level,
    risk_reason,
    status,
  };
}
