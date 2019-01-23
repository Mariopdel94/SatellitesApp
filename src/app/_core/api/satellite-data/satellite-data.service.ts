import { SatelliteData } from './../../models/satellite-data/satellite-data.model';
import 'rxjs/add/operator/map';
import { apiUrl, apiKey } from '../api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

interface SatelliteDataParams {
  latitude: number;
  longitude: number;
  categoryId: number;
}

@Injectable({
  providedIn: 'root'
})
export class SatelliteDataService {

  constructor(
    private _http: HttpClient,
  ) { }

  public getSatellites(params: SatelliteDataParams) {
    const requestUrl = 'above/' + params.latitude + '/' + params.longitude + '/0/90/' + params.categoryId;
    const apiKeyUrl = '/&apiKey=' + apiKey;
    return this._http.get(apiUrl + requestUrl + apiKeyUrl)
    .map((data: any) => {
      const backendSatellites: any[] = data.above || [];
      return { records: backendSatellites.map(satellite => SatelliteData.parse(satellite)) || [] };
    });
  }
}
