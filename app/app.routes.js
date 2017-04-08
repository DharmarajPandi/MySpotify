"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./component/about/about.component");
var search_component_1 = require("./component/search/search.component");
var route = [{
        path: '', component: search_component_1.SearchComponent
    },
    { path: 'about', component: about_component_1.AboutComponent }];
exports.appRouteProvide = [router_1.provideRoutes(route)];
;
//# sourceMappingURL=app.routes.js.map