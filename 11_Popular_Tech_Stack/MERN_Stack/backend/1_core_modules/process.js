// || PROCESS
process.on("uncaughtException", (err) => {
  console.error(`There was an uncaught exception: ${err}`);
  process.exit(1);
});

process.env is an object containing all the environment variables.