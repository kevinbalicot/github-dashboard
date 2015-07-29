var React = require('react');
window.React = React;

require('./components/dashboard');
require('./components/count');

var ApplicationComposent = React.createClass({
    render: function() {

        var username = 'kevinbalicot';
        var repository = 'nodejs-api';

        return (
            <div>
                <nav>
                    <i className="fa fa-bar-chart"></i>
                    Github Dashboard
                    <span className="put-right">Repository : <strong>{repository}</strong></span>
                </nav>
                <DashboardComponent username={username} repository={repository}/>
            </div>
        );
    }
});

/** @jsx React.DOM */
React.render(
    <ApplicationComposent />,
    document.getElementById('content')
);


