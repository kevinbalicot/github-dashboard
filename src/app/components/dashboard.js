'use strict';

/** @jsx React.DOM */
var DashboardComponent = React.createClass({

    getInitialState: function(){
        return {
            commits: [],
            countCommits: 0,
            countIssues: 0,
            countBranches: 0,
            countComments: 0
        }
    },

    componentDidMount: function() {

        $.get(this.countCommitsUrl, function(result) {

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

        $.get(this.countCommitsUrl, function(result) {

            if (this.isMounted()) {
                this.setState({
                    countCommits: result.length
                });
            }

        }.bind(this));

        $.get(this.countIssuesUrl, function(result) {

            if (this.isMounted()) {
                this.setState({
                    countIssues: result.length
                });
            }

        }.bind(this));

        $.get(this.countCommentsUrl, function(result) {

            if (this.isMounted()) {
                this.setState({
                    countComments: result.length
                });
            }

        }.bind(this));

        $.get(this.countBranchesUrl, function(result) {

            if (this.isMounted()) {
                this.setState({
                    countBranches: result.length
                });
            }

        }.bind(this));
    },

    render: function() {

        var params = {
            username: this.props.username,
            repository: this.props.repository
        };

        this.countIssuesUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/issues', params);
        this.countCommitsUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/commits', params);
        this.countCommentsUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/comments', params);
        this.countBranchesUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/branches', params);

        return (
            <section className="row">
                <section className="column">
                    <LinksListComponent title="commits" items={this.state.commits}/>
                </section>
                <section className="column">
                    <CountComponent count={this.state.countCommits} title="commits" level="info" icon="fa-clock-o" />
                    <CountComponent count={this.state.countIssues} title="issues" level="success" icon="fa-exclamation-circle" />
                    <CountComponent count={this.state.countComments} title="comments" level="warning" icon="fa-comment" />
                    <CountComponent count={this.state.countBranches} title="branches" level="primary" icon="fa-code-fork" />
                </section>
            </section>
        );
    }
});

window.DashboardComponent = DashboardComponent;