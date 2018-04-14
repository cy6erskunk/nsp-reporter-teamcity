const fs = require('fs')
const path = require('path')

const CONFIG = 'nsp.conf.json'

const defaultConfig = {
  nspInspectionTypeId: 'nsp-security-inspection',
  nspInspectionName: 'NSP security inspection',
  nspInspectionCategory: 'security',
  npsInspectionSeverity: 'WARNING',
}

const getConfig = dir => {
  let config = defaultConfig
  const filePath = path.join(dir, CONFIG)

  try {
    if (dir) {
      config = Object.assign(
        defaultConfig,
        JSON.parse(fs.readFileSync(filePath, {encoding: 'utf-8'})),
      )
    }
  } catch (e) {
    if (e.code !== 'ENOENT') {
      console.error(e)
    }
  }

  return config
}

module.exports = {
  getConfig,
}
