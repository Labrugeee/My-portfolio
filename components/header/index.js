import LISS from 'LISS';

class Header extends LISS ({
    content: fetch("./components/header/index.html"),
    css : fetch("./components/header/index.css")
})  {
    constructor() {
        super();
    }
}
LISS.define('my-header', Header);