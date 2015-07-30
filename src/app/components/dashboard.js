'use strict';

/** @jsx React.DOM */
var DashboardComponent = React.createClass({

    getInitialState: function(){
        return {
            repository: this.props.repository,
            username: this.props.username,
            commits: [],
            countCommits: 0,
            countIssues: 0,
            countBranches: 0,
            countComments: 0
        }
    },

    componentWillMount: function() {
        this.retrieveInfo(this.state.username, this.state.repository);
    },
    
    componentWillReceiveProps: function(props) {
        this.retrieveInfo(props.username, props.repository);
    },
    
    retrieveInfo: function(username, repository) {
        
        var params = {
            username: username,
            repository: repository
        };

        var issuesUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/issues', params);
        var commitsUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/commits', params, { per_page: 100 });
        var commentsUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/comments', params, { per_page: 100 });
        var branchUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/branches', params);

        $.get(commitsUrl, function(result) {

            if (this.isMounted()) {
                var items = [];

                for (var i = 0; i < result.length; i++) {
                    items.push({
                        url: result[i].html_url,
                        text: result[i].commit.message
                    });
                }

                this.setState({
                    commits: items
                });
            }

        }.bind(this));

        $.get(commitsUrl, function(result) {

            if (this.isMounted()) {
                this.setState({
                    countCommits: result.length
                });
            }

        }.bind(this));

        $.get(issuesUrl, function(result) {

            if (this.isMounted()) {
                this.setState({
                    countIssues: result.length
                });
            }

        }.bind(this));

        $.get(commentsUrl, function(result) {

            if (this.isMounted()) {
                this.setState({
                    countComments: result.length
                });
            }

        }.bind(this));

        $.get(branchUrl, function(result) {

            if (this.isMounted()) {
                this.setState({
                    countBranches: result.length
                });
            }

        }.bind(this));
    },

    render: function() {

        var listTitle = 'commit';
        
        if (this.state.countCommits >= 100) {
            listTitle += ' - last 100';
        }
        
        var countCommits = this.state.countCommits;
        
        if (countCommits >= 100) {
            countCommits += '+';
        }
        
        return (
            <section className="row">
                <section className="column">
                    <LinksListComponent title={listTitle} items={this.state.commits}/>
                </section>
                <section className="column">
                    <CountComponent count={countCommits} title="commits" level="info" icon="fa-clock-o" />
                    <CountComponent count={this.state.countIssues} title="issues" level="success" icon="fa-exclamation-circle" />
                    <CountComponent count={this.state.countComments} title="comments" level="warning" icon="fa-comment" />
                    <CountComponent count={this.state.countBranches} title="branches" level="primary" icon="fa-code-fork" />
                </section>
            </section>
        );
    }
});

window.DashboardComponent = DashboardComponent;