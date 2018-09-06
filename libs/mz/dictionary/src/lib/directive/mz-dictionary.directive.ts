import {Directive, ElementRef, OnDestroy, OnInit, Renderer2} from '@angular/core';
import {Subscription} from "rxjs";
import {MzDictionaryService} from "../service/mz-dictionary.service";
import {MzDictionarySnapshotType} from "../res/@abstract/@type/mz-common.type";
import {MzTranslatorController} from "../res/mz-translator.controller";

let attrKey = 'mz-dictionary';

@Directive({
  selector: `[mz-dictionary]` // [${attrKey}]
})
export class MzDictionaryDirective implements OnInit, OnDestroy {

  // @Input('mz-default') mzDictionary: string;

  private subscription$: Subscription;
  private mask: string;

  constructor (
    private dictionaryService: MzDictionaryService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {
  }

  ngOnInit(): void {
    // init mask
    this.initMask(attrKey);

    //subscribe for change
    this.subscription$ = this.dictionaryService
      .subscription$
      .subscribe(
        (snapshot: MzDictionarySnapshotType) => {
            this.el.nativeElement.innerHTML = MzTranslatorController.Translator.translate (
              this.mask,
              snapshot.lang
            );
        }
      );
  }

  ngOnDestroy(): void {
    //unsubscribe for change
    this.subscription$.unsubscribe();
  }

  public getAttributeValue ( key: string): string | null {
    return (this.el.nativeElement.attributes[key]) ? this.el.nativeElement.attributes[key].value : null
  }

  public setAttributeValue (key: string, val: string) {
    this.renderer.setAttribute(this.el.nativeElement, key, val);
  }

  public getHtmlContent (): string {
    return this.el.nativeElement.innerHTML;
  }

  private initMask (key): void {
    // get mask
    let mask = this.getAttributeValue(key);
    if (!mask) {
      // we have not mask get mask from html content
      mask = this.getHtmlContent() || '';
      this.setAttributeValue(key, mask);
    }
    // init mask
    this.mask = mask;
  }
}
