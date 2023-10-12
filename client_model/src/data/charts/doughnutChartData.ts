import { TDoughnutChartData } from '../types'

export const doughnutChartData: TDoughnutChartData = {
  labels: ['100 mbps', '10 mbps', '5 mbps'],
  datasets: [
    {
      label: 'Population (millions)',
      backgroundColor: ['danger', 'info', 'primary'],
      data: [2478, 5267, 734],
    },
  ],
}
