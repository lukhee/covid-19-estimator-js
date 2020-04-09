const covid19ImpactEstimator = (data) => {
  return {
    data,
    impact: {
      currentlyInfected: data.reportedCase * 10,
      infectionsByRequestedTime: data.reportedCase * 10 * 1024
    },
    severeImpact: {
      currentlyInfected: data.reportedCase * 50,
      infectionsByRequestedTime: data.reportedCase * 50 * 1024
    }
  };
};

export default covid19ImpactEstimator;
