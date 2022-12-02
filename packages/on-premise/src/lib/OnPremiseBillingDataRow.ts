/*
 * © 2021 Thoughtworks, Inc.
 */

export default abstract class OnPremiseBillingDataRow {
  public memory: number
  public cpuDescription: string
  public machineType: string
  public machineName: string
  public processorFamilies: string[]
  public region: string
  public cpuUtilization: number
  public powerUsageEffectiveness: number
  public upTime: { [key: string]: number }
  public startTime: Date
  public endTime: Date
  public dailyUptime: number
  public dailyKilowattHours: number
  public dailyCo2e: number

  protected constructor(init: Partial<OnPremiseBillingDataRow>) {
    Object.assign(this, init)
  }
}
