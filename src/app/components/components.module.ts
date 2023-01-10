import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TableComponent } from './table/table.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    TableComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    TableComponent
  ]
})
export class ComponentsModule { }
