/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "October 1st 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: React Address List
 * @Filename: view.js
 * @Last modified by:   JDure
 * @Last modified time: "October 2nd 2017"
 */

/*global React:true*/
/*global ViewPage:true*/
/*global NavMenu:true*/
/*global ViewPage:true*/

let ViewPage = React.createClass({
    PropTypes: {
        items: React.PropTypes.array.isRequired,
        name: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired
    },
    render: function() {
        return (
            React.createElement('div', {
                id: 'view',
                className: 'content'
            },
            React.createElement(NavMenu, {}),
            React.createElement('div', {
                className: 'contactView'
            },
            React.createElement('h1', {}, this.props.name),
            React.createElement('p', {
                href: 'mailto:' + this.props.email
            }, this.props.email),
            React.createElement('a', {
                href: '#main'
            }, 'To Main Page')
            )
            )
        );
    }
});
