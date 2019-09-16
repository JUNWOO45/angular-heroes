import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';

import { FormsModule } from '@angular/forms'; //NgModel을 사용하기위해서 로딩하였습니다.

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent
  ],
  imports: [  //이 배열에는 어플리케이션이 동작할 때 필요한 외부 모듈을 등록합니다.
    BrowserModule,
    FormsModule //import한 FormsModule을 @NgModule메타데이터의 imports배열에 추가합니다.
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
