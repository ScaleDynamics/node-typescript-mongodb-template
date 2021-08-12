module.exports = {
  output: {
    format: 'node-module',
    projectPath: '.',
    name: 'backend',
  },
  expose: {
    source: 'dist/index.js',
    type: 'dist/index.d.ts',
  },
};
