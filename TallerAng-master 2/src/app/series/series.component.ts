import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.css']
})
export class SeriesComponent implements OnInit {
  series: Array<Serie> = [];
  constructor(private serieService: SerieService) { }

  getSeries() {
    this.serieService.getSeries().subscribe(series => {
      this.series = series;
    });
  }
  ngOnInit() {
    this.getSeries();
  }

  getPromedio()
  {
    let total = 0;
    let resultado = 0;
    for (const serie of this.series) {
      total += serie.seasons;
    }
    resultado = total/this.series.length;
    return resultado;
  }

}
