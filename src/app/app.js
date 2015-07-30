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
            repository: null
        }
    },
    
    componentWillMount: function() {

        $.get(ApiLinkBuilder.generateLink('/user/repos', {}), function(result) {

                this.setState({
                    repositories: result,
                    repository: result[0].name
                });
                
            if (this.isMounted()) {
                
            }
        }.bind(this));
    },

    handleChange: function(event) {
        this.setState({repository: event.target.value});
        //this.forceUpdate();
    },

    render: function() {
        
        var username = 'kevinbalicot';

        if (this.state.repository !== null) {
            return (
                <div>
                    <nav>
                        <i className="fa fa-bar-chart"></i>
                        Github Dashboard for {this.state.repository}
                        <span className="put-right">
                            Repository :
                            <select onChange={this.handleChange}>
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
        } else {
            return (<div>Chargement ...</div>);
        }
    }
});

/** @jsx React.DOM */
React.render(
    <ApplicationComposent />,
    document.getElementById('content')
);


