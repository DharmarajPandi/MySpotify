import {Component,OnInit} from '@angular/core';
import {SpotifyService} from '../../service/spotify.service';
import {Album} from '../../common/Album';
import {Artist} from '../../common/Artist';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
     moduleId:module.id,
selector:'artist',
templateUrl:'artist.component.html'
})
export class ArtistComponent implements OnInit{

    id:string;
    albums:Album[];
    artist:Artist[];

    constructor(private _spotifyService:SpotifyService,
    private _route:ActivatedRoute){
     }
    ngOnInit(){

        this._route.params.map(param=>param['id']).subscribe(ids=>this.id=ids);
        this._spotifyService.searchArtist(this.id).subscribe(res=>this.artist=res);
        this._spotifyService.searchAlbums(this.id).subscribe(res=>this.albums=res.items);
    }

    
   
}