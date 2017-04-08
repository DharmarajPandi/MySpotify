import {Component} from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';
import {Artist} from '../../common/Artist';

@Component({
    moduleId:module.id,
selector:'search',
templateUrl:'search.component.html'
})
export class SearchComponent{
    searchStr:string;
    searchRes:Artist[]
    PageTitle:string ='My Componenet';
constructor(private _spotifyService:SpotifyService){

}


    searchMusic(){
            this._spotifyService.searchMusic(this.searchStr)
            .subscribe(res=>this.searchRes=res.artists.items);
    }
}