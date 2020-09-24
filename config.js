const config = {};

config.host = process.env.HOST || "https://cosmosbdd.documents.azure.com:443/";
config.authKey =
  process.env.AUTH_KEY ||  "nvvz8f86QCdXeB1s4D2H9kzunJCH1LKkXvwfz3ZxLSvcQ9hxUUI2k7fDzqnvqsnaKtlzERmXrQAxTxVhzbTZXA==";
config.databaseId = "ToDoList";
config.containerId = "Items";

if (config.host.includes("https://localhost:")) {
  console.log("Local environment detected");
  console.log("WARNING: Disabled checking of self-signed certs. Do not have this code in production.");
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
  console.log(`Go to http://localhost:${process.env.PORT || '3000'} to try the sample.`);
}

module.exports = config;