/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "October 1st 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: React Address List
 * @Filename: main.js
 * @Last modified by:   JDure
 * @Last modified time: "October 2nd 2017"
 */

/*global NavMenu:true*/
/*global React:true*/
/*global items:true*/
/*global MainPage:true*/

var ContactItem = React.createClass({
    PropTypes: {
        id: React.PropTypes.number,
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired
    },

    render: function() {
        return (
            React.createElement('li', {
                id: this.props.id,
                className: 'chip'
            },
            React.createElement('a', {href:'#MainPage/' + this.props.id},
                React.createElement('span', {}, this.props.name)),
            React.createElement('a', {
                href: 'mailto:' + this.props.email
            }, this.props.email),
            React.createElement('button', {
                id: 'deleteBtn-' + this.props.id,
                onClick: this.props.onDeleteButtonClicked
            }, 'X')
            )
        );
    },
});

var MainPage = React.createClass({

    render: function() {

        var contactItemElements = items.filter(function(item) {
            return item.email;
        })
            .map(function(item) {
                return React.createElement(ContactItem, item);
            });

        return (
            React.createElement('div', {
                id: 'main',
                className: 'content'
            },
            React.createElement(NavMenu, {}),
            React.createElement('h1', {className: 'h1'}, 'Contacts'),
            React.createElement('ul', {
                className: 'contactList'
            }, contactItemElements)
            )

        );
    }

});
