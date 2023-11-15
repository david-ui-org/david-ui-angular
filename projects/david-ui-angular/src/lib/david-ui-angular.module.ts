import { ModuleWithProviders, NgModule } from '@angular/core';
import { DavidUIAngularService } from '../public-api';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
  ],
  imports: [CommonModule, FormsModule],
  exports: [],
})
export class DavidUIAngularModule {
  static forRoot(
    config: string
  ): ModuleWithProviders<DavidUIAngularModule> {
    return {
      ngModule: DavidUIAngularModule,
      providers: [
        // {
        // 	provide: TailwindThemeConfig,
        // 	useValue: config,
        // },
        DavidUIAngularService,
      ],
    };
  }
}
