class CheckListController {
  constructor($filter) {
    var vm = this;
    vm.$filter = $filter;

    vm.$onInit = function ($filter) {
      vm.itemList = vm.$filter('limitTo')(vm.items, 5);
    };
  }
}

CheckListController.$inject = ["$filter"];

export default CheckListController;
