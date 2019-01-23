import * as moment from 'moment';

export class SatelliteData {
  public intDesignator = '';
  public satname = '';
  public satid = 0;
  public satlat = 0;
  public satlng = 0;
  public satalt = 0;
  public launchDate: Date;

  constructor() {}

  public static parse(obj: any): SatelliteData {
    return new SatelliteData().set(obj);
  }

  public set(obj: any): this {
    this.intDesignator = String(obj.intDesignator || this.intDesignator || '');
    this.satname = String(obj.satname || this.satname || '');
    this.satid = Number(obj.satid || this.satid || 0);
    this.satlat = Number(obj.satlat || this.satlat || 0);
    this.satlng = Number(obj.satlng || this.satlng || 0);
    this.satalt = Number(obj.satalt || this.satalt || 0);
    this.launchDate = moment
      .utc(obj.launchDate || this.launchDate || new Date())
      .local()
      .toDate();
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
