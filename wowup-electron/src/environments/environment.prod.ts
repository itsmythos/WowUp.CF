export const AppConfig = {
  production: true,
  environment: "PROD",
  wowUpWebsiteUrl: "https://wowup.io",
  wowUpApiUrl: "https://api.wowup.io",
  wowUpHubUrl: "https://hub.wowup.io",
  wowupRepositoryUrl: "https://github.com/itsmythos/WowUp.CF",
  warcraftTavernNewsFeedUrl:
    "https://www.warcrafttavern.com/?call_custom_simple_rss=1&csrp_post_type=wow-classic-news,tbc-classic-news,retail-news&csrp_thumbnail_size=medium",
  azure: {
    applicationInsightsKey: undefined,
  },
  curseforge: {
    httpTimeoutMs: 60000,
    apiKey: "{{CURSEFORGE_API_KEY}}",
  },
  autoUpdateIntervalMs: 3600000, // 1 hour
  appUpdateIntervalMs: 3600000, // 1 hour
  defaultHttpTimeoutMs: 10000,
  defaultHttpResetTimeoutMs: 30000,
  wowUpHubHttpTimeoutMs: 10000,
  wagoHttpTimeoutMs: 10000,
  newsRefreshIntervalMs: 3600000, // 1 hour
  featuredAddonsCacheTimeSec: 30, // 30 sec
};
