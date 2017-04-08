import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {NavBarComponent} from './component/navbar/navbar.component';
import {AboutComponent} from './component/about/about.component';
import {SearchComponent} from './component/search/search.component';
import {RouterModule} from '@angular/router';
import {HttpModule} from '@angular/http';
import {ArtistComponent} from './component/artist/artist.component';
import {AlbumComponent} from './component/album/album.component';
import {SpotifyService} from './service/spotify.service';

@NgModule({
  imports: [ BrowserModule ,HttpModule,FormsModule,RouterModule.forRoot([{path:'',component:SearchComponent},
  {path:'about',component:AboutComponent},
  {path:'artist/:id',component:ArtistComponent},
  {path:'album/:id',component:AlbumComponent}])],
  declarations: [ AppComponent,NavBarComponent,AboutComponent,SearchComponent,ArtistComponent,AlbumComponent],
  bootstrap: [ AppComponent ],
providers:[SpotifyService]
})
export class AppModule { }
