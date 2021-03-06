module.exports = (api) => {
  api.cache.forever();
  return {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-object-rest-spread',
      '@babel/plugin-transform-modules-commonjs',
      'transform-es2015-modules-commonjs',
    ],
  };
};
