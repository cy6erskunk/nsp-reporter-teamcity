## nsp reporter for TeamCity

Generates TeamCity inspections from [nsp][nsp] report

### Configuration
Put `nsp.conf.json` config file in a project root directory to override any of the dafault values:

```json
{
  "nspInspectionTypeId": "nsp-security-inspection",
  "nspInspectionName": "NSP security inspection",
  "nspInspectionCategory": "security",
  "npsInspectionSeverity": "WARNING"
}
```

[nsp]: https://www.npmjs.com/package/nsp
