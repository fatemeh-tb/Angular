import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { GridModule, PDFModule, ExcelModule } from '@progress/kendo-angular-grid';


import { AppComponent } from './app.component';
import { AppService } from './app.service';


@NgModule({
  imports: [BrowserModule, HttpClientModule, BrowserAnimationsModule, FormsModule,  GridModule, PDFModule, ExcelModule],
  declarations: [AppComponent],
  providers: [AppService],
  bootstrap: [AppComponent]
})

export class AppModule { }