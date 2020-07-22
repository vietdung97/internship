import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonLayoutComponent } from './common/common-layout.component';
import { ListGenreComponent } from './list-genre/list-genre.component';
import { ListGenreMovieComponent } from './list-genre-movie/list-genre-movie.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
    {
        path: 'common',
        component: CommonLayoutComponent,
        children: [
            {
                path: '',
                component: ListGenreComponent
            },
            {
                path: ':genre',
                component: ListGenreMovieComponent
            }
        ]
    },
    {
      path: 'timkiem',
      component: SearchComponent,
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [],
    exports: [RouterModule]
})
export class CommonRoutingModule {}
