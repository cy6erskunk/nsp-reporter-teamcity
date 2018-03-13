const checkSuccess = (result, args) => {
  console.log('success', result, args)
}
const tsm = require('teamcity-service-messages')

exports.success = () => console.log('foo');
exports.error = () => console.log('err');

exports.check = {};
exports.check.success = (result, args) => {
  const nspInspectionTypeId = 'nsp-security-inspection';

  if (result.data.length) {
    tsm.inspectionType({
      id: nspInspectionTypeId,
      name: 'NSP security inspection',
      category: 'security',
      description: 'https://www.npmjs.com/package/nsp'
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
        SEVERITY: 'WARNING'
      })
    });
  }
}