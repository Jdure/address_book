/**
 * @Author: Jonathan Dure <JDure>
 * @Date:   "September 30th 2017"
 * @Email:  Dure0018@algonquinlive.com
 * @Project: React Address List
 * @Filename: app.js
 * @Last modified by:   JDure
 * @Last modified time: "October 2nd 2017"
 */

/*global FormView:true*/
/*global ViewPage:true*/
/*global MainPage:true*/
/*global ReactDOM:true*/
/*global React:true*/
/*global items:true*/

let state = {
    location: ''
};

function setState(changes) {
    let component;
    Object.assign(state, changes);
    let splittedUrl = state.location.replace(/^#\/?|\/$/g, '').split('/');

    let componentProperties = {};

    switch(splittedUrl[0]) {
    case 'new':
        component = FormView;
        componentProperties = {
            items: state.items,
            item: state.item,
            onNewItemChange: function(item){
                setState({item:item});
            },
            onSubmitNewItem: function(){
                var newItems = state.items;
                newItems.push(state.item);
                setState({items:newItems, item:{name:'', email:''}});
            }
        };
        break;
    case 'view':
        component = ViewPage;
        componentProperties = items.find((i) => i.id === splittedUrl[1]);

        break;
    default:
        component = MainPage;
    }
    ReactDOM.render(React.createElement(component, componentProperties), document.getElementById('root'));
    // ReactDOM.render(React.createElement("div", {}, "TEST"), document.getElementById("root"));
}


window.addEventListener('hashchange', ()=>setState({location: location.hash}));

//Start the app by declaring the initial state
setState({location: location.hash, items:items, item:{name:'', email:''}});
