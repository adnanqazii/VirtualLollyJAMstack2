exports.createPages = ({ actions }) => {
    const { createRedirect } = actions;
    createRedirect({
      fromPath: "/lolly/*", 
      toPath: "/.netlify/functions/showLolly/:splat", 
      isPermanent: true, 
      force: true
    });
  };