'use strict';

/** @jsx React.DOM */
var LinksListComponent = React.createClass({

    render: function() {

        var title = this.props.title || 'NO TITLE';
        title = title.toUpperCase();
        
        var classes = this.props.panelClasses || '';
        var panelClasses = 'panel ' + classes;
        
        var classes = this.props.listClasses || '';
        var listClasses = classes;

        return (
            <div className={panelClasses}>
                <header>{title}</header>
                <section className="body">
                    <ul className={listClasses}>
                        {
                            this.props.items.map(function(item) {
                                return <a href={item.url} target="_blank"><li key={item.text}>{item.text}</li></a>
                            })
                        }
                    </ul>
                </section>
            </div>
        );
    }
});

window.LinksListComponent = LinksListComponent;