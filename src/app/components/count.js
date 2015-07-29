'use strict';

/** @jsx React.DOM */
var CountComponent = React.createClass({

    getInitialState: function(){
        return {
            count: 0
        }
    },

    componentDidMount: function() {

        $.get(this.props.source, function(result) {

            if (this.isMounted()) {
                this.setState({
                    count: result.length
                });
            }
        }.bind(this));
    },

    render: function() {

        var title = this.props.title || 'NO TITLE';
        var level = this.props.level || '';
        var icon = this.props.icon || '';

        title = title.toUpperCase();

        var panelClass = 'panel half ' + level;
        var iconClass = 'fa-5x fa ' + icon;

        return (
            <div className={panelClass}>
                <section className="body text-center">
                    <p>{title}</p>
                    <i className={iconClass}></i>
                    <hr/>
                    <span className="text-x2">{this.state.count}</span>
                </section>
            </div>
        );
    }
});

window.CountComponent = CountComponent;