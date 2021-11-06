import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatButtonModule, MatIconModule, MatToolbarModule],
  exports: [MatButtonModule, MatIconModule, MatToolbarModule],
})
export class UiMaterialModule {}
