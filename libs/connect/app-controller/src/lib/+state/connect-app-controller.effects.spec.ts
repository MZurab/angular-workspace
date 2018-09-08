// import { TestBed, async } from '@angular/core/testing';
//
// import { Observable } from 'rxjs';
//
// import { EffectsModule } from '@ngrx/effects';
// import { StoreModule } from '@ngrx/store';
// import { provideMockActions } from '@ngrx/effects/testing';
//
// import { NxModule } from '@nrwl/nx';
// import { DataPersistence } from '@nrwl/nx';
// import { hot } from '@nrwl/nx/testing';
//
// import { ConnectAppControllerEffects } from './connect-app-controller.effects';
// import {
//   LoadConnectAppController,
//   ConnectAppControllerLoaded
// } from './states/actions/connect-app-controller.actions';
//
// describe('ConnectAppControllerEffects', () => {
//   let actions: Observable<any>;
//   let effects: ConnectAppControllerEffects;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [
//         NxModule.forRoot(),
//         StoreModule.forRoot({}),
//         EffectsModule.forRoot([])
//       ],
//       providers: [
//         ConnectAppControllerEffects,
//         DataPersistence,
//         provideMockActions(() => actions)
//       ]
//     });
//
//     effects = TestBed.get(ConnectAppControllerEffects);
//   });
//
//   describe('loadConnectAppController$', () => {
//     it('should work', () => {
//       actions = hot('-a-|', { a: new LoadConnectAppController() });
//       expect(effects.loadConnectAppController$).toBeObservable(
//         hot('-a-|', { a: new ConnectAppControllerLoaded([]) })
//       );
//     });
//   });
// });
