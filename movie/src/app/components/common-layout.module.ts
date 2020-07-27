import { NgModule } from '@angular/core';
import { CommonRoutingModule } from './common-routing.module';
import { CommonLayoutComponent } from './common/common-layout.component';
import { ListGenreComponent } from './list-genre/list-genre.component';
import { ListGenreMovieComponent } from './list-genre-movie/list-genre-movie.component';
import { DemoNgZorroAntdModule } from '../ng-zorro-antd.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { SearchDirective } from './search/search.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BoldKeywordPipe } from './bold-keyword.pipe';





@NgModule({
    declarations: [CommonLayoutComponent, ListGenreComponent, ListGenreMovieComponent, SearchComponent, SearchDirective, BoldKeywordPipe],
    imports: [
        DemoNgZorroAntdModule,
        BrowserModule,
        CommonModule,
        CommonRoutingModule,
        FormsModule,
        ReactiveFormsModule,


    ],
    exports: [BoldKeywordPipe],

})
export class CommonLayoutModule {}
