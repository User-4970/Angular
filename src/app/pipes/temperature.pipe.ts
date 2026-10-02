import { Pipe, PipeTransform } from '@angular/core';

export type TemperatureUnit = 'C' | 'F';

@Pipe({
  name: 'temperatureConvert',
  standalone: true,
})
export class TemperaturePipe implements PipeTransform {
  transform(
    temperature: number | null | undefined,
    from: TemperatureUnit,
    to: TemperatureUnit,
  ): number | null {
    if (temperature == null || !Number.isFinite(temperature)) {
      return null;
    }

    if (from === to) {
      return temperature;
    }

    return from === 'C' ? (temperature * 9) / 5 + 32 : ((temperature - 32) * 5) / 9;
  }
}