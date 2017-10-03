/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "October 1st 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: React Address List
 * @Filename: add.js
 * @Last modified by:   JDure
 * @Last modified time: "October 2nd 2017"
 */

/*global React:true*/
/*global state:true*/
/*global NavMenu:true*/

var ContactForm = React.createClass({
    PropTypes: {
        item: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired,
        onSubmit: React.PropTypes.func.isRequired
    },
    onNameChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.item, {
            name: e.target.value
        }));
    },
    onEmailChange: function(e) {
        this.props.onChange(Object.assign({}, this.props.item, {
            email: e.target.value
        }));
    },
    onSubmit: function(e) {
        if (this.props.item.name != '' && this.props.item.email != '') {
            this.props.onSubmit(this.props.item);
        } else {
            alert('Please enter a Fullname and Email.');
        }
    },
    render: function() {
        return (
            React.createElement('form', {},
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Name',
                    value: this.props.item.name,
                    onChange: this.onNameChange
                }),
                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Email',
                    value: this.props.item.email,
                    onChange: this.onEmailChange
                }),
                React.createElement('button', {
                    type: 'button',
                    onClick: this.onSubmit
                }, 'Add Contact')
            )
        );
    }
});


let FormView = React.createClass({

    getState: function() {
        return {
            item: React.PropTypes.object.isRequired,
            items: React.PropTypes.array.isRequired,
            onNewItemChange: React.PropTypes.func.isRequired,
            onSubmitNewItem: React.PropTypes.func.isRequired
        };
    },

    setState: function(changes) {
        // Let's apply the changes on our current state
        Object.assign(state, changes);

        // And re-render our page
        this.updatePage();
    },

    updateNewItem: function(item) {
        this.setState({
            item: item
        });
    },

    addNewItem: function(item) {
        let itemList = state.items;
        itemList.push(Object.assign({}, {
            key: itemList.length + 1
        }, item));
        this.setState({
            items: itemList
        });
    },

    render: function() {
        return (
            React.createElement('div', {
                id: 'new',
                className: 'content'
            },
            React.createElement(NavMenu, {}),
            React.createElement(ContactForm, {
                id: 'FormView',
                item: this.props.item,
                onChange: this.props.onNewItemChange,
                onSubmit: this.props.onSubmitNewItem
            })
            )
        );
    },

});
