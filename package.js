Package.describe({
  summary: "jQuery wizard dialog by Rafael Staib, repackaged for Meteor."
});

Package.on_use(function(api){  
  api.use('jquery', 'client');
  api.add_files([
    'lib/jquery.steps.js',
    'lib/jquery.steps.css'
  ], 'client');
});