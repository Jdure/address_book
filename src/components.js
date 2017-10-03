/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "October 1st 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: React Address List
 * @Filename: components.js
 * @Last modified by:   JDure
 * @Last modified time: "October 2nd 2017"
 */

/*global React:true*/


let NavMenu = React.createClass({
    render: function() {
        return (
            React.createElement('ul', {
                className: 'nav nav-pills'
            },
            React.createElement('li', {
                className: 'nav-item'
            },
            React.createElement('a', {
                href: '#main',
                className: 'nav-link'
            }, 'Main View')
            ),
            React.createElement('li', {
                className: 'nav-item'
            },
            React.createElement('a', {
                href: '#new',
                className: 'nav-link'
            }, 'Add Contact')
            ),
            React.createElement('li', {
                className: 'nav-item'
            },
            React.createElement('a', {
                href: '#view',
                className: 'nav-link'
            }, 'Contact View')
            )
            )
        );
    }
});
