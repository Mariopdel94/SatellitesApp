import { Sort } from '@angular/material';
import { SatelliteData } from './../_core/models/satellite-data/satellite-data.model';
import { SatelliteDataService } from './../_core/api/satellite-data/satellite-data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isBusy: boolean;
  public categories = [
    {
      id: 0,
      name: 'All'
    },
    {
      id: 18,
      name: 'Amateur radio',
    },
    {
      id: 35,
      name: 'Beidou Navigation System',
    },
    {
      id: 1,
      name: 'Brightest',
    },
    {
      id: 45,
      name: 'Celestis',
    },
    {
      id: 32,
      name: 'CubeSats',
    },
    {
      id: 8,
      name: 'Disaster monitoring',
    },
    {
      id: 6,
      name: 'Earth resources',
    },
    {
      id: 29,
      name: 'Education',
    },
    {
      id: 28,
      name: 'Engineering',
    },
    {
      id: 19,
      name: 'Experimental',
    },
    {
      id: 48,
      name: 'Flock',
    },
    {
      id: 22,
      name: 'Galileo',
    },
    {
      id: 27,
      name: 'Geodetic',
    },
    {
      id: 10,
      name: 'Geostationary',
    },
    {
      id: 50,
      name: 'Global Positioning System (GPS) Constellation',
    },
    {
      id: 20,
      name: 'Global Positioning System (GPS) Operational',
    },
    {
      id: 17,
      name: 'Globalstar',
    },
    {
      id: 51,
      name: 'Glonass Constellation',
    },
    {
      id: 21,
      name: 'Glonass Operational',
    },
    {
      id: 5,
      name: 'GOES',
    },
    {
      id: 40,
      name: 'Gonets',
    },
    {
      id: 12,
      name: 'Gorizont',
    },
    {
      id: 11,
      name: 'Intelsat',
    },
    {
      id: 15,
      name: 'Iridium',
    },
    {
      id: 46,
      name: 'IRNSS',
    },
    {
      id: 2,
      name: 'ISS',
    },
    {
      id: 49,
      name: 'Lemur',
    },
    {
      id: 30,
      name: 'Military',
    },
    {
      id: 14,
      name: 'Molniya',
    },
    {
      id: 24,
      name: 'Navy Navigation Satellite System',
    },
    {
      id: 4,
      name: 'NOAA',
    },
    {
      id: 43,
      name: 'O3B Networks',
    },
    {
      id: 16,
      name: 'Orbcomm',
    },
    {
      id: 38,
      name: 'Parus',
    },
    {
      id: 47,
      name: 'QZSS',
    },
    {
      id: 31,
      name: 'Radar Calibration',
    },
    {
      id: 13,
      name: 'Raduga',
    },
    {
      id: 25,
      name: 'Russian LEO Navigation',
    },
    {
      id: 23,
      name: 'Satellite-Based Augmentation System',
    },
    {
      id: 7,
      name: 'Search & rescue',
    },
    {
      id: 26,
      name: 'Space & Earth Science',
    },
    {
      id: 39,
      name: 'Strela',
    },
    {
      id: 9,
      name: 'Tracking and Data Relay Satellite System',
    },
    {
      id: 44,
      name: 'Tselina',
    },
    {
      id: 42,
      name: 'Tsikada',
    },
    {
      id: 41,
      name: 'Tsiklon',
    },
    {
      id: 34,
      name: 'TV',
    },
    {
      id: 3,
      name: 'Weather',
    },
    {
      id: 37,
      name: 'Westford Needles',
    },
    {
      id: 33,
      name: 'XM and Sirius',
    },
    {
      id: 36,
      name: 'Yaogan',
    },
  ];
  public categoryId: number;
  public sortedData: SatelliteData[] = [];
  public unsortedData: SatelliteData[] = [];
  public latitude = 36.1057;
  public longitude = 112.0948;

  constructor(
    private _satelliteDataService: SatelliteDataService,
  ) { }

  ngOnInit() {
    this.getSatellites();
  }

  public getSatellites() {
    this.isBusy = true;
    const params = { latitude: this.latitude, longitude: this.longitude, categoryId: (this.categoryId || 0) };
    this._satelliteDataService.getSatellites(params)
    .subscribe(response => {
      this.isBusy = false;
      this.sortedData = this.unsortedData = response.records;
    }, error => {
      this.isBusy = false;
      console.log(error);
    });
  }

  public sortData(sort: Sort) {
    this.isBusy = true;
    const data = this.unsortedData.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return this._compare(a.id, b.id, isAsc);
        case 'name': return this._compare(a.name, b.name, isAsc);
        case 'latitude': return this._compare(a.latitude, b.latitude, isAsc);
        case 'longitude': return this._compare(a.longitude, b.longitude, isAsc);
        case 'altitude': return this._compare(a.altitude, b.altitude, isAsc);
        case 'launchDate': return this._compare(a.launchDate, b.launchDate, isAsc);
        default: return 0;
      }
    });

    setTimeout(() => {
      this.isBusy = false;
    });
  }

  private _compare(a: number | string, b: number | string, isAsc: boolean) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }

  public onSelectChange() {
    this.getSatellites();
  }

}
