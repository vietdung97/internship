import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { CommonLayoutComponent } from './common/common-layout.component';
import { ListGenreComponent } from './list-genre/list-genre.component';
import { ListGenreMovieComponent } from './list-genre-movie/list-genre-movie.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [CommonLayoutComponent, ListGenreComponent, ListGenreMovieComponent],
    imports: [
        DemoNgZorroAntdModule,
        BrowserModule,
        CommonModule,
        CommonRoutingModule,
        
    ],

})
export class CommonLayoutModule {}