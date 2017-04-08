"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var navbar_component_1 = require("./component/navbar/navbar.component");
var about_component_1 = require("./component/about/about.component");
var search_component_1 = require("./component/search/search.component");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var artist_component_1 = require("./component/artist/artist.component");
var album_component_1 = require("./component/album/album.component");
var spotify_service_1 = require("./service/spotify.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, router_1.RouterModule.forRoot([{ path: '', component: search_component_1.SearchComponent },
                { path: 'about', component: about_component_1.AboutComponent },
                { path: 'artist/:id', component: artist_component_1.ArtistComponent },
                { path: 'album/:id', component: album_component_1.AlbumComponent }])],
        declarations: [app_component_1.AppComponent, navbar_component_1.NavBarComponent, about_component_1.AboutComponent, search_component_1.SearchComponent, artist_component_1.ArtistComponent, album_component_1.AlbumComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [spotify_service_1.SpotifyService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map