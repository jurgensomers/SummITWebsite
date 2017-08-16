import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
import { TranslateService} from './translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent implements OnInit {
  title = 'Summ-IT'; 
  public supportedLanguages: any[];
  public currentLanguage:string;
  public isMainCollapsed:boolean;
  public isBottomCollapsed:boolean;

  constructor(private _translate:TranslateService){ 
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this._translate.currentLang;
  }

  setLanguage(lang: string) {
      // set current lang;
      this._translate.use(lang); 
      this.currentLanguage = lang;
  } 
   
  ngOnInit() {
    // standing data
    this.supportedLanguages = [
    { display: 'English', value: 'en' },
    { display: 'Nederlands', value: 'nl' },
    { display: 'русский', value: 'ru'}
    ];

    // set current langage
    this.setLanguage('en');
    this.isBottomCollapsed = true;
    this.isMainCollapsed = true;
  }

  toggleMainCollapse(){
    this.isMainCollapsed = !this.isMainCollapsed;
  }

  toggleBottomCollapse(){
    this.isBottomCollapsed = !this.isBottomCollapsed;
  }

}
