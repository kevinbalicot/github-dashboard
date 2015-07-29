'use strict';

/** @jsx React.DOM */
var CountComponent = React.createClass({

    render: function() {

        var title = this.props.title || 'NO TITLE';
        var level = this.props.level || '';
        var icon = this.props.icon || '';
        var count = this.props.count || 0;

        title = title.toUpperCase();

        var panelClass = 'panel half ' + level;
        var iconClass = 'fa-5x fa ' + icon;

        return (
            <div className={panelClass}>
                <section className="body text-center">
                    <p>{title}</p>
                    <i className={iconClass}></i>
                    <hr/>
                    <span className="text-x2">{count}</span>
                </section>
            </div>
        );
    }
});

window.CountComponent = CountComponent;