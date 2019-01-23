import { SatelliteDataService } from './../_core/api/satellite-data/satellite-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public isBusy = false;
  public categories = [
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

  constructor(
    private _satelliteDataService: SatelliteDataService,
  ) { }

  ngOnInit() {
    this._getSatellites();
  }

  private _getSatellites() {
    this.isBusy = true;
    const params = { latitude: 0, longitude: 0, categoryId: 18 };
    this._satelliteDataService.getSatellites(params)
    .subscribe(response => {
      this.isBusy = false;
      console.log(response);
    }, error => {
      this.isBusy = false;
      console.log(error);
    });
  }

}
