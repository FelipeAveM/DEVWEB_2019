import { NgModule } from '@angular/core';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';



@NgModule({
    imports: [
        MatAutocompleteModule,
         MatNativeDateModule, 
         MatMenuModule,
         MatIconModule, 
         MatButtonModule, 
         MatCheckboxModule,
         MatDatepickerModule, 
         MatToolbarModule, 
         MatInputModule, 
         MatFormFieldModule],
    exports: [
        MatAutocompleteModule, 
        MatNativeDateModule, 
        MatMenuModule, 
        MatIconModule, 
        MatButtonModule, 
        MatCheckboxModule,
        MatDatepickerModule, 
        MatToolbarModule, 
        MatInputModule, 
        MatFormFieldModule],
  })


export class Material {
}