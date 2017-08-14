import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

 @Injectable()
export class Globals { 
  currentLanguage:string = "en";
  translations:TranslatedPage[] = null;
}

@Injectable()
export class TranslationService {
   
  constructor( public http:Http, private globals:Globals ) { 
  }

  getAll(){    
    console.log('get translations for language ' + this.globals.currentLanguage);
    if(this.globals.currentLanguage == null || this.globals.currentLanguage == undefined) {
      console.log('default language set to en');
      this.globals.currentLanguage = "en";
    }
      
    return this.http.get('../assets/resources/labels.' + this.globals.currentLanguage + '.json')
      .map(res => res.json());
  } 

  getKey(page:String, key:string){
    if(this.globals.translations === null || this.globals.translations == undefined){
      console.log('loading pages...');
      this.getAll().subscribe (pages => {
          this.globals.translations = pages;
          this.getKey(page,key);
          console.log('pages loaded');
      });
    }
    else{
      var pageResult = this.globals.translations.filter(x => x.page == page);
      if(pageResult != null && pageResult != undefined && pageResult.length > 0) {
        var keyResult = pageResult[0].labels.filter(x => x.key == key);
        if(keyResult != null && keyResult != undefined && keyResult.length > 0 ) {
          console.log('page ' + page + ' and key ' + key + ' : ' + keyResult[0].key + '/' + keyResult[0].value) 
          return keyResult[0].value;
        }
      }
      
      return '#page.key#';
    }
  }

  get(pageAndKey:String){
    if(pageAndKey === null || pageAndKey == undefined ) return "#translationKey#";
    
    var page = pageAndKey.split('.')[0];
    var key = pageAndKey.split('.')[1];

    console.log('get translation : page is ' + page + ' and key is ' + key);

    return this.getKey(page, key);
  }



  setLanguage(language:string){
    this.globals.currentLanguage = language;
    console.log('language changed');
  }


} 

export interface TranslatedPage {
  page:String,
  labels:TranslatedValue[]
}

interface TranslatedValue {
      key:string;
      value:string
  }
 
