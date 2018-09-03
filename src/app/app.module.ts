import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { ArticleComponent } from './article/article.component';
import { ArticleTestComponent } from './article-test/article-test.component';
import { NgxGistModule } from 'ngx-gist/dist/ngx-gist.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ArticleComponent,
    ArticleTestComponent,
    
  ],
  imports: [
    BrowserModule,
    NgxGistModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
