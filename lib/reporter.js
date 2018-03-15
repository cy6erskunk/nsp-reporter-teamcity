exports.successHandler = () => 'success'
exports.errorHandler = (err, args) =>
  console.error(err, (args.verbose && JSON.stringify(args)) || '')

exports.createCheckSuccessHandler = tsm => result => {
  const nspInspectionTypeId = 'nsp-security-inspection'

  if (result.data.length) {
    tsm.inspectionType({
      id: nspInspectionTypeId,
      name: 'NSP security inspection',
      category: 'security',
      description: 'https://www.npmjs.com/package/nsp',
    })
    result.data.forEach(elem => {
      tsm.inspection({
        typeId: nspInspectionTypeId,
        message: `${elem.overview}
version: ${elem.version},
vulnerable_versions: ${elem.vulnerable_versions},
patched_versions: ${elem.patched_versions},
recommendation: ${elem.recommendation},
advisory: ${elem.advisory}`,
        file: `module: "${elem.module}"`,
        SEVERITY: 'WARNING',
      })
    })
  }
}
