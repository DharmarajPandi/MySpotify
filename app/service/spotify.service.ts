import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService{


constructor(private _http:Http){

}
searchMusic(str:string,type='Artist'){
  return  this._http.get('https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=us')
  .map(res=>res.json())
}
searchArtist(id:string){
  console.log(id+'service')
  return  this._http.get('https://api.spotify.com/v1/artists/'+id)
  .map(res=>res.json())
}

searchAlbums(id:string){
  console.log(id+'service')
  return  this._http.get('https://api.spotify.com/v1/artists/'+id+'/albums')
  .map(res=>res.json())
}
  getAlbum(id:string){
        return this._http.get('https://api.spotify.com/v1/albums/'+id)
            .map(res => res.json());
    }
  


}