var React = require('react');
window.React = React;

require('./components/dashboard');
require('./components/count');
require('./components/linksList');

require('./services/apiLinkBuilder');

var ApplicationComposent = React.createClass({

    getInitialState: function(){
        return {
            repositories: [],
            repository: ''
        }
    },

    componentDidMount: function() {

        $.get(ApiLinkBuilder.generateLink('/user/repos', {}), function(result) {

            if (this.isMounted()) {
                this.setState({
                    repositories: result,
                    repository: result[0].name
                });
            }
        }.bind(this));
    },

    handleChange: function(event) {
        this.setState({repository: event.target.value});
        this.forceUpdate();
    },

    render: function() {

        var username = 'kevinbalicot';

        return (
            <div>
                <nav>
                    <i className="fa fa-bar-chart"></i>
                    Github Dashboard
                    <span className="put-right">
                        Repository :
                        <select onChange={this.handleChange}>
                            <option>test test</option>
                            {
                                this.state.repositories.map(function(item) {
                                    return <option value={item.name} key={item.name} >{item.name}</option>
                                })
                            }
                        </select>
                    </span>
                </nav>
                <DashboardComponent username={username} repository={this.state.repository}/>
            </div>
        );
    }
});

/** @jsx React.DOM */
React.render(
    <ApplicationComposent />,
    document.getElementById('content')
);


