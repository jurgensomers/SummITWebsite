import { OpaqueToken } from '@angular/core';
 
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_NL_NAME, LANG_NL_TRANS } from './lang-nl';
import { LANG_RU_NAME, LANG_RU_TRANS } from './lang-ru';

export const TRANSLATIONS = new OpaqueToken('translations');

export const dictionary = {
    [LANG_EN_NAME] : LANG_EN_TRANS,
    [LANG_NL_NAME] : LANG_NL_TRANS,
    [LANG_RU_NAME] : LANG_RU_TRANS
}
 
export const TRANSLATION_PROVIDERS = [ { provide: TRANSLATIONS, useValue:dictionary}];