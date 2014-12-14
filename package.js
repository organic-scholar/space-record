Package.describe({
  name: 'organic:space-record',
  summary: 'space-record is ODM for meteor',
  version: '0.0.1',
  git: 'https://github.com/organic-scholar/space-record.git'
});

files = [
    'organic:space-record.js',
];

Package.onUse(function(api) {
    api.versionsFrom('1.0');
});

Package.onTest(function(api) {
    api.use('mquandalle:harmony');
    api.use('mrt:exports');
    api.use('tinytest');
    api.use('organic:space-record');
    api.addFiles(files);
    api.addFiles(testFiles);
});