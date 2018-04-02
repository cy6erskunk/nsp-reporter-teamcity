const tsm = {
  inspectionType: jest.fn(),
  inspection: jest.fn(),
}

const createCheckSuccessHandler = require('../lib/reporter').createCheckSuccessHandler

const config = require('../lib/config')

const {noVulnerabilities, singleVulnerability, coupleVulnerabilities} = require('./__mocks__')

describe('nsp teamcity reporter', () => {
  beforeEach(() => {
    tsm.inspectionType.mockReset()
    tsm.inspection.mockReset()
  })

  test('no vulnerabilities found', () => {
    createCheckSuccessHandler(tsm, config)(noVulnerabilities)
    expect(tsm.inspectionType).not.toBeCalled()
    expect(tsm.inspection).not.toBeCalled()
  })

  test('single vulnerability found', () => {
    createCheckSuccessHandler(tsm, config)(singleVulnerability)
    expect(tsm.inspectionType.mock.calls.length).toBe(1)
    expect(tsm.inspection.mock.calls.length).toBe(1)
  })

  test('a couple of vulnerabilities found', () => {
    createCheckSuccessHandler(tsm, config)(coupleVulnerabilities)
    expect(tsm.inspectionType.mock.calls.length).toBe(1)
    expect(tsm.inspection.mock.calls.length).toBe(2)
  })
})
