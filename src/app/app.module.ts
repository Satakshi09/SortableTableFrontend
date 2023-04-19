import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TableModule } from 'primeng/table';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import {DialogModule} from 'primeng/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { DialogComponentComponent } from './dialog-component/dialog-component.component';
import { SortDialogComponent } from './sort-dialog/sort-dialog.component';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { Dropdown, DropdownModule } from 'primeng/dropdown';
import {Menubar, MenubarModule} from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    DialogComponentComponent,
    SortDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    HttpClientModule,
    DialogModule,
    BrowserAnimationsModule,
    CommonModule,
    ButtonModule,
    CheckboxModule,
    FormsModule,
    DropdownModule,
    MenubarModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
