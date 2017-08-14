import { OpaqueToken } from '@angular/core';
 
import { LANG_EN_NAME, LANG_EN_TRANS } from '../assets/resources/en/translations';
import { LANG_NL_NAME, LANG_NL_TRANS } from '../assets/resources/nl/translations';

export const TRANSLATIONS = new OpaqueToken('translations');

const dictionary = {
    [LANG_EN_NAME] : LANG_EN_TRANS,
    [LANG_NL_NAME] : LANG_NL_TRANS
}
 
export const TRANSLATION_PROVIDERS = [ { provide: TRANSLATIONS, useValue:dictionary}];