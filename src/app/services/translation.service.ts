import { Injectable, Inject } from '@angular/core'; 
import { TRANSLATIONS } from '../translations';
 

@Injectable()
export class TranslationService {
   private currentLanguage:string;

   public get currentLang() {
    return this.currentLanguage;

  }

  // inject our translations
  constructor(@Inject(TRANSLATIONS) private _translations: any) {
  }

  public use(lang: string): void {
      // set current language
      console.log('language changed to ' + lang);
      this.currentLanguage = lang;
  }

  private translate(key: string): string {
    // private perform translation
    let translation = key;
    console.log('translate ' + key);
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
