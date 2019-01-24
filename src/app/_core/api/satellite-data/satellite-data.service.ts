import 'rxjs/add/operator/map';
import { apiUrl, apiKey } from '../api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SatelliteData } from './../../models/satellite-data/satellite-data.model';

interface SatelliteDataParams {
  latitude: number;
  longitude: number;
  categoryId: number;
}

@Injectable({
  providedIn: 'root'
})
export class SatelliteDataService {
  private _latestResponse = '';

  constructor(
    private _http: HttpClient,
  ) { }

  private _saveTextAsFile(data: string, filename: string) {
    if (!data) {
      console.error('Console.save: No data');
      return;
    }

    if (!filename) {
      filename = 'console.json';
    }

    const blob = new Blob([data], { type: 'text/plain' });
    const e = document.createEvent('MouseEvents');
    const a = document.createElement('a');

    // FOR IE:
    if (window.navigator && window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, filename);
    } else {
      a.download = filename;
      a.href = window.URL.createObjectURL(blob);
      a.dataset.downloadurl = ['text/plain', a.download, a.href].join(':');
      e.initEvent('click', true, false);
      a.dispatchEvent(e);
    }
  }

  public downloadFile() {
    this._saveTextAsFile(this._latestResponse, 'jsonResponse.txt');
  }

  public getSatellites(params: SatelliteDataParams) {
    const requestUrl = 'above/' + params.latitude + '/' + params.longitude + '/0/90/' + params.categoryId;
    const apiKeyUrl = '/&apiKey=' + apiKey;
    return this._http.get(apiUrl + requestUrl + apiKeyUrl)
    .map((data: any) => {
      const backendSatellites: any[] = data.above || [];
      this._latestResponse = JSON.stringify(data);
      return { records: backendSatellites.map(satellite => SatelliteData.parse(satellite)) || [] };
    });
  }
}
