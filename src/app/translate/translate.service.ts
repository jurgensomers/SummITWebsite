import { Injectable, Inject } from '@angular/core'; 
import { TRANSLATIONS } from './translations';
 

@Injectable()
export class TranslateService {
   private currentLanguage:string;

   public get currentLang() {
    return this.currentLanguage;

  }

  // inject our translations
  constructor(@Inject(TRANSLATIONS) private _translations: any) {
  }

  public use(lang: string): void {
      // set current language  
      this.currentLanguage = lang;
      console.log('language : ' + this.currentLanguage);
  }

  private translate(key: string): string {
    // private perform translation
    console.log('language (translate) : ' + this.currentLanguage);
    let translation = key; 
    if (this._translations[this.currentLanguage] && this._translations[this.currentLanguage][key]) {
        return this._translations[this.currentLanguage][key];
    }

    return translation;
  }

  public instant(key: string) {
      // call translation
      return this.translate(key); 
  }
} 
