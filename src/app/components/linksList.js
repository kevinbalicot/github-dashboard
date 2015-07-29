'use strict';

/** @jsx React.DOM */
var LinksListComponent = React.createClass({

    render: function() {

        var title = this.props.title || 'NO TITLE';

        title = title.toUpperCase();

        return (
            <div className="panel">
                <header>{title}</header>
                <section className="body">
                    <ul>
                        {
                            this.props.items.map(function(item) {
                                return <a href={item.url} target="_blank"><li>{item.text}</li></a>
                            })
                        }
                    </ul>
                </section>
            </div>
        );
    }
});

window.LinksListComponent = LinksListComponent;