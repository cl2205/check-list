
import template from './checkList.html';
import controller from './checkList.controller';
import './checkList.scss';

let checkListComponent = {
    bindings: {
      items: '<'
    },
    template,
    controller,
    controllerAs: 'vm'
};

export default checkListComponent;
