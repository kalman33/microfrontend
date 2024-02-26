import { ModuleWithProviders, NgModule } from '@angular/core';
import { SearchComponent } from './search/search.component';

@NgModule({
  imports: [],
  declarations: [SearchComponent],
  exports: [SearchComponent]
})
export class CoreModule {
  static forRoot(): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [       
      ]
    };
  }

  constructor() {}
}
