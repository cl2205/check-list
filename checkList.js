import angular from 'angular';
import checkListComponent from './checkList.component';

let checkListModule = angular.module('checkList', [])
  .component('checkList', checkListComponent);

export default checkListModule;
