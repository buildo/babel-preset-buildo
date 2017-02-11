import nodePreset from './node';
import reactPreset from './react';

export default function buildPreset(context, options) {
  if (options.env === 'react') {
    return reactPreset(options);
  }
  return nodePreset(options);
}
