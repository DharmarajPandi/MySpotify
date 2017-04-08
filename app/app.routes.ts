import {provideRoutes,RouterModule} from '@angular/router';
import {AboutComponent} from './component/about/about.component';
import {SearchComponent} from './component/search/search.component';

const route:RouterModule =[{
path:'',component:SearchComponent},
{path:'about',component:AboutComponent}];

export const appRouteProvide=[provideRoutes(route);];