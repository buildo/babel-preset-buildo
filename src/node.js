// plugins
import transformExportExtensions from 'babel-plugin-transform-export-extensions';
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';

// presets
import envPreset from 'babel-preset-env';

export default function(envPresetOptions) {
  return {
    plugins: [
      transformExportExtensions,
      transformObjectRestSpread
    ],
    presets: [
      [envPreset, envPresetOptions]
    ]
  };
}
