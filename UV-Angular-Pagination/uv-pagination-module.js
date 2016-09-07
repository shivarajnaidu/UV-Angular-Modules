/*
 * Copyright (c) 2016-present, yuvaraj 
 * All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this Repository.
 *
 */

"use strict";

(() => {
    let app = angular.module("uvPagination", []);
    app.factory("Pagination", () => {

        return (data, itemsPerPage) => {
            let Paginator = {};
            Paginator.totalDataLength = data.length || 0;
            Paginator.itemsPerPage = itemsPerPage || 5;
            Paginator.totalPagesRequired = Paginator.totalDataLength / Paginator.itemsPerPage;
            Paginator.start = 0;
            Paginator.end = Paginator.itemsPerPage;
            Paginator.currentModel = data.slice(Paginator.start, Paginator.end);
            Paginator.isDisabledPrevious = true;
            Paginator.isDisabledNext = false;

            Paginator.setCurrentModelState = paginator => {
                Paginator.currentModel = paginator.currentModel
                Paginator.isDisabledPrevious = paginator.isDisabledPrevious
                Paginator.isDisabledNext = paginator.isDisabledNext
            };

            Paginator.changeCurrentModel = () => {
                Paginator.currentModel = data.slice(Paginator.start, Paginator.end);
            };

            Paginator.previousPage = () => {
                Paginator.start -= Paginator.itemsPerPage;
                Paginator.end -= Paginator.itemsPerPage;
                Paginator.start == 0 ? Paginator.isDisabledPrevious = true : Paginator.isDisabledNext = false;
                Paginator.changeCurrentModel()
            };

            Paginator.nextPage = () => {
                Paginator.start += Paginator.itemsPerPage;
                Paginator.end += Paginator.itemsPerPage;
                Paginator.end >= Paginator.totalDataLength ? Paginator.isDisabledNext = true : Paginator.isDisabledPrevious = false;
                Paginator.changeCurrentModel()
            };

            return Paginator;
        };
    })

})();
