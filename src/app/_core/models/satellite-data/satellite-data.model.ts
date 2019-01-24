import * as moment from 'moment';

export class SatelliteData {
  public intDesignator = '';
  public name = '';
  public id = 0;
  public latitude = 0;
  public longitude = 0;
  public altitude = 0;
  public launchDate: string;

  constructor() {}

  public static parse(obj: any): SatelliteData {
    return new SatelliteData().set(obj);
  }

  public set(obj: any): this {
    this.intDesignator = String(obj.intDesignator || this.intDesignator || '');
    this.name = String(obj.name || obj.satname || this.name || '');
    this.id = Number(obj.id || obj.satid || this.id || 0);
    this.latitude = Number(obj.latitude || obj.satlat || this.latitude || 0);
    this.longitude = Number(obj.longitude || obj.satlng || this.longitude || 0);
    this.altitude = Number(obj.altitude || obj.satalt || this.altitude || 0);
    this.launchDate = moment
      .utc(obj.launchDate || this.launchDate || new Date())
      .local()
      .format('YYYY-MM-DD');
    return this;
  }

  public clone(): SatelliteData {
    return new SatelliteData().set(this);
  }

  public clear(): this {
    Object.keys(this).forEach((key) => {
      this[key] = null;
    });
    this.set({});
    return this;
  }
}
