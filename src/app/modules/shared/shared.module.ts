import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
// import { AuthService } from '../../shared/services/auth.service';
import { MDBSpinningPreloader, MDBBootstrapModulesPro, StepperModule } from 'ng-uikit-pro-standard';
import { CascadingPanelComponent } from './components/cascading-panel/cascading-panel.component';
import { CascadingCardComponent } from './components/cascading-card/cascading-card.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StepperModule,
    MDBBootstrapModulesPro.forRoot()

  ],
  declarations: [
    CascadingPanelComponent,
    CascadingCardComponent
  ],
  providers: [
    MDBSpinningPreloader,
    // AuthService,
  ],
  exports: [
    CascadingCardComponent,
    CascadingPanelComponent,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModulesPro
  ]
})

export class SharedModule {
  public static forRoot(): ModuleWithProviders {
    return {ngModule: SharedModule};
    }
}
