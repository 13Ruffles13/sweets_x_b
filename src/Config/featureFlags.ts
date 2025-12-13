const featureFlags = {
  enableOrdersPage: false,
} as const;

type FeatureFlag = keyof typeof featureFlags;

export function isFeatureEnabled(flag: FeatureFlag): boolean {
  return featureFlags[flag];
}
