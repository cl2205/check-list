import CheckListModule from './checkList';

describe('Checklist component', () => {
  let checkListController, $filter;

  beforeEach(function() {
    window.module(CheckListModule);

    inject(function(_$componentController_) {
      checkListController = _$componentController_;
    });
  });

  it('should expose an items binding', function () {
    let bindings = { items: ['a', 'b', 'c'] };
    let ctrl = checkListController('checkList', null, bindings);
    expect(ctrl.items).toBeDefined();
  });

  it('should initialize with itemList', function() {
    let bindings = { items: ['a', 'b', 'c'] };
    let ctrl = checkListController('checkList', null, bindings);

    ctrl.$onInit();
    expect(ctrl.itemList).to.equal(['a', 'b', 'c']);
  });

  it('should limit itemList to 5 items max', function () {
    let bindings = { items: ['a', 'b', 'c', 'd', 'e', 'f', 'g'] };
    let ctrl = checkListController('checkList', null, bindings);

    ctrl.$onInit();
    expect(ctrl.itemList).to.equal(['a', 'b', 'c', 'd', 'e']);
  });

});
