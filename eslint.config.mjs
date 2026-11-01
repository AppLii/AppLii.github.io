// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

/** @param {import('eslint').Linter.Config} config */
function downgradeErrorsToWarn(config) {
  if (!config.rules) return config
  return {
    ...config,
    rules: Object.fromEntries(
      Object.entries(config.rules).map(([rule, value]) => {
        if (value === 'error' || value === 2) return [rule, 'warn']
        if (Array.isArray(value) && (value[0] === 'error' || value[0] === 2)) return [rule, ['warn', ...value.slice(1)]]
        return [rule, value]
      })
    ),
  }
}

export default withNuxt().then((configs) => configs.map(downgradeErrorsToWarn))
