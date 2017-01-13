// plugins
import transformClassProperties from 'babel-plugin-transform-class-properties';
import transformDecoratorsLegacy from 'babel-plugin-transform-decorators-legacy';
import transformExportExtensions from 'babel-plugin-transform-export-extensions';
import transformFunctionBind from 'babel-plugin-transform-function-bind';
import transformObjectRestSpread from 'babel-plugin-transform-object-rest-spread';

// presets
import reactPreset from 'babel-preset-react';
import buildoNodePreset from './node';


export default function(envPresetOptions) {
  return {
    plugins: [
      transformDecoratorsLegacy,
      transformClassProperties,
      transformExportExtensions,
      transformFunctionBind,
      transformObjectRestSpread
    ],
    presets: [
      reactPreset,
      buildoNodePreset(envPresetOptions)
    ]
  };
}
