import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TranslationService} from './services/translation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Summ-IT';
  private ts:TranslationService;

  setLanguage(language:string){
    this.ts.setLanguage(language);
  }

  constructor(private translationService:TranslationService){
    this.ts = translationService;
  }
}
