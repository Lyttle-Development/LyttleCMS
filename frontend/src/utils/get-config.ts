import * as Configs from '../../../Content/app/generated/Configs';

export const ContentConfigs = Configs;

export function getConfig(path: string): object | any {
  const paths = path.split('.');

  const config: any = ContentConfigs;

  const key = paths
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join('')
    .split(/[/_-]/gm)
    .map((x) => x.charAt(0).toUpperCase() + x.slice(1))
    .join('');

  return config[`Config${key}`];
}
