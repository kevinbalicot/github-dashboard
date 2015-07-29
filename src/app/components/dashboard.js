'use strict';

require('../services/apiLinkBuilder');

/** @jsx React.DOM */
var DashboardComponent = React.createClass({
    render: function() {

        var params = {
            username: this.props.username,
            repository: this.props.repository
        };

        var countIssuesUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/issues', params);
        var countCommitsUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/commits', params);
        var countCommentsUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/comments', params);
        var countBranchesUrl = ApiLinkBuilder.generateLink('/repos/{username}/{repository}/branches', params);

        return (
            <section className="row">
                <section className="column">
                    <div className="panel"></div>
                </section>
                <section className="column">
                    <CountComponent source={countCommitsUrl} title="commits" level="info" icon="fa-clock-o" />
                    <CountComponent source={countIssuesUrl} title="issues" level="success" icon="fa-exclamation-circle" />
                    <CountComponent source={countCommentsUrl} title="comments" level="warning" icon="fa-comment" />
                    <CountComponent source={countBranchesUrl} title="branches" level="primary" icon="fa-code-fork" />
                </section>
            </section>
        );
    }
});

window.DashboardComponent = DashboardComponent;