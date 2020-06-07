module.exports = {
  name: 'renovation',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/renovation',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
