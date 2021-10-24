import { Component, Input } from '@angular/core';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent  {

  @Input () title: string = 'Sin titulo';

  @Input ('labels') doughnutChartLabels: Label[] = ['labels1', 'labels2', 'labels3'];
  @Input ('data')  doughnutChartData: MultiDataSet = [
    [0, 0, 0],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[]=[
    {backgroundColor: ['#6857E6','#009FEE','#F02059']}
  ]
}
