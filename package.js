Package.describe({
  name: '3stack:polite-animation',
  version: '1.0.0',
  summary: 'Runs an animation, and cancels if the user interacts with the page.',
  git: 'https://github.com/3stack-software/meteor-polite-animation',
  documentation: 'README.md'
});


/**
 * Created by nathan.muir on 9/2/14.
 */
Package.onUse(function(api){
  api.versionsFrom('METEOR@0.9.2');
  api.use('jquery', 'client');
  api.addFiles('polite-animation.js', 'client');
});
