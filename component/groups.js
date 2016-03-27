

(function (angular) {
  "use strict";

    angular.module("demoApp")
  
    .controller('groupsController', [
    '$scope',
    function ($scope) {

        $scope.groups = [
            {
                "name": "A",
                "description": "First Group",
                "items": [
                    {
                        "name": "a1",
                        "description": "1th desc"
                    },
                    {
                        "name": "a2",
                        "description": "2th desc"
                    },
                    {
                        "name": "a3",
                        "description": "3th desc"
                    },
                    {
                        "name": "a4",
                        "description": "4th desc"
                    },
                    {
                        "name": "a5",
                        "description": "5th desc"
                    }
                ]
            },
            {
                "name": "B",
                "description": "Second Group",
                "items": [
                ]
            },
            {
                "name": "C",
                "description": "Third Group",
                "items": [
                    {
                        "name": "c1",
                        "description": "1th desc"
                    },
                    {
                        "name": "c2",
                        "description": "2th desc"
                    }
                ]
            },
            {
                "name": "D",
                "description": "Forth Group",
                "items": [
                    {
                        "name": "d1",
                        "description": "1th desc"
                    }
                ]
            }
        ];


        $scope.deleteGroup = function (index) {
            $scope.groups.splice(index, 1);
        };

        $scope.toggleItems = function (index) {

            if (angular.element(".items-div-sortable").eq(index).children().length > 0) {
                angular.element(".items-div-sortable").eq(index).toggle();
                //debugger
                if (angular.element(".items-div-sortable").eq(index).css('display') != 'none') {
                    angular.element(".groups-div-row").eq(index).addClass('groups-div-row-regular');
                    angular.element(".groups-div-row .icon-delete").eq(index).addClass('icon-delete-hidden');
                    angular.element(".icon-placeholder").eq(index).removeClass('divExpandImg').addClass('divCollapseImg');

                }
                else {
                    angular.element(".groups-div-row").eq(index).removeClass('groups-div-row-regular');
                    angular.element(".groups-div-row .icon-delete").eq(index).removeClass('icon-delete-hidden');
                    angular.element(".icon-placeholder").eq(index).removeClass('divCollapseImg').addClass('divExpandImg');
                }
            }   
        };

        $scope.sortableOptionsGroups = {
            containment: ".group-div-sortable",
            connectWith: '.group-div-sortable',
            disabled: true,
        }


        $scope.sortableOptionsItems = {
            // called after a node is dropped
            connectWith: '.items-div-sortable',
            change: function (event, ui) {
                //debugger
            },
            receive: function (event, ui) {
                //console.log('receive: ', $scope.groups);
            },
            remove: function (event, ui) {
                //console.log('remove: ', $scope.groups);
                //debugger
            },
            update: function (event, ui) {
                ui.item.eq(0).parent().prev().css('border', 'none');
                if (ui.item.eq(0).parent().children().length == 1) {
                    ui.item.eq(0).parent().prev().parent().eq(0).removeClass('groups-div-row-regular');
                    ui.item.eq(0).parent().prev().eq(0).find('.icon-delete').removeClass('icon-delete-hidden');
                }
            },
            start: function (event, ui) {
                ui.item.eq(0).parent().prev().css('border', 'solid 2px #DF4E30');
            },
            over: function (event, ui) {

            },
            out: function (event, ui) {

            },
            beforeStop: function (event, ui) {

            },
            stop: function (event, ui) {
            }
        };


      
    }]);
  
})(angular);