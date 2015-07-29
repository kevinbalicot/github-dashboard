var API_TOKEN = 'b66082604b1f8fe611b1918fb17987343c32cda5';
var API_URL = 'https://api.github.com/';

/** @jsx React.DOM */
var HelloWorldComponent = React.createClass({
    render: function() {
        
        return (
            <div className="panel">
                <section className="body success">
                    Hello world !
                </section>
            </div>
        );
    }
});

window.HelloWorldComponent = HelloWorldComponent;