var React = require('react');
window.React = React;

require('./modules/hello-world');

/** @jsx React.DOM */
React.render(
    <HelloWorldComponent />,
    document.getElementById('content')
);


