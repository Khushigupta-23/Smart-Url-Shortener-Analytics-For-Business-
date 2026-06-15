const getClicksByDate = (clicks) => {
  const stats = {};

  clicks.forEach((click) => {
    const date = new Date(click.clickedAt).toISOString().split("T")[0];
    stats[date] = (stats[date] || 0) + 1;
  });

  return stats;
};

const getReferrers = (clicks) => {
  const referrers = {};

  clicks.forEach((click) => {
    const ref = click.referrer || "Direct";
    referrers[ref] = (referrers[ref] || 0) + 1;
  });

  return referrers;
};

module.exports = {
  getClicksByDate,
  getReferrers,
};