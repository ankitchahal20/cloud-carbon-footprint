/*
 * © 2021 Thoughtworks, Inc.
 */
import { OnPremiseDataOutput } from '@cloud-carbon-footprint/common'
import { createObjectCsvWriter } from 'csv-writer'

export async function writeToCsv(
  outputFileName: string,
  outputData: OnPremiseDataOutput[],
) {
  const csvWriter = createObjectCsvWriter({
    path: outputFileName,
    header: [
      { id: 'cpuDescription', title: 'cpuDescription' },
      { id: 'machineName', title: 'machineName' },
      { id: 'memory', title: 'memory' },
      { id: 'machineType', title: 'machineType' },
      { id: 'startTime', title: 'startTime' },
      { id: 'endTime', title: 'endTime' },
      { id: 'country', title: 'country' },
      { id: 'region', title: 'region' },
      { id: 'cpuUtilization', title: 'cpuUtilization' },
      { id: 'powerUsageEffectiveness', title: 'powerUsageEffectiveness' },
      { id: 'cost', title: 'cost' },
      { id: 'dailyUptime', title: 'dailyUptime' },
      { id: 'dailyKilowattHours', title: 'dailyKilowattHours' },
      { id: 'dailyCo2e', title: 'dailyCo2e' },
    ],
  })
  await csvWriter.writeRecords(outputData)
}
